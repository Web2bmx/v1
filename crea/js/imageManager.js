export default function imageManager () {
	var _ctrl = null;
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
			let image_types = ["hero"];
			let items = $("#template .item").length;
			for(let i = 1; i <= items; i++ ){
				image_types.push('item-' + i);
			}
			for(let x=0; x<data.length ; x++){
				var $img_thumb = $(".img-thumb.template").clone();
				$img_thumb.removeClass("template").find(".img-thumb-cont").css({
					"background-image" : ("url(" + data[x].urls.regular + ")")
				}).attr("data-img-url", data[x].urls.regular);
				$img_thumb.find("input").attr("value", data[x].urls.regular);
				for (let i = 0; i < image_types.length; i++) {
					var $this_img_thumb = $img_thumb.clone();
					$this_img_thumb.find("input").attr("name", ("inp-img-" + image_types[i]));
					$("#app-control-images-" + image_types[i] + " .photo-container").append($this_img_thumb);
				}
			}
			$(document.body).on('click', '.img-thumb-cont', function() {
				var $this = $(this);
				$this.closest("[id^='app-control-images']").find(".img-thumb").removeClass("thumb-selected");
				$this.next("input").trigger("click");
				$this.parent().addClass("thumb-selected");
			});	
			$(document.body).on('click', '.img-thumb-cont-zoom', function() {
				let img_url = $(this).parent().find(".img-thumb-cont").attr("data-img-url");
				$("#single-modal>div").html("<img src='" + img_url + "' class='img-thumb-zoomed' />");
				$("#single-modal").fadeIn();
			});
		}).fail(function(){});
	};
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
				_ctrl.jd.imagenes = imagenes;
                _ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
            }
		}).always(function(){
			$("button",e.currentTarget).attr("disabled",false);
		});
	};
    return {
		init : init,
		setImageSelection : setImageSelection,
		uploadImage : uploadImage
    };
}