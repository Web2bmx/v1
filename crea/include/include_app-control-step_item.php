<div>	
	<h2>Productos y Servicios</h2>
	<div class="select-item-control">
		<div class="container-input">	
			<h3>¿Tu Negocio tiene productos o servicios?</h3>
		</div>
		<div id="content-item-type" class="container-input">
			<label for="inp-content-item-type-1"><input type="radio" id="inp-content-item-type-1" name="inp-content-item-type" value="1" /> Productos</label>
			<label for="inp-content-item-type-2"><input type="radio" id="inp-content-item-type-2" name="inp-content-item-type" value="2" /> Servicios</label>
			<label for="inp-content-item-type-3"><input type="radio" id="inp-content-item-type-3" name="inp-content-item-type" value="3" checked="checked" /> Ambos</label>
		</div>
	</div>
	<div class="container-input">
		<h3>¿Cuántos?</h3>
		<div class="number-item-control">
			<button class="items-change-number remove-item">-</button>
			<input type="text" id="inp-content-items-number" name="inp-content-items-number" value="0" disabled />
			<button class="items-change-number add-item">+</button>
		</div>
	</div>
	<div class="item-control">
		<h3>¿Cuál es tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span>?</h3>
		<div class="container-input">	
			<label>Título del <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span></label>
			<div class="inputWihIcons inp-cont">
				<i class="fas fa-pen"></i>
				<input type="text" value="" id="inp-content-title-item-1" name="inp-content-title-item-1" placeholder="Título" />
			</div>
		</div>
		<div class="container-input">	
			<label>Descripción del <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span></label>
			<textarea id="inp-content-item-1" name="inp-content-item-1" placeholder="Descripción"></textarea>
		</div>
		<div class="container-input">
			<h4>Imagen para el <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span></h4>
		</div>
		<div class="container-input accordion">
			<h4>Sube una imagen para tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span></h4>
			<form enctype="multipart/form-data" method="POST" class="file-upload">
				<p class="one-line-text">
					<button>Selecciona tu imagen</button>
					<input accept=".png, .jpg, .jpeg" type="file" name="item-1" value="Selecciona imagen" />
				</p>
				<input type="submit" disabled value="Subir foto" class="boton"/>
			</form>
		</div>
		<div class="container-input accordion">
			<h4>Elige una imagen para tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span> de nuestro catálogo de imagenes</h4>
			<div class="app-control-images">
				<?php include("include_unsplash_referral.php"); ?>
				<div id='app-control-images-item-1'>
					<div class="photo-container"></div>
				</div>
			</div>
		</div>
	</div>
</div>