<div>	
	<h2>Cuéntanos más sobre lo que tu Negocio ofrece</h2>
	<div class="select-item-control">
		<h3>¿Tu Negocio tiene productos o servicios?</h3>
		<div id="content-item-type" class="container-input">
			<label for="inp-content-item-type-1"><input type="radio" id="inp-content-item-type-1" name="inp-content-item-type" value="1" /> Productos</label>
			<label for="inp-content-item-type-2"><input type="radio" id="inp-content-item-type-2" name="inp-content-item-type" value="2" /> Servcicios</label>
			<label for="inp-content-item-type-3"><input type="radio" id="inp-content-item-type-3" name="inp-content-item-type" value="3" checked="checked" /> Ambos</label>
		</div>
	</div>
	<div class="item-control">
		<h3>¿Cuál es tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span>?</h3>
		<div class="container-input">	
			<label>Escribe el título para tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span></label>
			<div class="inputWihIcons inp-cont">
				<i class="fas fa-pen"></i>
				<input type="text" value="" id="inp-content-title-item-1" name="inp-content-title-item-1" placeholder="Título" />
			</div>
		</div>
		<div class="container-input">	
			<label>Escribe una descripción para tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span></label>
			<textarea id="inp-content-item-1" name="inp-content-item-1" placeholder="Descripción"></textarea>
		</div>
		<div class="container-input">
			<h3>Elige una imagen para tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">1</span></h3>
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
	<div class="add-item-control">
		<h2>¿Tienes otro <span class="content-item-type">producto o servicio</span> que agregar?</h2>
		<div class="container-input">
			<label for="inp-content-item-add-y"><input type="radio" id="inp-content-item-add-y" name="inp-content-item-add" value="y" /> Sí</label>
			<label for="inp-content-item-add-n"><input type="radio" id="inp-content-item-add-n" name="inp-content-item-add" value="n" checked="checked" /> No</label>
			<input type="hidden" id="inp-content-items-number" name="inp-content-items-number" value="0" />
		</div>
	</div>
</div>