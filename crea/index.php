<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Web2b - Tu sitio web rápido y fácil</title>
		<meta name="description" content="Impulsa tu estrategia digital">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<meta name="author" content="Web2b">
		<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<link rel="stylesheet" href="css/styles.css?v=1.0">
	</head>
	<body>
		<?php include_once("include/include_libraries.php"); ?>
		<div id="template-cont"></div>
		<div id="app">
			<div id="app-cover">
				<div id="app-cover-start">
					<div>
						<h1>Crea tu página web en 5 mínutos</h1>
						<!--<label>
							Por favor compártenos tu nombre:<br />
							<input type="text" name="nombre" id="nombre" />
						</label>
						<label>
							Y tu correo: <br />
							<input type="email" name="correo" id="correo" />
						</label>
						<span class="empty-fields">Los campos están vacios</span>
						<span class="not-email">El email is inválido</span>-->
						<input type="button" name="start" value="¡Comienza ya!" />						
					</div>
				</div>
				<div id="app-cover-finish" style="display: none;">
					<div>
						<h1>¡Terminamos!</h1>
						<p>Puedes ver tu sitio aquí*, y puedes compartir este enlace con quien tú quieras.</p>
						<p>Tu sitio estará disponible durante 14 días.</p>
						<p>¿Deseas conservar y crecer tu sitio?</p>
						<h2>Conoce nuestros paquetes.</h2>
						<div class="app-cover-finish-package">
							<h3>Paquete Básico</h3>
							<ul>
								<li>Conservar mi sitio por un año.</li>
								<li>Agregar mi logotipo.</li>
								<li>Agregar nuevo contenido.</li>
								<li>Actualizaciones ilimitadas.</li>
								<li>$1,199.00</li>
							</ul>
						</div>
						<div class="app-cover-finish-package">	
							<h3>Paquete Premium</h3>
							<ul>
								<li>Dominio, elnombredeminegocio.mx</li>
								<li>Conservar mi sitio por un año.</li>
								<li>Agregar mi logotipo.</li>
								<li>Agregar nuevo contenido.</li>
								<li>Actualizaciones ilimitadas.</li>
								<li>$2,499.00</li>
							</ul>
						</div>	
						<h2>Escribe un correo donde podamos contactarte</h2>
						<input type="text" placeholder="Tu correo" />
						<h3>Recibirás un correo en los próximos mínutos con los siguientes pasos.</h3>
						<input type="button" name="finish" value="Aceptar" />
					</div>
				</div>
			</div>
			<div id="app-control">
				<div id='app-switch'>
					<a id='switch-view'>Mira tu sitio</a>
					<a id='switch-edit' style="display : none;">Edita tu sitio</a>
				</div>
				<div class="app-control-step">
					<div>
						<h2>¡Tu página web está casi lista!</h2>
						<p>A continuación pondremos la información de tu Negocio.</p>
					</div>
				</div>
				<div class="app-control-step">
					<div>		
						<h2>Ahora escribe el nombre de tu Negocio</h2>
						<p>Recuerda escribirlo tal cual como quieres que lo vean tus clientes.</p>
						<div>
							<input type="text" id="inp-name" name="inp-name" value="" placeholder="El nombre de tu negocio" /> 
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>¿Tienes un eslogan?</h2>
						<p>Escribe una frase breve que describa tu producto o servicio.</p>		
						<div>
							<textarea id="inp-content-slogan" name="inp-content-slogan" placeholder="El eslógan de tu negocio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>Primero elige la imagen principal para tu página:</h2>
						<div class="app-control-images">
							<div id='app-control-images-hero'>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<p>¿Cuál es tu principal producto o servicio?</p>
					<div>	
						<div>
							<textarea id="inp-content-item-001" name="inp-content-item-001" placeholder="Tu primer producto o servicio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Elige una imagen para tu principal producto o servicio:</p>
						<div class="app-control-images">
							<div id='app-control-images-item-1'>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>¿Cuál es tu segundo producto o servicio?</p>
						<div>
							<textarea id="inp-content-item-002" name="inp-content-item-002" placeholder="Tu segundo producto o servicio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Elige una imagen para tu segundo producto o servicio:</p>
						<div class="app-control-images">
							<div id='app-control-images-item-2'>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>	
						<p>¿Cuál es tu tercer producto o servicio?</p>	
						<div>
							<textarea id="inp-content-item-003" name="inp-content-item-003" placeholder="Tu tercer producto o servicio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Elige una imagen para tu tercer producto o servicio:</p>
						<div class="app-control-images">
							<div id='app-control-images-item-3'>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Coloca los datos de contacto que deseas que tus Clientes vean sobre tu Negocio.</p>
						<div>
							<input type="text" id="inp-contact-email" name="inp-contact-email" value="" placeholder="El correo electrónico de tu Negocio" /><br />
							<input type="text" id="inp-contact-phone" name="inp-contact-phone" value="" placeholder="El teléfono de tu Negocio" /><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Coloca la dirección y horario de tu Negocio.</p>
						<div>
							<input type="text" id="inp-contact-address" name="inp-contact-address" value="" placeholder="La dirección de tu Negocio" /><br />
							<input type="text" id="inp-contact-schedule" name="inp-contact-schedule" value="" placeholder="El horario de tu negocio" /><br />
							<!--<input type="text" id="inp-contact-map" name="inp-contact-map" value="" placeholder="" /><br />-->
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Escribe las redes sociales de tu Negocio.</p>
						<div>
							<input type="text" id="inp-contact-facebook" name="inp-contact-facebook" value="" placeholder="La página de Facebook de tu Negocio" /><br />
							<input type="text" id="inp-contact-twitter" name="inp-contact-twitter" value="" placeholder="La página de Twitter de tu Negocio" /><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>¡Ya casi terminamos!</h2>
					</div>
				</div>	
				<div class="app-control-step">
					<div>
						<h2>¡Excelente! Ahora elige el diseño de tu página</h2>
						<p>Tenemos un catálogo de plantillas con diseños diferentes disponibles para tí.</p>
						<div class="control-desing-cont">
							<div class="control-design-thumb">
								<label for="inp-design-001">Cuadrado</label><img src="Templates/Template-001/Thumb.png" /><input type="radio" id="inp-design-001" name="inp-design" value="inp-design-001" checked="checked" style="display: none;" /><br />
							</div>
							<div class="control-design-thumb">
								<label for="inp-design-002">Circular</label><img src="Templates/Template-002/Thumb.png" /><input type="radio" id="inp-design-002" name="inp-design" value="inp-design-002" style="display: none;" /><br /> 
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>¡Muy bien! Ahora elige los colores de tu página.</h2>
						<p>Puedes elegir de nuestras combinaciones de colores o modificar cada color individualmente haciendo clic alguno.</p>
						<div id="app-control-palettes"></div>
					</div>
				</div>
				<nav id='control-view-nav'>
					<div id='control-view-nav-buttons'>
						<a href='#prev' style="display: none;">&lt;</a><a href='#next'>&gt;</a>
					</div>
					<div id='control-view-nav-display'></div>
				</nav>
			</div>
		</div>
		<?php include_once("include/include_html_templates.php"); ?>
		<?php //include_once("include/include_chat.php"); ?>
	</body>
</html>