$(document).ready(function() {
	optimize();
	$( window ).resize(function() {
		optimize();
	});
	function optimize() {}
	/*IMAGES*/
	$.ajax({
		url: "../../xml/sample_images.xml",
		dataType: "xml",
		success: function(data) {
			$xml = $(data);
			$images = $xml.find("image");
			var t = $images.length;
			var imgs = ["#img-hero", "#img-item-1", "#img-item-2", "#img-item-3"];
			for (i=0; i<imgs.length; i++) {
				var index = Math.floor(Math.random() * t);
				var $img = $images.filter(":eq(" + index + ")");
				$(imgs[i]).attr("class", ("img-cont img-" + $img.find("orientation").html() + " img-" + $img.find("focus").html())).css({
					"background-image" : ("url(" + $img.find("src").html() + ")")
				});
			}
		}
	});
});