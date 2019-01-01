export default function imageManager () {
	var _this = null;
	var init = function (_that) {
		_this = _that;
	}
	var setImageSelection = function (jd,ide) {
        $(".photo-container").html("");
		//Check if there are already images upload from user
		var imagenes = jd.imagenes;
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
			let image_types = ["hero", "item-1"];
			for(let x=0; x<data.length ; x++){
				var $img_thumb = $(".img-thumb.template").clone();
				$img_thumb.removeClass("template").find(".img-thumb-cont").css({
					"background-image" : ("url(" + data[x]["urls"]["regular"] + ")")
				}).attr("data-img-url", data[x]["urls"]["regular"]);
				$img_thumb.find("input").attr("value", data[x]["urls"]["regular"]);
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
    return {
		init : init,
		setImageSelection : setImageSelection
    };
}