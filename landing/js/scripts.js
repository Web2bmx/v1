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
		$(".login-error").hide();
		$(".ventana-login").dialog( "option", "width", 400 );		
		$(".ventana-login").dialog( "open" );
		$("#email").val("contacto@web2b.mx");
		$("#password").val("");
	  });	
		$(".cerrar-ventana").click(function(){
			$(".ventana-login").dialog( "close" ); 
		});
		$(".entrar").click(function(){
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
								window.location.href = "/crea";
							} else {
								// manejar varias paginas de un solo usuario??
								let html = "";
								let pags = response.paginas;
								for(let i=0, jd; i < pags.length; i++){
									jd = JSON.parse(pags[i].info);
									html += 
									`<li>
										<a data-pagina="${i}">
											${jd.nombre}
										</a>
									</li>`;
								}																
								$(".login-paginas ul").html(html);
								$(".ventana-login > div").hide();
								$(".login-paginas").show();
								$("[data-pagina]").click({
									pags: pags,
									userId: response.userId
								},function(e){
									let pagina = $(this).data("pagina"),
										d = e.data;
									localStorage.setItem("web2b_template", d.pags[pagina].info);
									localStorage.setItem("web2b_templateId", d.pags[pagina].idSitio);
									localStorage.setItem("web2b_userId", d.userId);
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