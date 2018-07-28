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
						<img src="Templates/Thumb.png" />
						<h1>Crea tu página web<br /> en 5 mínutos</h1>
						<label>
							Por favor compártenos tu nombre:<br />
							<input type="text" name="nombre" id="nombre" value="Web2b" />
						</label>
						<label>
							Y tu correo: <br />
							<input type="email" name="correo" id="correo" value="contacto@web2b.mx" />
						</label>
						<span class="empty-fields">Los campos están vacios</span>
						<span class="not-email">El email is inválido</span>
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
								<li>Asesoría para crecer mi página.</li>
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
								<li>Asesoría para crecer mi página.</li>
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
						<h2>Primero escribe el nombre de tu Negocio</h2>
						<p class="app-control-step-tooltip-info">Recuerda escribirlo tal cual como quieres que lo vean tus clientes.</p>
						<div>
							<input type="text" id="inp-content-name" name="inp-content-name" value="" placeholder="El nombre de tu negocio" /> 
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>Ahora elige el diseño de tu página</h2>
						<p class="app-control-step-tooltip-info">Tenemos un catálogo de plantillas con diseños diferentes disponibles para tí.</p>
						<div class="control-desing-cont">
							<div class="control-design-thumb">
								<img src="Templates/Template-001/Thumb.png" /><input type="radio" id="inp-design-001" name="inp-design" value="inp-design-001" checked="checked" style="display: none;" /><label for="inp-design-001"></label><br />
							</div>
							<div class="control-design-thumb">
								<img src="Templates/Template-002/Thumb.png" /><input type="radio" id="inp-design-002" name="inp-design" value="inp-design-002" style="display: none;" /><label for="inp-design-002"></label><br /> 
							</div>
							<div class="control-design-thumb">
								<img src="Templates/Template-003/Thumb.png" /><input type="radio" id="inp-design-003" name="inp-design" value="inp-design-003" style="display: none;" /><label for="inp-design-003"></label><br /> 
							</div>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>Ahora elige los colores de tu página</h2>
						<p class="app-control-step-tooltip-info">Puedes elegir de nuestras combinaciones de colores</p>
						<div id="app-control-palettes"></div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>¿Tienes un eslogan?</h2>
						<p class="app-control-step-tooltip-info">Escribe una frase breve que describa tu producto o servicio.</p>		
						<div>
						<input type="text" id="inp-content-slogan" name="inp-content-slogan" value="" placeholder="El eslógan de tu negocio" class="optional" />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>¿De qué es tu Negocio?</p>
						<div>
							<select id="inp-business-type" name="inp-business-type">
								<option value="people fun">&nbsp;</option>
								<option value="architecture design">Despacho de Arquitectura o Diseño</option>
								<option value="women beauty">Estética</option>
								<option value="medicine health">Farmacia</option>
								<option value="construction building materials">Ferretería</option>
								<option value="italian food">Restaurante italiano</option>
								<option value="mexican food">Restaurante mexicano</option>
								<option value="business excecutive">Servicios profesionales</option>
								<option value="car carshop">Taller mecánico</option>
								<option value="groceries store">Tienda de abarrotes</option>
								<option value="gift shop">Tienda de regalos</option>
							</select>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Ahora elige la imagen principal para tu página</p>
						<div class="app-control-images">
							<div id='app-control-images-hero'>
								<div class="photo-container"></div>
							</div>
						</div>
						<form enctype="multipart/form-data" method="POST" class="file-upload">
							<span class="one-line-text">O sube una imagen de tus archivos:</span>
							<input accept=".png, .jpg, .jpeg" type="file" name="hero" value="Selecciona imagen" />
							<input type="submit" value="Subir foto"/>
						</form>
					</div>
				</div>
				<div class="app-control-step">
					<p>¿Cuál es tu principal producto o servicio?</p>
					<div>	
						<div>
							<input type="text" value="" id="inp-content-title-item-1" name="inp-content-title-item-1" placeholder="Tu primer producto o servicio" /><br />
							<textarea id="inp-content-item-1" name="inp-content-item-1" placeholder="Tu primer producto o servicio"></textarea>
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Elige una imagen para tu principal producto o servicio</p>
						<div class="app-control-images">
							<div id='app-control-images-item-1'>
								<div class="photo-container"></div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>¿Tienes otro producto o servicio que agregar?</p>
						<div>
							<label for="inp-content-item-add-y">Sí</label><input type="radio" id="inp-content-item-add-y" name="inp-content-item-add" value="y" />
							<label for="inp-content-item-add-n">No</label><input type="radio" id="inp-content-item-add-n" name="inp-content-item-add" value="n" checked="checked" />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Coloca los datos de contacto que deseas que tus Clientes vean sobre tu Negocio</p>
						<div>
							<input type="text" id="inp-contact-email" name="inp-contact-email" value="" placeholder="El correo electrónico de tu Negocio" class="optional" /><br />
							<input type="text" id="inp-contact-phone" name="inp-contact-phone" value="" placeholder="El teléfono de tu Negocio" class="optional" /><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Coloca la dirección y horario de tu Negocio</p>
						<div>
							<input type="text" id="inp-contact-address" name="inp-contact-address" value="" placeholder="La dirección de tu Negocio" class="optional" /><br />
							<input type="text" id="inp-contact-schedule" name="inp-contact-schedule" value="" placeholder="El horario de tu negocio" class="optional" /><br />
							<!--<input type="text" id="inp-contact-map" name="inp-contact-map" value="" placeholder="" /><br />-->
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<p>Escribe las redes sociales de tu Negocio</p>
						<div>
							<input type="text" id="inp-contact-facebook" name="inp-contact-facebook" value="" placeholder="La página de Facebook de tu Negocio" class="optional" /><br />
							<input type="text" id="inp-contact-twitter" name="inp-contact-twitter" value="" placeholder="La página de Twitter de tu Negocio" class="optional" /><br />
						</div>
					</div>
				</div>
				<div class="app-control-step">
					<div>
						<h2>¡Terminamos!</h2>
						<p>Revisa tu sitio antes de continuar.</p>
					</div>
				</div>
				<div id="app-control-nav">
					<div id='app-switch'>
						<a id='switch-view'>Mira tu sitio &check;</a>
						<a id='switch-edit' style="display: none;">Edita tu sitio &target;</a>
					</div>
					<nav id='control-view-nav'>
						<a href='#prev' class="disabled">&lt; Anterior</a>
						<div id="control-view-index"><div class="control-view-index-item current"></div></div>
						<a href='#next'>Siguiente &gt;</a>
					</nav>
				</div>	
			</div>
		</div>
		<?php include_once("include/include_html_templates.php"); ?>
		<?php include_once("include/include_chat.php"); ?>
	</body>
</html>