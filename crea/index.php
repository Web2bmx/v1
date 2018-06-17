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
		<div id="template"></div>
		<div id="app">
			<div id='app-switch'>
				<a id='switch-view'>Mira tu sitio</a>
				<a id='switch-edit' style="display : none;">Edita tu sitio</a>
			</div>
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
				<div class="app-control-step">
					<div>
						<h1>¡Tu página web está casi lista!</h1>
						<p>Vamos a personalizarla.</p>
						<p>A continuación pondremos la información de tu Negocio.</p>
					</div>
				</div>
				<div class="app-control-step">
					<div>		
						<p>El primer paso es poner el nombre de tu Negocio.</p>
						<p>Recuerda escribirlo tal cual como quieres que lo vean tus clientes.</p>
						<div>
							<input type="text" id="inp-name" name="inp-name" value="" placeholder="El nombre de tu negocio" /> 
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h1>Ahora define el contenido de tu página.</h1>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Primero tu eslogan</p>		
						<div>
							<label>Eslógan</label><br /><textarea id="inp-content-slogan" name="inp-content-slogan" placeholder="El eslógan de tu negocio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Ahora la imagen para tu eslogan</p>		
						<div class="app-control-images">
							<div id='app-control-images-hero'>
								<h4>La imágen para tu eslógan</h4>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>	
						<p>Producto o servicio 1</p>	
						<div>
							<label>Producto o servicio 1</label><br /><textarea id="inp-content-item-001" name="inp-content-item-001" placeholder="Tu primer producto o servicio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>	
						<p>Producto o servicio 2</p>	
						<div>
							<label>Producto o servicio 2</label><br /><textarea id="inp-content-item-002" name="inp-content-item-002" placeholder="Tu segundo producto o servicio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>	
						<p>Producto o servicio 3</p>	
						<div>
							<label>Producto o servicio 3</label><br /><textarea id="inp-content-item-003" name="inp-content-item-003" placeholder="Tu tercer producto o servicio"></textarea><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Selecciona las imágenes para tus producto o servicio 1</p>
						<div class="app-control-images">
							<div id='app-control-images-item-1'>
								<h4>La imágen para tu servicio o producto 1</h4>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Selecciona las imágenes para tus producto o servicio 2</p>
						<div class="app-control-images">
							<div id='app-control-images-item-2'>
								<h4>La imágen para tu servicio o producto 2</h4>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Selecciona las imágenes para tus producto o servicio 3</p>
						<div class="app-control-images">
							<div id='app-control-images-item-3'>
								<h4>La imágen para tu servicio o producto 3</h4>
								<div class="photo-container"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h1>¡Ya casi terminamos!</h1>
						<p>Coloca los datos de contacto que deseas que tus Clientes vean sobre tu Negocio.</p>
						<p>Si deseas no mostrarle ni un dato de contacto a tus Clientes sólo haz clic en el botón de Siguiente.</p>
						<div>
							<input type="text" id="inp-contact-email" name="inp-contact-email" value="" placeholder="El correo electrónico de tu Negocio" /><br />
							<input type="text" id="inp-contact-phone" name="inp-contact-phone" value="" placeholder="El teléfono de tu Negocio" /><br />
							<input type="text" id="inp-contact-address" name="inp-contact-address" value="" placeholder="La dirección de tu Negocio" /><br />
							<input type="text" id="inp-contact-schedule" name="inp-contact-schedule" value="" placeholder="El horario de tu negocio" /><br />
							<!--<input type="text" id="inp-contact-map" name="inp-contact-map" value="" placeholder="" /><br />-->
							<input type="text" id="inp-contact-facebook" name="inp-contact-facebook" value="" placeholder="La página de Facebook de tu Negocio" /><br />
							<input type="text" id="inp-contact-twitter" name="inp-contact-twitter" value="" placeholder="La página de Twitter de tu Negocio" /><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h1>¡Excelente! Ahora elige el diseño de tu página.</h1>
						<p>Tenemos un catálogo de plantillas con diseños diferentes disponibles para tí.</p>
						<div>
							<label for="inp-design-001">Cuadrado</label><input type="radio" id="inp-design-001" name="inp-design" value="inp-design-001" checked="checked" /><br />
							<label for="inp-design-002">Circular</label><input type="radio" id="inp-design-002" name="inp-design" value="inp-design-002" /><br /> 
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h1>¡Muy bien! Ahora elige los colores de tu página.</h1>
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