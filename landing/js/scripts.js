$(document).ready(function() {
	$(".comingsoon").click(function() {
		alert("Proximamente");
	});
	$("a[href^='#']").on("click", function() {
		var top = $($(this).attr("href")).offset().top;
		console.log(top);
		$("html, body").stop().animate({
								scrollTop : (top - 55)
							}, 500, 'swing');
		
		return false;
	});
});