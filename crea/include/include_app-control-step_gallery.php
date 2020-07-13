<div>
	<h2>Selecciona las imágenes para tu galería.</h2>
	<div class="container-input">	
		<p><a id="toggle-aboutus" class="toggle"><i class="fas fa-toggle-on"></i></a><input type="checkbox" id="inp-rem-content-gallery" name="inp-rem-content-gallery" class="remove-content" value="y" checked="checked" />¿Quieres incluir una sección de galería?</p>
	</div>
	<div id="conditional-gallery">
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
</div>