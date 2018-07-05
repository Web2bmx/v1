var winWidth = $(window).width(),
	winHeigth = $(window).height(); 


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
    $(".dialog").dialog({
		autoOpen: false,
		modal: true,
		width: winWidth,
		show: {
		  effect: "fade",
		  duration: 1000
		},
		hide: {
		  effect: "fade",
		  duration: 1000
		}
	  }); 
	  $("#login").click(function(e){
		  e.preventDefault();
			$(".ventana-login").dialog( "open" ); 
	  });	
		$(".cerrar-ventana").click(function(){
			$(".ventana-login").dialog( "close" ); 
		});
		$(".entrar").click(function(){
			if($("#email").val().trim() == "" || !isEmail($("#email").val())){
				$(".login-content .error").show();
			} else {
				$(".login-content .error").hide();
				$(".login-content").fadeOut(100);
				$(".login-success").fadeIn(100);
			}
		});		

	/*GENERAL FUNCTIONS*/
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

});