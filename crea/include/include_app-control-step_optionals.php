<div>
	<h2>Selecciona otras secciones</h2>
	<div class="container-input">	
		<p><a id="toggle-gallery" class="toggle"><i class="fas fa-toggle-on"></i></a><input type="checkbox" id="inp-rem-content-gallery" name="inp-rem-content-gallery" class="remove-content" value="y" checked="checked" />¿Quieres incluir una sección de galería?</p>
	</div>
	<div id="conditional-gallery">
		<p>Selecciona las imágenes para tu galería</p>
		<div class="container-input">	
			<form enctype="multipart/form-data" method="POST" class="file-upload">
				<p class="one-line-text">
					<span>Sube tus imágenes para personalizar tu sitio.</span>
					<button>Selecciona tu imagen...</button>
					<input accept=".png, .jpg, .jpeg" type="file" name="gallery" value="Selecciona imagen" />
				</p>
				<input type="submit" disabled value="Subir foto" class="boton"/>
			</form>	
			<div class="app-control-images">
				<?php include("include_unsplash_referral.php"); ?>
				<div id='app-control-images-gallery'>
					<div class="photo-container"></div>
				</div>
			</div>
		</div>
	</div>
    <div class="container-input">
		<p><a id="toggle-aboutus" class="toggle"><i class="fas fa-toggle-on"></i></a><input type="checkbox" id="inp-rem-content-aboutus" name="inp-rem-content-aboutus" class="remove-content" value="y" checked="checked" />¿Quieres incluir una sección sobre la historia de tu Negocio?</p>
	</div>
	<div id="conditional-aboutus">
		<div class="container-input">
            <label>¿Te gustaría poner más información sobre tu empresa?</label>
			<div class="inputWihIcons inp-cont">
				<i class="fas fa-users"></i>
				<input type="text" value="" id="inp-content-title-aboutus" name="inp-content-title-aboutus" placeholder="Acerca de nosotros" />
			</div>
			<p class="app-control-step-tooltip-info">Aquí puedes escribir la historia de tu empresa o describir más a fondo quiénes son.</p>
		</div>
		<div class="container-input">
			<textarea id="inp-content-aboutus" name="inp-content-aboutus" placeholder="Una descripción sobre tu empresa o negocio."></textarea>
		</div>
		<div class="container-input">
			<div class="app-control-images">
				<?php include("include_unsplash_referral.php"); ?>
				<div id='app-control-images-aboutus'>
					<div class="photo-container"></div>
				</div>
			</div>
		</div>
	</div>
    <div class="container-input">	
		<p><a id="toggle-cta" class="toggle"><i class="fas fa-toggle-on"></i></a><input type="checkbox" id="inp-rem-content-cta" name="inp-rem-content-cta" class="remove-content" value="y" checked="checked" />¿Quieres incluir una sección para invitar a tus Clientes a realizar una acción?</p>
	</div>
	<div id="conditional-cta">
        <label>¡Invita a tus clientes a realizar una acción!</label>
        <div class="container-input">
			<div class="inputWihIcons inp-cont">
				<i class="fas fa-location-arrow"></i>		
				<input type="text" value="" id="inp-content-title-cta" name="inp-content-title-cta" placeholder="Invita a tus Clientes" />
			</div>
			<p class="app-control-step-tooltip-info">Invita a tus clientes a visitar tu negocio o a conocer tus productos o servicios.</p>
		</div>
		<div class="container-input">				
			<textarea id="inp-content-cta" name="inp-content-cta" placeholder="Detallales qué esperas de ellos."></textarea>
		</div>
		<div class="container-input">				
			<div class="app-control-images">
				<?php include("include_unsplash_referral.php"); ?>
				<div id='app-control-images-cta'>
					<div class="photo-container"></div>
				</div>
			</div>
		</div>
	</div>
</div>