<?php
	$host = $_SERVER['HTTP_HOST'];
	$host_arr = explode(".",$host);
	if($host_arr[0] !== "web2b" && $host_arr[0] !== "local" && $host_arr[0] !== "www"){
		$file = file_get_contents("./client_sites/" . $host_arr[0] . "/index.php");
		echo eval("?>$file");
	} else { ?>
		<!doctype html>
		<html lang="en">
			<head>
				<!-- Begin Inspectlet JS Code -->
					<!--<script type="text/javascript" id="inspectletjs">
					(function() {
					var insp_ab_loader = true; // set this boolean to false to disable the A/B testing loader
					window.__insp = window.__insp || [];
					__insp.push(['wid', 1000927818]);
					var ldinsp = function(){
					if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1000927818&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x);if(typeof insp_ab_loader != "undefined" && insp_ab_loader){ var adlt = function(){ var e = document.getElementById('insp_abl'); if(e){ e.parentNode.removeChild(e); __insp.push(['ab_timeout']); }}; var adlc = "body{ visibility: hidden !important; }"; var adln = typeof insp_ab_loader_t != "undefined" ? insp_ab_loader_t : 1200; insp.onerror = adlt; var abti = setTimeout(adlt, adln); window.__insp_abt = abti; var abl = document.createElement('style'); abl.id = "insp_abl"; abl.type = "text/css"; if(abl.styleSheet) abl.styleSheet.cssText = adlc; else abl.appendChild(document.createTextNode(adlc)); document.head.appendChild(abl); } };
					setTimeout(ldinsp, 0);
					})();
					</script>-->
				<!-- End Inspectlet JS Code -->
				<!-- Global site tag (gtag.js) - Google Analytics -->
					<!--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108388790-1"></script>
					<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-108388790-1');
					</script>-->
				<!---->
				<meta name="viewport" content="width=device-width, user-scalable=no">
				<meta charset="utf-8">
				<title>Web2b - Impulsa tu estrategia digital</title>
				<meta name="description" content="Impulsa tu estrategia digital">
				<meta name="author" content="Web2b">
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
				<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
				<link rel="stylesheet" href="/css/jquery-ui.min.css" >
				<link rel="stylesheet" href="/css/jquery-ui.structure.min.css" >
				<link rel="stylesheet" href="/css/jquery-ui.theme.min.css" >
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">							
				<link rel="stylesheet" href="landing/css/styles.css?v=1.0">
				<!--[if lt IE 9]>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
				<![endif]-->
			</head>
			<body>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
				<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
				<script src="landing/js/landing.bundle.js"></script>
				<header>
					<div id="branding"><img id="logo" src="/img/logo.png" /></div>
					<nav role="navigation">
						<div id="menuToggle">
							<input type="checkbox" />
							<span></span><span></span><span></span>
							<div id="menu">
								<ul>
									<li><a href="#hero">Home</a></li>
									<li><a href="#steps">¿Cómo funciona?</a></li>
									<li><a href="#services">Nuestros servicios</a></li>
									<li><a href="/tour">Comenzar</a></li>
									<li><a class="login-btn" href="">Ingreso</a></li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
				<main>
					<section id="hero">
						<span class='stars'></span><span class='stars2'></span><span class='stars3'></span>
						<div class="container">	
							<img id="graph-rocket" src="landing/img/rocket.png" />					
							<h1><strong>Impulsa</strong> tu estrategia digital</h1>
							<h2>Crea tu página web en minutos</h2>
							<a class="cta" href="/tour">¡Comenzar!</a>
						</div>
						<span class="graph" id="gr_alien_side" style="background-image: url(landing/img/alien_side.png);"></span>
						<span class="graph" id="gr_moon" style="background-image: url(landing/img/moon.png);"></span>
						<span class="graph" id="gr_planet_ring" style="background-image: url(landing/img/planet_ring.png);"></span>
					</section>
					<section id="steps">
						<div class="container">	
							<ol id="list-steps">
								<li><img src="landing/img/step_01.png" /><span>Paso 1</span>Da click en ¡Comenzar! en la sección de arriba para que podamos conocer más de tu Empresa.</li>
								<li><img src="landing/img/step_03.png" /><span>Paso 2</span>Al terminar, te haremos algunas propuestas con las que comenzarás a construir una estrategia digital completa.</li>
								<li><img src="landing/img/step_04.png" /><span>Paso 3</span>Te ayudaremos a agregar el contenido que necesites publicar en tu sitio web.</li>
								<li><img src="landing/img/step_02.png" /><span>Paso 4</span>Selecciona el paquete que más te guste.</li>						
								
							</ol>
						</div>	
					</section>	
					<section id="services">
						<div class="container">		
							<ul id="list-services">
								<li>
									<img src="landing/img/guidance.jpg" />
									<h3>Asesoría digital</h3>
									<p>Te asesoramos para que tu empresa sea exitosa en medios digitales proponiendo la estrategia adecuada para tu negocio.</p>
								</li>
								<li>
									<img src="landing/img/different.jpg" />
									<h3>Diseño único</h3>
									<p>Te ofrecemos las opciones para tu sitio web con las características que tu negocio necesita.</p>
								</li>
								<li>
									<img src="landing/img/grow.jpg" />
									<h3>Crecimiento estratégico</h3>
									<p>Te ayudamos a crecer tu sitio como lo necesites.</p>
								</li>
								<li>
									<img src="landing/img/chart.jpg" />
									<h3>Tendencias de mercado</h3>
									<p>Recibirás información para promocionar tu sitio.</p>
								</li>
								<li>
									<img src="landing/img/support.jpg" />
									<h3>Soporte 24/7</h3>
									<p>Tendrás soporte en todo momento.</p>
								</li>
								<li>
									<img src="landing/img/stats.jpg" />
									<h3>Información relevante</h3>
									<p>Tendrás estadísticas para tomar las mejores decisiones.</p>
								</li>
							</ul>
						</div>
					</section>
					<section id="subscribe" class="canvas bg_white">
						<span class='stars'></span><span class='stars2'></span><span class='stars3'></span>
						<span class="graph" id="gr_ship" style="background-image: url(landing/img/ship.png);"></span>
						<div class="container">
							<form>
								<input type="email" placeholder="Tu correo electrónico" />
								<input class="cta comingsoon" type="submit" value="Suscribirme" />
							</form>
							<p>Suscribete a nuestro boletín y recibe los mejores tips para iniciar tu estrategia digital.</p>
						</div>
					</section>
				</main>	
				<footer>
					<div class="container">
						<menu>
							<h6>Menú</h6>
							<nav>
								<li><a href="#hero">Web2b</a></li>
								<li><a href="#steps">¿Cómo funciona?</a></li>
								<li><a href="#services">Nuestros servicios</a></li>
								<li><a href="/tour">Comenzar</a></li>
								<li><a class="login-btn">Ingreso</a></li>
							</nav>
						</menu>	
						<menu>
							<h6>Blog</h6>
							<nav>
								<li><a href="http://web2b.mx/2018/01/06/como-llegar-al-corazon-de-tus-clientes/">¿Cómo llegar al corazón de tus clientes?</a></li>
								<li><a href="http://web2b.mx/2017/12/06/3-estrategias-para-aprovechar-en-internet-en-un-negocio-local/">3 estrategias para aprovechar en internet en un negocio local</a></li>
								<li><a href="http://web2b.mx/2017/11/28/3-consejos-para-potencializar-digitalmente-tu-negocio/">3 consejos para potencializar digitalmente tu negocio</a></li>
							</nav>
						</menu>	
						<div id="social">
							<a href="https://www.facebook.com/web2bmx/" target="_blank"><img src="landing/img/facebook.png" /> <span>Síguenos en Facebook</span></a>
						</div>
						<div id="copyright">
							<p>&copy;2018 Web2b<br />Todos los derechos reservados</p>
						</div>
					</div>
				</footer>

				<!-- Ingreso Modal -->
				<div class="dialog ventana-login">
					<a class="cerrar-ventana x-close">
						<i class="fas fa-times"></i>
					</a>			
					<div class="login-content">
					
						<img src="/img/logo.png" />	
						<div class="inputWihIcons">
							<i class="fas fa-envelope"></i>			
							<input type="email" name="email" id="email"  placeholder="Correo"  />
						</div>
						<div class="inputWihIcons">
							<i class="fas fa-asterisk"></i>						
							<input type="password" name="password" id="password" value="" placeholder="Contraseña" />
						</div>
						<p>
							¿Ya tienes una cuenta con nosotros?							
						</p>				
						<span class="form-error email" style="display: none">El correo es incorrecto</span>
						<span class="form-error password" style="display: none">La contraseña no puede estar vacía</span>			
						<button class="right entrar">
							Entrar
						</button>				
					</div>
					<div class="login-error" style="display: none">
						<p>
							Esta cuenta no se ha encontrado en el sistema						
						</p>			
						<button class="cerrar-ventana">
							Cerrar
						</button>					
					</div>
					<div class="login-paginas" style="display: none">
						<img src="/img/logo.png" />	
						<h3>¡Bienvenido!</h3>
						<p>
							Por favor, selecciona el proyecto que quieres editar:
						</p>
						<select class="proyectos-disponibles">
							<option value="">Selecciona una página...</option>
						</select>
						<span class="form-error not-selected" style="display: none">Debes seleccionar un proyecto</span>
						<p>
							Complétalo y !publícalo!
						</p>
						<button class="llevame">
							Llévame
						</button>
					</div>		
				</div> 		
			</body>
		</html>
	<?php
	}	
?>
