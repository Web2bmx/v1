import dialogHandler from '../../js/dialog';
import pageManager from '../../js/pageManager';

$(document).ready(function() {
	let new_PageManager = new pageManager();

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
	
	dialogHandler();
		
	$(".login-btn").click(function(e){
		e.preventDefault();
		$(".login-content").show();
		$(".login-error").hide();
		$(".ventana-login").dialog( "option", "width", 400 );		
		$(".ventana-login").dialog( "open" );
		$("#email").val("contacto@web2b.mx");
		$("#password").val("");
		$(".login-paginas").hide();
		$(".form-error").hide();		
	});	

	$(".cerrar-ventana").click(function(){
		$(".ventana-login").dialog( "close" ); 
	});

	$(".ventana-login form").submit(function(e){
		e.preventDefault();
		if($("#email").val().trim() == "" || !isEmail($("#email").val())){
			$(".login-content .email.form-error").css("display","block");
		} if(!$("#password").val().trim()){
			$(".login-content .password.form-error").css("display","block");
		} else {
			$.post("/landing/scripts/login.php",{
				correo: $("#email").val().trim(),					
				password: $("#password").val()
			})
			.done(function(response){
				if(response.ok && response.paginas.length > 0){
					// si solo tiene una pagina
					if(response.paginas.length == 1) {
						//mostrar usuarios
						localStorage.setItem("web2b_template", response.paginas[0].info);
						localStorage.setItem("web2b_templateId", response.paginas[0].idSitio);
						localStorage.setItem("web2b_userId", response.userId);
						localStorage.setItem("web2b_actualPage", response.paginas[0]);
						window.location.href = "/crea";
					} else {
						// show pages and redirect on success
						new_PageManager.setPaginasInfoFromExternal(response.paginas);
						new_PageManager.fillModal(response.userId, () => {
							window.location.href = "/crea";
						});						
					}
				} else {
					$(".login-content").fadeOut(100);
					$(".login-error p").html(response.error);
					$(".login-error").fadeIn(100);
				}
			})
			.fail(function(response){

			}).always(function(){
				$(".login-content .form-error").hide();
			});
		}
	});		

	/*GENERAL FUNCTIONS*/
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

});