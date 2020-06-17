<div class="item-control">
	<h2>	
		<span>¿Cuál es tu principal producto o servicio?</span>
		<!-- <a style="display:none" class="remove-item">
			<i class="fas fa-trash"></i>
		</a> -->
	</h2>
	<div class="container-input">	
		<div class="inputWihIcons inp-cont">
			<i class="fas fa-pen"></i>
			<input type="text" value="" id="inp-content-title-item-1" name="inp-content-title-item-1" placeholder="Tu primer producto o servicio" />
		</div>
	</div>
	<div class="container-input">	
		<textarea id="inp-content-item-1" name="inp-content-item-1" placeholder="Tu primer producto o servicio"></textarea>

	</div>
	<div class="container-input">
		<!-- <h2>Elige una imagen para tu principal producto o servicio</h2> -->
		<form enctype="multipart/form-data" method="POST" class="file-upload">
			<p class="one-line-text">
				<span>Sube tus imágenes para personalizar tu sitio.</span>
				<button>Selecciona tu imagen...</button>
				<input accept=".png, .jpg, .jpeg" type="file" name="item-1" value="Selecciona imagen" />
			</p>
			<input type="submit" disabled value="Subir foto" class="boton"/>
		</form>		
		<div class="app-control-images">
			<?php include("include_unsplash_referral.php"); ?>
			<div id='app-control-images-item-1'>
				<div class="photo-container"></div>
			</div>
		</div>
	</div>				
</div>