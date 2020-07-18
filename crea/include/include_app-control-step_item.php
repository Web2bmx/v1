<div class="item-control">
	<h2>¿Cuál es tu principal producto o servicio?</h2>
	<div class="container-input">	
		<label>Escribe el título para tu primer producto o servicio</label>
		<div class="inputWihIcons inp-cont">
			<i class="fas fa-pen"></i>
			<input type="text" value="" id="inp-content-title-item-1" name="inp-content-title-item-1" placeholder="Tu primer producto o servicio" />
		</div>
	</div>
	<div class="container-input">	
		<label>Escribe una descripción para tu primer producto o servicio</label>
		<textarea id="inp-content-item-1" name="inp-content-item-1" placeholder="Tu primer producto o servicio"></textarea>
	</div>
	<div class="container-input">
		<h2>Elige una imagen para tu principal producto o servicio</h2>
	</div>
	<div class="container-input accordion">
		<h4>Sube una imagen para tu producto o servicio</h4>
		<form enctype="multipart/form-data" method="POST" class="file-upload">
			<p class="one-line-text">
				<button>Selecciona tu imagen</button>
				<input accept=".png, .jpg, .jpeg" type="file" name="item-1" value="Selecciona imagen" />
			</p>
			<input type="submit" disabled value="Subir foto" class="boton"/>
		</form>
	</div>
	<div class="container-input accordion">
		<h4>Elige una imagen para tu producto o servicio de nuestro catálogo de imagenes</h4>
		<div class="app-control-images">
			<?php include("include_unsplash_referral.php"); ?>
			<div id='app-control-images-item-1'>
				<div class="photo-container"></div>
			</div>
		</div>
	</div>				
</div>