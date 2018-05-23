$(document).ready(function() {
	optimize();
	$( window ).resize(function() {
		optimize();
	});
	function optimize() {
		var w = $(window).width();
		if (w >= 768) {
			var src = $("#hero-image").attr("src");
			var n_src = src.replace("hero-mobile-768x1280", "hero-desktop-1440x500");
			$("#hero-image").attr("src", n_src);
		}
	}
});