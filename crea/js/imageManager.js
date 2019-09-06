export default function imageManager () {
	var _ctrl = null;
	var _loaded_images = [];
	var _current_images = [];
	var _api_url = "https://api.unsplash.com/photos/search";
	var _api_id = "2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64";
	var _uploaded_images_url = "/crea/client_images/";
	var init = function (_that) { _ctrl = _that; };
	var setImageSelection = (ide) => {
		getImagesUploadedByUser();
		loadImagesFromUnsplash(ide).then(function(data) { onImagesLoaded(data); }, function(err) { console.log(err); });
	};
	var getImagesUploadedByUser = () => {
		//Check if there are images already uploaded by user
	}
	var loadImagesFromUnsplash = (ide) => {
		return new Promise(function(resolve, reject) {
			$.getJSON(
				_api_url, { client_id: _api_id, query: ide, page: 1, per_page: 20, orientation: 'landscape'
			}).done(function(data){
				resolve(data);
			}).fail(function(){ reject(Error('An error occurred while loading images from UnSplash.')); });
		});	
	}
	var onImagesLoaded = (data) => {
		if (_loaded_images.length == 0) {
			for(let x=0; x<data.length ; x++){
				_loaded_images.push(data[x].urls.regular);
			}
		}
		sortImages();
	}
	var sortImages = () => {
		let image_types = ["hero","aboutus","cta","gallery"];
		let items = $("#template .item").length;
		for(let i = 1; i <= items; i++ ){ image_types.push('item-' + i); }
		for (let i = 0; i < image_types.length; i++) {
			_current_images[image_types[i]] = [];
			if(image_types[i] == "gallery") {
				sortImagesMultiple(image_types[i]);
			} else {
				sortImagesSingle(image_types[i]);
			}
		}
	}
	var sortImagesSingle = (t) => {
		if (_ctrl.jd.selections[("#img-" + t)] && _ctrl.jd.selections[("#img-" + t)].img) {
			_current_images[t].push([_ctrl.jd.selections[("#img-" + t)].img, "selected"]);
		}
		for (let i = 0; i < _loaded_images.length; i++) {
			if(_current_images[t]) {
				let add_image = true;
				for (let k = 0; k < _current_images[t].length; k++) {
					if (_current_images[t][k][0] == _loaded_images[i]) {
						add_image = false; break;
					}
				}
				if (add_image) { _current_images[t].push([_loaded_images[i], ""]); }
			}
		}
		if(_current_images[t]) {
			for(let j=0; j < _current_images[t].length; j++){
				setThumb(t, j);
			}
		}
	}
	var sortImagesMultiple = (t) => {
		if (_ctrl.jd.selections[("#img-" + t)] && _ctrl.jd.selections[("#img-" + t)].img) {
			let jd_images = _ctrl.jd.selections[("#img-" + t)].img.split(",");
			for (let j = 0; j < jd_images.length; j++){
				if (jd_images[j] != "") {
					_current_images[t].push([jd_images[j], "selected"]);
				}
			}
		}
		for (let i = 0; i < _loaded_images.length; i++) {
			if(_current_images[t]) {
				let add_image = true;
				for (let k = 0; k < _current_images[t].length; k++) {
					if (_current_images[t][k][0] == _loaded_images[i]) {
						add_image = false; break;
					}
				}
				if (add_image) { _current_images[t].push([_loaded_images[i], ""]); }
			}
		}
		if(_current_images[t]) {
			for(let j=0; j < _current_images[t].length; j++){
				setThumb(t, j);
			}
		}
	}
	var setThumb = (t, j) => {
		let img = _current_images[t][j][0];
		if (img != "") {
			setUploadedImage(img, t, _current_images[t][j][1] == "selected", true, j);
		}
	}
	var setImagesOnStartSession = ($template) => {
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,"#img-gallery","",'image');
		$template.find("#gallery .gallery .img").each(function(index) {
			let img_src = $(this).attr("data-src");
			let p = _ctrl.jd.selections["#img-gallery"].img == "" ? "" : (_ctrl.jd.selections["#img-gallery"].img + ",");
			_ctrl.new_dataManager.saveSelected(_ctrl.jd,"#img-gallery",(p + img_src),'image');
		});

	}
	var setImagesOnResumeSession = ($template) => {
		for(var key in _ctrl.jd.selections){
			switch(_ctrl.jd.selections[key].type){
				case "image":
					if (key == "#img-logo") {
						$(key).attr('src',_ctrl.jd.selections[key].img);
					} else if(key == "#img-gallery") {
						$template.find("#gallery .gallery .img").remove().detach();
						let imgs_str = _ctrl.jd.selections["#img-gallery"].img;
						let imgs_arr = imgs_str.split(",");
						for (let i = 0; i < imgs_arr.length; i++){
							let img = imgs_arr[i];
							let $img = $(".img.template").clone().removeClass("template").css({ "background-image" : ('url(' + img + ')') });
							if (img != "") {
								$template.find("#gallery .gallery").append($img);
							}
						}
						$template.find("#gallery .gallery .img:gt(0)").hide();
					} else {
						$(key).attr("class", ("img img-MC img-L")).css({
							"background-image" : ("url(" + _ctrl.jd.selections[key].img + ")")
						});	
					}
				break;
			}
		}
	}
	var setImagesOnUpdateSession = ($template, target) => {
		let $this = $(target);
		if ($this.is("[value]")) {
			let img_src = $this.val();
			let n_name = $this.attr("name").replace("inp-", "#");
			if ($this.prop('checked')) {
				/*SAVES IMAGE TO OBJECT*/
				saveImageInStorage(img_url, n_name, (n_name == "#img-gallery"));
				/*DISPLAYS IMAGE*/
				displayImageOnTemplate(img_src, n_name.replace("#img-", ""));
			} else {
				if($this.closest("#app-control-images-gallery").length > 0) {
					/*REMOVES FROM SELECTION*/
					if (_ctrl.jd.selections[n_name].img.indexOf(img_src) > -1) {
						var new_img = _ctrl.jd.selections[n_name].img.replace(img_src, "");
						new_img = new_img.replace(",,",",");
						_ctrl.new_dataManager.saveSelected(_ctrl.jd,n_name,new_img,'image');
					}
					/*REMOVES FROM DISPLAY*/
					let $gallery_imgs = $template.find("#gallery .gallery .img");
					$gallery_imgs.filter("[style*='" + img_src + "']").remove();
					/*RESTARTS PLAYER*/
					$gallery_imgs.hide().filter(":eq(0)").show();
				}
			}	
		}
		
	}
	var setUploadedImage = (img, cont, selected, append, index) => {
		let $img_thumb = $(".img-thumb.template").clone();
		$img_thumb.removeClass("template").find(".img-thumb-cont").css({
			"background-image" : ("url(" + img + ")")
		}).attr("data-img-url", img);
		$img_thumb.find("input").attr("value", img);
		var $this_img_thumb = $img_thumb.clone();
		$this_img_thumb.find("input").attr("name", ("inp-img-" + cont));
		if (selected) {
				$this_img_thumb.addClass("selected");
				$this_img_thumb.find("input").attr("checked", "checked");
			}
		if(append) {	
			$("#app-control-images-" + cont + " .photo-container").append($this_img_thumb);
		} else {	
			$("#app-control-images-" + cont + " .photo-container").prepend($this_img_thumb);
		}	
		if (cont == "gallery") {
			$this_img_thumb.find("input").attr("type", "checkbox");
			$this_img_thumb.find(".img-thumb-overlay>span").html(index + 1);
		}
	}
	var uploadImage = (e) => {
		e.preventDefault();
		var f = $("input[type=file]",e.currentTarget),
			formData = new FormData(),
			ide = f.data("ide"),
			name = f.attr("name");
		$("input[type=submit],button",e.currentTarget).attr("disabled",true);
		formData.append(f.attr("name"), f[0].files[0]);		
		$.ajax({
			url: ("scripts/uploadImage.php?unique_id=" + _ctrl.jd_templateId),
			type: "post",
			data: formData,
			cache: false,
			contentType: false,
			processData: false
		})
		.done(function(res){
			if(res.upload == 1){			
				/*SAVES IMAGE TO OBJECT*/
				/*SAVES IMAGE ACCUMULATIVELY*/
				let img_src = _uploaded_images_url + res.texto;
				let n_name = "#img-" + name;
				let pre = _ctrl.jd.selections[(n_name + "-uploaded")] ? ((_ctrl.jd.selections[(n_name + "-uploaded")].text.indexOf(img_src) == -1) ? (_ctrl.jd.selections[(n_name + "-uploaded")].text + ",") : "") : "";
				
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,(n_name + "-uploaded"),(pre + img_src),'text');
				
				saveImageInStorage(img_src, ("#img-" + name), (name == "gallery"));
				/*SAVES IMAGE TO OBJECT*/
				_ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
				/*ADDS THUMB*/
				if (_ctrl.jd.selections[(n_name + "-uploaded")] && (_ctrl.jd.selections[(n_name + "-uploaded")].text.indexOf(img_src) == -1)) {
					setUploadedImage(img_src, name, false, false, 0);
				}
				/*DISPLAYS IMAGE*/
				displayImageOnTemplate(img_src, name);
      }
		}).always(function(){
			$("button",e.currentTarget).attr("disabled",false);
		});
	};
	var saveImageInStorage = (img_url, cont, isGallery) => {
		let pre = isGallery ? (_ctrl.jd.selections[cont].img + ",") : "";
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,cont,(pre + img_url),'image');
	};
	var displayImageOnTemplate = (img_url, cont) => {
		/*DISPLAYS IMAGE*/
		let cont_tag = "#img-" + cont;
		let img = new Image();
		let $template = $("#template");
		img.onload = function() {
			let o = "S";
			if(this.width > this.height) { o = "L"; }
			if(this.width < this.height) { o = "P"; }
			if (cont_tag == "#img-logo") {
				$(cont_tag).attr('src',img_url);
			} else if (cont == "gallery") {
				let $img = $(".img.template").clone().removeClass("template").css({ "background-image" : ('url(' + img_url + ')') });
				$template.find("#gallery .gallery").append($img).find(".img").hide().filter(":eq(0)").show();
			} else {
				$template.find(cont_tag).attr("class", ("img img-cont img-MC img-" + o)).css({
					"background-image" : ("url(" + img_url + ")")
				});
			} 
		};
		img.src = img_url;
	};
	return {
		init : init,
		setImageSelection : setImageSelection,
		setImagesOnStartSession : setImagesOnStartSession,
		setImagesOnResumeSession : setImagesOnResumeSession,
		setImagesOnUpdateSession : setImagesOnUpdateSession,
		uploadImage : uploadImage
    };
}