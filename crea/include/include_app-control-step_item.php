<div class="product">
	<h2>	
		<span>¿Cuál es tu principal producto o servicio?</span>
		<!-- <a style="display:none" class="remove-item">
			<i class="fas fa-trash"></i>
		</a> -->
	</h2>
	<div>	

		<div class="inp-cont">
			<input class='noIcon' type="text" value="" id="inp-content-title-item-1" name="inp-content-title-item-1" placeholder="Tu primer producto o servicio" /><br />
		</div>
		
		<textarea id="inp-content-item-1" name="inp-content-item-1" placeholder="Tu primer producto o servicio"></textarea>

	</div>
	<!-- <h2>Elige una imagen para tu principal producto o servicio</h2> -->
	<div class="app-control-images">
		<?php include("include_unsplash_referral.php"); ?>
		<div id='app-control-images-item-1'>
			<div class="photo-container"></div>
		</div>
	</div>
	<form enctype="multipart/form-data" method="POST" class="file-upload">
		<p class="one-line-text">
			<span>Sube tus propias imágenes para personalizar tu sitio web.</span>
			<button>Carga tu imagen</button>
			<input accept=".png, .jpg, .jpeg" type="file" name="item-1" value="Selecciona imagen" />
		</p>
		<input type="submit" disabled value="Subir foto"/>
	</form>						
</div>