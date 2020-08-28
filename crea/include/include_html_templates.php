<div id="component_templates">
	<!--control-color-->
	<div class="control-color template">
		<div class="control-color-thumb">
			<div class="control-color-thumb-bg"></div>
			<div class="control-color-thumb-bg"></div>
			<div class="control-color-thumb-bg"></div>
		</div>
		<h4></h4>
		<input type="radio" name="inp-palette" value="" style="display: none;" />
	</div>
	<!--img-thumb-->
	<div class="img-thumb template">
		<div class='img-thumb-cont'></div>
		<input type="radio" name="" value="" style="display: none;" />
		<div class='img-thumb-autor' style="display: none">
			<a href="" target="_blank">
				Autor
			</a>
		</div>	
		<div class='img-thumb-cont-zoom'><i class="fas fa-search-plus"></i></div>
		<div class='img-thumb-overlay'><span></span></div>
	</div> 
	<!--app-control-step-tooltip-->
	<span class="app-control-step-tooltip template">?</span>
	<!--#single-modal-->
	<div id="single-modal">
		<i class="far fa-window-close"></i>
		<div></div>
	</div>
	<!--img-->
	<div class="img img-L img-MC template" ></div>
	<!--item-control-->
	<div class="item-control">
		<h3>¿Cuál es tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">0</span>?</h3>
		<div class="container-input">	
			<label>Título del <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">0</span></label>
			<div class="inputWihIcons inp-cont">
				<i class="fas fa-pen"></i>
				<input type="text" value="" id="inp-content-title-item-0" name="inp-content-title-item-0" placeholder="Título" />
			</div>
		</div>
		<div class="container-input">	
			<label>Descripción del <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">0</span></label>
			<textarea id="inp-content-item-0" name="inp-content-item-0" placeholder="Descripción"></textarea>
		</div>
		<div class="container-input">
			<h4>Imagen para el <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">0</span></h4>
		</div>
		<div class="container-input accordion">
			<h4>Sube una imagen para tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">0</span></h4>
			<form enctype="multipart/form-data" method="POST" class="file-upload">
				<p class="one-line-text">
					<button>Selecciona tu imagen</button>
					<input accept=".png, .jpg, .jpeg" type="file" name="item-0" value="Selecciona imagen" />
				</p>
				<input type="submit" disabled value="Subir foto" class="boton"/>
			</form>
		</div>
		<div class="container-input accordion">
			<h4>Elige una imagen para tu <span class="content-item-type">producto o servicio</span> #<span class="content-item-number">0</span> de nuestro catálogo de imagenes</h4>
			<div class="app-control-images">
				<?php include("include_unsplash_referral.php"); ?>
				<div id='app-control-images-item-0'>
					<div class="photo-container"></div>
				</div>
			</div>
		</div>
	</div>
	<!--BG-->
	<div id="modal-bg"></div>
</div>