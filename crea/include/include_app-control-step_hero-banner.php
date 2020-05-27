<div>
						<h2>Elige la imagen de cabecera</h2>
						<form enctype="multipart/form-data" method="POST" class="file-upload">
							<p class="one-line-text">
								<span class="one-line-text">Sube tus imágenes para personalizar tu sitio.</span>
								<button>Selecciona tu imagen...</button>
								<input accept=".png, .jpg, .jpeg" type="file" name="hero" value="Selecciona imagen" />
							</p>
							<input disabled type="submit" value="Subir foto" class="boton"/>
						</form>
						<div class="app-control-images">
							<?php include("include_unsplash_referral.php"); ?>
							<div id='app-control-images-hero'>
								<div class="photo-container"></div>
							</div>
						</div>						
					</div>