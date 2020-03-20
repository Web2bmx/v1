
import pageManager from '../../js/pageManager';

import modal from '../../js/modal';
$(document).ready(function() {
	var new_modal = new modal();
	new_modal.init("#modal");
	new_modal.hide();

	/* */
	$("a[href^='#']").on("click", function() {
		var top = $($(this).attr("href")).offset().top;
		console.log(top);
		$("html, body").stop().animate({
								scrollTop : (top - 55)
							}, 500, 'swing');
		
		return false;
	});
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	$(".login-btn").click(function(e){
		e.preventDefault();
		$("#email").val("contacto@web2b.mx");
		$("#password").val("");
		new_modal.show("#dialog-login");
	});	
	
	$("#form-login").submit(function(e){
		e.preventDefault();
		new_modal.hideErrorMessage();
		if($("#email").val().trim() == "" || !isEmail($("#email").val())){
			new_modal.showErrorMessage($("#dialog-login"), "#inp-email", "#error-malformed-email");
		} if(!$("#password").val().trim()){
			new_modal.showErrorMessage($("#dialog-login"), "#inp-password", "#error-malformed-password");
		} else {
			$.post("/landing/scripts/login.php",{
				correo: $("#email").val().trim(),					
				password: $("#password").val()
			}).done(function(response){
				if(response.ok && response.paginas.length > 0){
					// si solo tiene una pagina
					if(response.paginas.length == 1) {
						//mostrar usuarios
						localStorage.setItem("web2b_template", decodeURIComponent(response.paginas[0].info));
						localStorage.setItem("web2b_templateId", response.paginas[0].idSitio);
						localStorage.setItem("web2b_userId", response.userId);
						localStorage.setItem("web2b_actualPage", response.paginas[0]);
						window.location.href = "/crea";
					} else {
						console.log("Page Manager");
						/* */
						// show pages and redirect on success
						new_modal.show("#dialog-project-switcher");
						let new_PageManager = new pageManager();
						new_PageManager.setPaginasInfoFromExternal(response.paginas);
						new_PageManager.fillModal(response.userId, () => {
							window.location.href = "/crea";
						});
						/**/						
					}
				} else {
					new_modal.showErrorMessage($("#dialog-login"), "#inp-password", "#error-login", response.error);
				}
			}).fail(function(response){
				console.log(response);
			}).always(function(){
				$(".login-content .form-error").hide();
			});
		}
	});	
	/*COMPLETE EMAIL SUBSCRIPTION*/
	$(".comingsoon").click(function() {
		var email = $("#input-email-subscribe").val();
		if(isEmail(email)) {
			$.post("/landing/scripts/emailSubscriptions.php",{
				correo: email.trim()
			}).done(function(response){
				console.log(response);
			}).fail(function(response){
				console.log(response);
			}).always(function(){
				
			});
		} else {
			console.log("error");
		}
		return false;
	});
	/*COMPLETE EMAIL SUBSCRIPTION*/
});