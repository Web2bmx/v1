export default function imageManager () {
	var _ctrl = null;
	var _loaded_images = [];
	var init = function (_that) {
		_ctrl = _that;
	};
	var setImageSelection = function (ide) {
		$(".photo-container").html("");
		//Check if there are already images upload from user
		var imagenes = _ctrl.jd.imagenes;
		if(imagenes){
			for(let k in imagenes){
				var arr = imagenes[k].split("#");
				for(let i = 0; i< arr.length; i++ ){
					var $img_thumb = $(".img-thumb.template").clone();
					$img_thumb.removeClass("template").find(".img-thumb-cont").css({
						"background-image" : ("url(/crea/client_images/" + arr[i] + ")")
					});
					$img_thumb.find("input").attr("value", "/crea/client_images/" + arr[i]);
					var $this_img_thumb = $img_thumb.clone();
					$this_img_thumb.find("input").attr("name", ("inp-img-" + k));
					$("#app-control-images-" + k + " .photo-container").append($this_img_thumb);

					// if logo
					if(i == 0 && k == 'logo') {
						showLogo();
					}									
				}
			}
		}
		/* LOAD IMAGES FROM UNSPLASH */
		$.getJSON("https://api.unsplash.com/photos/search",{
			client_id: '2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64',
			query: ide,
			page: 1,
			per_page: 20,
			orientation: 'landscape'
		}).done(function(data){
			onImagesLoaded(data);
		}).fail(function(){});
	};
	var onImagesLoaded = function (data){
		if (_loaded_images.length == 0) {
			for(let x=0; x<data.length ; x++){
				_loaded_images.push(data[x].urls.regular);
			}
		}
		sortImages();
	}
	var sortImages = function (){
		let image_types = ["hero","aboutus","cta","gallery"];
		let items = $("#template .item").length;
		for(let i = 1; i <= items; i++ ){ image_types.push('item-' + i); }
		for (let i = 0; i < image_types.length; i++) {
			let current_images = [];
			current_images[image_types[i]] = [];
			if(image_types[i] == "gallery") {
				sortImagesMultiple(image_types[i], current_images);
			} else {
				sortImagesSingle(image_types[i], current_images);
			}
		}
		$(document.body).on('click', '.img-thumb-cont', function() {
			var $this = $(this);
			$this.closest("[id^='app-control-images']").find(".img-thumb").removeClass("thumb-selected");
			$this.next("input").trigger("click");
			$this.parent().addClass("thumb-selected");
		});
		$(document.body).on('click', '.img-thumb-overlay', function() {
			var $this = $(this);
			$this.closest(".img-thumb").find("input").trigger("click");
			$this.closest(".img-thumb").removeClass("selected");
		});	
		$(document.body).on('click', '.img-thumb-cont-zoom', function() {
			let img_url = $(this).parent().find(".img-thumb-cont").attr("data-img-url");
			$("#single-modal>div").html("<img src='" + img_url + "' class='img-thumb-zoomed' />");
			$("#single-modal").fadeIn();
		});
	}
	var sortImagesSingle = function (t, current_images){
		if (_ctrl.jd.selections[("#img-" + t)] && _ctrl.jd.selections[("#img-" + t)].img) {
			current_images[t].push([_ctrl.jd.selections[("#img-" + t)].img, "selected"]);
		}
		for (let i = 0; i < _loaded_images.length; i++) {
			if(current_images[t]) {
				let add_image = true;
				for (let k = 0; k < current_images[t].length; k++) {
					if (current_images[t][k][0] == _loaded_images[i]) {
						add_image = false; break;
					}
				}
				if (add_image) { current_images[t].push([_loaded_images[i], ""]); }
			}
		}
		if(current_images[t]) {
			for(let j=0; j < current_images[t].length; j++){
				setThumb(t, j, current_images);
			}
		}
	}
	var sortImagesMultiple = function (t, current_images){
		if (_ctrl.jd.selections[("#img-" + t)] && _ctrl.jd.selections[("#img-" + t)].img) {
			let jd_images = _ctrl.jd.selections[("#img-" + t)].img.split(",");
			for (let j = 0; j < jd_images.length; j++){
				if (jd_images[j] != "") {
					current_images[t].push([jd_images[j], "selected"]);
				}
			}
		}
		for (let i = 0; i < _loaded_images.length; i++) {
			if(current_images[t]) {
				let add_image = true;
				for (let k = 0; k < current_images[t].length; k++) {
					if (current_images[t][k][0] == _loaded_images[i]) {
						add_image = false; break;
					}
				}
				if (add_image) { current_images[t].push([_loaded_images[i], ""]); }
			}
		}
		if(current_images[t]) {
			for(let j=0; j < current_images[t].length; j++){
				setThumb(t, j, current_images);
			}
		}
	}
	var setThumb = function (t, j, current_images){
		let $img_thumb = $(".img-thumb.template").clone();
		let img = current_images[t][j][0];
		if (img != "") {
			$img_thumb.removeClass("template").find(".img-thumb-cont").css({
				"background-image" : ("url(" + img + ")")
			}).attr("data-img-url", img);
			$img_thumb.find("input").attr("value", img);
			var $this_img_thumb = $img_thumb.clone();
			$this_img_thumb.find("input").attr("name", ("inp-img-" + t));
			if (current_images[t][j][1] == "selected") {
				$this_img_thumb.addClass("selected");
				$this_img_thumb.find("input").attr("checked", "checked");
			}
			$("#app-control-images-" + t + " .photo-container").append($this_img_thumb);
			if (t == "gallery") {
				$this_img_thumb.find("input").attr("type", "checkbox");
				$this_img_thumb.find(".img-thumb-overlay>span").html(j + 1);
			}
		}
	}
	var setImagesOnStartSession = function ($template){
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,"#img-gallery","",'image');
		$template.find("#gallery .gallery .img").each(function(index) {
			let img_src = $(this).attr("data-src");
			let p = _ctrl.jd.selections["#img-gallery"].img == "" ? "" : (_ctrl.jd.selections["#img-gallery"].img + ",");
			_ctrl.new_dataManager.saveSelected(_ctrl.jd,"#img-gallery",(p + img_src),'image');
		});

	}
	var setImagesOnResumeSession = function ($template){
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
							if (img != "") {
								$template.find("#gallery .gallery").append('<div class="img img-L img-MC " style="background-image: url(' + img + ');"></div>');
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
	var setImagesOnUpdateSession = function ($template, target){
		let $this = $(target);
		if ($this.is("[value]")) {
			let img_src = $this.val();
			let n_name = $this.attr("name").replace("inp-", "#");
			if ($this.prop('checked')) {
				/*SAVES IMAGE TO OBJECT*/
				if($this.closest("#app-control-images-gallery").length > 0) {
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,n_name,(_ctrl.jd.selections[n_name].img + "," + img_src),'image');
				} else {
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,n_name,img_src,'image');
				}
				/*DISPLAYS IMAGE*/
				let img = new Image();
				img.onload = function() {
					let o = "S";
					if(this.width > this.height) { o = "L"; }
					if(this.width < this.height) { o = "P"; }
					if (n_name == "#img-logo") {
						$(n_name).attr('src',img_src);
					} else if ($this.closest("#app-control-images-gallery").length > 0) {
						$template.find("#gallery .gallery").append('<div class="img img-MC img-' + o + ' " style="background-image: url(' + img_src + ');"></div>');
						$template.find("#gallery .gallery .img:gt(0)").hide();
						$template.find("#gallery .gallery .img:eq(0)").show();
					} else {
						$template.find(n_name).attr("class", ("img img-cont img-MC img-" + o)).css({
							"background-image" : ("url(" + img_src + ")")
						});
					} 

				};
				img.src = img_src;
			} else {
				if($this.closest("#app-control-images-gallery").length > 0) {
					/*REMOVES FROM SELECTION*/
					if (_ctrl.jd.selections[n_name].img.indexOf(img_src) > -1) {
						var new_img = _ctrl.jd.selections[n_name].img.replace(img_src, "");
						new_img = new_img.replace(",,",",");
						_ctrl.new_dataManager.saveSelected(_ctrl.jd,n_name,new_img,'image');
					}
					/*REMOVES FROM DISPLAY*/
					$template.find("#gallery .gallery .img[style*='" + img_src + "']").remove();
					$template.find("#gallery .gallery .img:gt(0)").hide();
					$template.find("#gallery .gallery .img:eq(0)").show();
				}
			}	
		}
		
	}
	var uploadImage = function (e){
		e.preventDefault();
		var f = $("input[type=file]",e.currentTarget),
			formData = new FormData(),
			ide = f.data("ide"),
			name = f.attr("name");
		$("input[type=submit],button",e.currentTarget).attr("disabled",true);
		formData.append(f.attr("name"), f[0].files[0]);		
		$.ajax({
			url: "scripts/uploadImage.php",
			type: "post",
			data: formData,
			cache: false,
			contentType: false,
			processData: false
		})
		.done(function(res){
			if(res.upload == 1){			
                var imagenes = _ctrl.jd.imagenes || {};
				imagenes[name] = (imagenes[name] ? imagenes[name] + "#" + res.texto : res.texto);

				var $img_thumb = $(".img-thumb.template").clone();
				$img_thumb.removeClass("template").find(".img-thumb-cont").css({
					"background-image" : ("url(/crea/client_images/" + res.texto + ")")
				});
				$img_thumb.find("input").attr("value", "/crea/client_images/" + res.texto);
				var $this_img_thumb = $img_thumb.clone();
				$this_img_thumb.find("input").attr("name", ("inp-img-" + name));
				$("#app-control-images-" + name + " .photo-container").prepend($this_img_thumb);

				//if logo
				showLogo();

				_ctrl.jd.imagenes = imagenes;
                _ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
            }
		}).always(function(){
			$("button",e.currentTarget).attr("disabled",false);
		});
	};
	var showLogo = () => {
		$("#app-control-images-logo").parent().attr('style','');
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