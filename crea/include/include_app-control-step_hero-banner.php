<div>
	<h2>Portada</h2>
	<div class="container-input">
		<label>Eslogan</label>
		<div class="inputWihIcons">
			<i class="fas fa-pen"></i>
			<input type="text" id="inp-content-slogan" name="inp-content-slogan" value="" placeholder="El eslógan de tu negocio" class="optional" />
		</div>	
		<p class="app-control-step-tooltip-info">Un eslogan es una frase breve que le describe a tus Clientes que es lo que hace diferente a tu Negocio. Hemos redactado este eslogan para tu Negocio, puedes modificarlo si así lo deseas.</p>		
	</div>
	<div class="container-input accordion">
		<h3>Imagen de portada</h3>
	</div>
	<div class="container-input accordion">
		<h4>Sube tu imagen</h4>
		<form enctype="multipart/form-data" method="POST" class="file-upload">
			<p class="one-line-text">
				<button>Selecciona tu imagen</button>
				<input accept=".png, .jpg, .jpeg" type="file" name="hero" value="Selecciona imagen" />
			</p>
			<input disabled type="submit" value="Subir foto" class="boton"/>
		</form>
	</div>
	<div class="container-input accordion">
		<h4>Elige una imagen de nuestro catálogo</h4>
		<div class="app-control-images">
			<?php include("include_unsplash_referral.php"); ?>
			<div id='app-control-images-hero'>
				<div class="photo-container"></div>
			</div>
		</div>
	</div>
</div>