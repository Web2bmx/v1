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
			},
			closeOnEscape: false
	  }); 
	  $(".login-btn").click(function(e){
		e.preventDefault();
		$(".login-content").show();
		$(".login-success").hide();
		$(".login-error").hide();		
		$(".ventana-login").dialog( "open" );
		$("#email").val("contacto@web2b.mx");
		$("#password").val("");
	  });	
		$(".cerrar-ventana").click(function(){
			$(".ventana-login").dialog( "close" ); 
		});
		$(".entrar").click(function(){
			if($("#email").val().trim() == "" || !isEmail($("#email").val())){
				$(".login-content .email.error").show();
			} if(!$("#password").val().trim()){
				$(".login-content .password.error").show();
			} else {
				$.post("/landing/scripts/login.php",{
					correo: $("#email").val().trim(),					
					password: $("#password").val()
				})
					.done(function(response){
						if(response.ok){
							$(".login-content .error").hide();
							$(".login-content").fadeOut(100);
							$(".login-success").fadeIn(100);
							// manejar varias paginas de un solo usuario??

							//mostrar usuarios
							localStorage.setItem("web2b_template", response.paginas[0].info);
							localStorage.setItem("web2b_templateId", 1);
							localStorage.setItem("web2b_userId", response.userId);
							window.location.href = "/crea";
						} else {
							$(".login-content .error").hide();
							$(".login-content").fadeOut(100);
							$(".login-error p").html(response.error);
							$(".login-error").fadeIn(100);
						}
					})
					.fail(function(response){

					}).always(function(){
						$(".login-content .error").hide();
					});
			}
		});		

	/*GENERAL FUNCTIONS*/
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

});