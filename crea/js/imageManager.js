export default function imageManager () {
	var _ctrl = null;
	var _uploaded_images = {};
	var _loaded_images = [];
	var _current_images = [];
	var _uploaded_images_url = "/crea/client_images/";
	var _err_unsplash = "An error occurred while loading images from UnSplash.";
	var init = function (_that) { _ctrl = _that; };
	var setImageSelection = (ide) => {
		getImagesUploadedByUser();
		loadImagesFromUnsplash(ide).then(function(data) { onImagesLoaded(data); }, function(err) { console.log(err); });
	};

	var getImagesUploadedByUser = () => {
		let s = "-uploaded";
		let keys = Object.keys(_ctrl.jd.selections);
		for(let i = 0; i < keys.length; i++) {
			if(keys[i].indexOf(s) > -1) {
				let ns = keys[i].replace(s, "");
				let obj = _ctrl.jd.selections[keys[i]];
				if (obj.text && obj.text != "") {
					_uploaded_images[ns] = [];
					let arr = obj.text.split(",");
					for (let k = 0; k < arr.length; k++) { _uploaded_images[ns].push(arr[k]); }
				}
			}
		}
	};
	var loadImagesFromUnsplash = (ide) => {
		return new Promise(function(resolve, reject) {
			$.post( "scripts/unsplashMW.php", { 
				api_path: "https://api.unsplash.com/search/photos", 
				params: "query=" + encodeURIComponent(ide) + "&page=1&per_page=20&orientation=landscape"
			})
			.done(function(data){
				resolve(data.results);
			}).fail(function(){ reject(Error(_err_unsplash)); });
		});	
	};
	var onImagesLoaded = (data) => {
		if (_loaded_images.length == 0) {
			for(let x=0; x<data.length ; x++){
				_loaded_images.push(
					data[x].urls.regular + '#web2b#' +
					data[x].links.download_location + '#web2b#' +
					data[x].user.links.html + '#web2b#' +
					data[x].user.name
					);
			}
		}
		sortImages();
	};
	var sortImages = () => {
		let image_types = ["hero","aboutus","cta","gallery","logo"];
		let items = $("#template .item").length;
		for(let i = 1; i <= items; i++ ){ image_types.push('item-' + i); }
		for (let i = 0; i < image_types.length; i++) {
			let t = image_types[i];
			_current_images[t] = [];
			if (_ctrl.jd.selections[("#img-" + t)] && _ctrl.jd.selections[("#img-" + t)].img) {
				let jd_images = _ctrl.jd.selections[("#img-" + t)].img.split(",");
				for (let j = 0; j < jd_images.length; j++){
					if (jd_images[j] != "") {
						_current_images[t].push([jd_images[j], "selected"]);
					}
				}
			}

			// arr of base images from unsplash
			let arr = [];
			// exclde from here if needed
			if(t != 'logo') {
				arr = _uploaded_images["#img-" + t] ? _uploaded_images["#img-" + t].concat(_loaded_images) : _loaded_images;
			}
			for (let i = 0; i < arr.length; i++) {
				let add_image = true;
				for (let k = 0; k < _current_images[t].length; k++) {
					if (_current_images[t][k][0] == arr[i]) {
						add_image = false; break;
					}
				}
				if (add_image) { _current_images[t].push([arr[i], ""]); }
			}

			// Clean container before addin the images
			$("#app-control-images-" + t + " .photo-container").empty();
			
			for(let j=0; j < _current_images[t].length; j++){
				setUploadedImage(_current_images[t][j][0], t, _current_images[t][j][1] == "selected", true, j);
			}
		}
	};
	var setImagesOnStartSession = () => {
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,"#img-gallery","",'image');
		$("#gallery .gallery .img").each(function(index) {
			let img_src = $(this).attr("data-src");
			let p = _ctrl.jd.selections["#img-gallery"].img == "" ? "" : (_ctrl.jd.selections["#img-gallery"].img + ",");
			_ctrl.new_dataManager.saveSelected(_ctrl.jd,"#img-gallery",(p + img_src),'image');
		});

	};
	var setImagesOnResumeSession = () => {
		for(var key in _ctrl.jd.selections){
			switch(_ctrl.jd.selections[key].type){
				case "image":					
					if (key == "#img-logo") {
						if(_ctrl.jd.selections[key].active !== undefined && _ctrl.jd.selections[key].active === false) {
							_ctrl.new_appManager.hideTemplateElements(true, key);
							_ctrl.new_appManager.hideFormElements("[name='logo']",'#img-logo',"image");
						}
						$(key).attr('src',_ctrl.jd.selections[key].img);
					} else if(key == "#img-gallery") {
						$("#gallery .gallery .img").remove().detach();
						let imgs_str = _ctrl.jd.selections["#img-gallery"].img;
						let imgs_arr = imgs_str.split(",");
						for (let i = 0; i < imgs_arr.length; i++){
							let img = imgs_arr[i];
							if(img.search('#web2b#') !== -1) {
								const arr = img.split('#web2b#');
								img = arr[0];
							}	
							let $img = $(".img.template").clone().removeClass("template").css(setBackgroundImage(img));
							if (img != "") {
								$("#gallery .gallery").append($img);
							}
						}
						$("#gallery .gallery .img:gt(0)").hide();
					} else {
						let img = _ctrl.jd.selections[key].img;
						if(img.search('#web2b#') !== -1) {
							const arr = img.split('#web2b#');
							img = arr[0];
						}						
						$(key).attr("class", ("img img-MC img-L")).css(setBackgroundImage(img));	
					}
				break;
			}
		}
	};
	var setImagesOnUpdateSession = (target) => {
		let $this = $(target);
		if ($this.is("[value]")) {
			let img = $this.val();
			let org_img = img;
			let n_name = $this.attr("name").replace("inp-", "#");

			let downloadUrl = $this.attr('data-download');
			let autorUrl = $this.attr('data-autor');
			let autor = $this.attr('data-autor-name');

			img = downloadUrl !== undefined ?
				(img + '#web2b#' +
				downloadUrl + '#web2b#' +
				autorUrl + '#web2b#' +
				autor) :
				img;


			if ($this.prop('checked')) {
				/* call unsplash download link if exists and info*/
				if(downloadUrl !== undefined) {
					$.post( "scripts/unsplashMW.php", {
						api_path: downloadUrl
					});
				}
				
				/*SAVES IMAGE TO OBJECT*/
				saveImageInStorage(img, n_name, (n_name == "#img-gallery"));
				
				/*DISPLAYS IMAGE*/
				displayImageOnTemplate(org_img, n_name.replace("#img-", ""));
			} else {
				if($this.closest("#app-control-images-gallery").length > 0) {
					/*REMOVES FROM SELECTION*/
					let gallery_arr = _ctrl.jd.selections[n_name].img.split(',');
					if (gallery_arr.indexOf(img) != -1) {
						gallery_arr.splice(gallery_arr.indexOf(img),1);
						var new_arr = gallery_arr.join(',');
						_ctrl.new_dataManager.saveSelected(_ctrl.jd,n_name,new_arr,'image');
					}
					/*REMOVES FROM DISPLAY AND RESTARTS PLAYER*/
					//$("#gallery .gallery .img").filter("[style*='" + org_img + "']").remove().end().hide().filter(":eq(0)").show();
					$("#gallery .gallery .img").filter("[style*='" + org_img + "']").remove();
					$("#gallery .gallery .img").hide();
					$("#gallery .gallery .img").first().show();
				}
			}	
		}
		
	};
	var setUploadedImage = (img, cont, selected, append, index) => {
		let arr = '';
		if(img.search('#web2b#') !== -1) {
			arr = img.split('#web2b#');
			img = arr[0];
		}
		let $img_thumb = $(".img-thumb.template").clone();
		$img_thumb.removeClass("template").find(".img-thumb-cont").css(setBackgroundImage(img)).attr("data-img-url", img);
		$img_thumb.find("input").attr("value", img);
		if(arr != ''){
			$img_thumb.find("input").attr('data-download', arr[1]);
			$img_thumb.find("input").attr('data-autor', arr[2]);
			$img_thumb.find("input").attr('data-autor-name', arr[3]);
			let autor_name = arr[3];
			$img_thumb.find(".img-thumb-autor a").attr('href',
				arr[2] + "?utm_source=web2b&utm_medium=referral");
				$img_thumb.find(".img-thumb-autor a").text(autor_name);
			$img_thumb.find(".img-thumb-autor").show();
		}
		var $this_img_thumb = $img_thumb.clone();
		$this_img_thumb.find("input").attr("name", ("inp-img-" + cont));
		if (selected) { $this_img_thumb.addClass("thumb-selected").find("input").attr("checked", "checked"); }
		if(append) {	
			$("#app-control-images-" + cont + " .photo-container").append($this_img_thumb);
		} else {	
			$("#app-control-images-" + cont + " .photo-container").prepend($this_img_thumb);
		}	
		if (cont == "gallery") {
			$this_img_thumb.find("input").attr("type", "checkbox");
			$this_img_thumb.find(".img-thumb-overlay>span").html(index + 1);
		}
	};
	var uploadImage = (e) => {
		e.preventDefault();		

		let parent = $(e.currentTarget).parent();
		let f = $("input[type=file]",parent);
		let	formData = new FormData();
		let ide = f.data("ide");
		let name = f.attr("name");

		// remove previous errors
		$('.error', parent).remove();

		$("input[type=submit],button",parent).attr("disabled",true);
		formData.append(f.attr("name"), f[0].files[0]);	

		$.ajax({ url: ("scripts/uploadImage.php?unique_id=" + _ctrl.jd_templateId), type: "post", data: formData, cache: false, contentType: false, processData: false })
		.done(function(res){
			if(res.upload == 1){			
				let img_src = _uploaded_images_url + res.texto;
				let n_name = "#img-" + name;
				let pre = _ctrl.jd.selections[(n_name + "-uploaded")] ? ((_ctrl.jd.selections[(n_name + "-uploaded")].text.indexOf(img_src) == -1) ? (_ctrl.jd.selections[(n_name + "-uploaded")].text + ",") : "") : "";
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,(n_name + "-uploaded"),(pre + img_src),'text');
				saveImageInStorage(img_src, ("#img-" + name), (name == "gallery"));
				/*SAVES IMAGE TO OBJECT*/
				_ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
				/*ADDS THUMB*/
				//if (_ctrl.jd.selections[(n_name + "-uploaded")] && (_ctrl.jd.selections[(n_name + "-uploaded")].text.indexOf(img_src) == -1)) {
					setUploadedImage(img_src, name, false, false, 0);
				//}
				/*DISPLAYS IMAGE*/
				displayImageOnTemplate(img_src, name);
      		} else {
				parent.append("<span class='error'>Error al subir tu foto: " + res.texto + "</span>");
			}
		})
		.fail((e)=>{
			console.log(e);
		})
		.always(function(){ $("button",parent).attr("disabled",false); });
	};
	var saveImageInStorage = (img, cont, isGallery) => {
		let pre = isGallery ? (_ctrl.jd.selections[cont].img + ",") : "";
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,cont,(pre + img),'image');
	};
	var displayImageOnTemplate = (img, cont) => {
		if (cont == "logo") {
			$("#img-logo").attr('src',img);
		} else if (cont == "gallery") {
			let $img = $(".img.template").clone().removeClass("template").css(setBackgroundImage(img));
			$("#gallery .gallery").append($img).find(".img").hide().filter(":eq(0)").show();
		} else {
			$("#img-" + cont).css(setBackgroundImage(img));
		} 
	};
	var setBackgroundImage = (img, obj = {}) => { obj["background-image"] = 'url(' + img + ')'; return obj; };
	return {
		init : init,
		setImageSelection : setImageSelection,
		setImagesOnStartSession : setImagesOnStartSession,
		setImagesOnResumeSession : setImagesOnResumeSession,
		setImagesOnUpdateSession : setImagesOnUpdateSession,
		uploadImage : uploadImage
    };
}