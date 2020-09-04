<div id="control-optionals">
	<h2>Secciones</h2>
	<div id="optionals-navigation" class="container-input"></div>
	<div class="tab">
		<div class="container-input">	
			<h3>
				<a id="toggle-gallery" class="toggle"><i class="fas fa-toggle-on"></i></a>
				<span class="label">Galería</span>
				<input type="checkbox" id="inp-rem-content-gallery" name="inp-rem-content-gallery" class="remove-content" value="y" checked="checked" />
			</h3>
			<p>Elige las imagenes para la galería del sitio web de tu Negocio</p>
		</div>
		<div id="conditional-gallery">
			<div class="container-input accordion">	
				<h4>Sube una imagen</h4>
				<form enctype="multipart/form-data" method="POST" class="file-upload">
					<p class="one-line-text">
						<button>Selecciona tu imagen</button>
						<input accept=".png, .jpg, .jpeg" type="file" name="gallery" value="Selecciona imagen" />
					</p>
					<input type="submit" disabled value="Subir foto" class="boton"/>
				</form>	
			</div>
			<div class="container-input accordion">	
				<h4>Elige imagenes de nuestro catálogo de imagenes</h4>
				<div class="app-control-images">
					<?php include("include_unsplash_referral.php"); ?>
					<div id='app-control-images-gallery'>
						<div class="photo-container"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="tab">
		<div class="container-input">
			<h3>
				<a id="toggle-aboutus" class="toggle"><i class="fas fa-toggle-on"></i></a>
				<span class="label">Historia</span>
				<input type="checkbox" id="inp-rem-content-aboutus" name="inp-rem-content-aboutus" class="remove-content" value="y" checked="checked" />
			</h3>
			<p>Cuéntale a tus Clientes la historia de tu Negocio</p>
		</div>
		<div id="conditional-aboutus">
			<div class="container-input">
				<label>Escribe el título para la historia de tu Negocio</label>
				<div class="inputWihIcons inp-cont">
					<i class="fas fa-users"></i>
					<input type="text" value="" id="inp-content-title-aboutus" name="inp-content-title-aboutus" placeholder="Acerca de nosotros" />
				</div>
			</div>
			<div class="container-input">
				<label>Escribe la historia de tu Negocio</label>
				<textarea id="inp-content-aboutus" name="inp-content-aboutus" placeholder="Una descripción sobre tu empresa o negocio."></textarea>
			</div>
			<div class="container-input accordion">	
				<h4>Sube una imagen</h4>
				<form enctype="multipart/form-data" method="POST" class="file-upload">
					<p class="one-line-text">
						<button>Selecciona tu imagen</button>
						<input accept=".png, .jpg, .jpeg" type="file" name="aboutus" value="Selecciona imagen" />
					</p>
					<input type="submit" disabled value="Subir foto" class="boton"/>
				</form>	
			</div>
			<div class="container-input accordion">
				<h4>Elige una imagen para la historia de tu Negocio</h4>
				<div class="app-control-images">
					<?php include("include_unsplash_referral.php"); ?>
					<div id='app-control-images-aboutus'>
						<div class="photo-container"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="tab">
		<div class="container-input">	
			<h3>
				<a id="toggle-cta" class="toggle"><i class="fas fa-toggle-on"></i></a>
				<span class="label">Invitación</span>
				<input type="checkbox" id="inp-rem-content-cta" name="inp-rem-content-cta" class="remove-content" value="y" checked="checked" />
			</h3>
			<p>Invita a tus clientes a realizar una acción</p>
		</div>
		<div id="conditional-cta">
			<div class="container-input">
				<label>Dile a tus Clientes que esperas de ellos</label>
				<div class="inputWihIcons inp-cont">
					<i class="fas fa-location-arrow"></i>		
					<input type="text" value="" id="inp-content-title-cta" name="inp-content-title-cta" placeholder="Invita a tus Clientes" />
				</div>
				
			</div>
			<div class="container-input">
				<label>Ofrécele más información a tus Clientes sobre lo que esperas de ellos</label>				
				<textarea id="inp-content-cta" name="inp-content-cta" placeholder="Detallales qué esperas de ellos."></textarea>
			</div>
			<div class="container-input accordion">	
				<h4>Sube una imagen</h4>
				<form enctype="multipart/form-data" method="POST" class="file-upload">
					<p class="one-line-text">
						<button>Selecciona tu imagen</button>
						<input accept=".png, .jpg, .jpeg" type="file" name="cta" value="Selecciona imagen" />
					</p>
					<input type="submit" disabled value="Subir foto" class="boton"/>
				</form>	
			</div>
			<div class="container-input accordion"">				
				<h4>Elige una imagen que motive a tus Clientes a atender a tu llamado</h4>
				<div class="app-control-images>
					<?php include("include_unsplash_referral.php"); ?>
					<div id='app-control-images-cta'>
						<div class="photo-container"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>