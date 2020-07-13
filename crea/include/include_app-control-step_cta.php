<div>
	<h2>¡Invita a tus clientes a realizar una acción!</h2>
	<div class="container-input">	
		<p><a id="toggle-aboutus" class="toggle"><i class="fas fa-toggle-on"></i></a><input type="checkbox" id="inp-rem-content-cta" name="inp-rem-content-cta" class="remove-content" value="y" checked="checked" />¿Quieres incluir una sección para invitar a tus Clientes a realizar una acción?</p>
	</div>
	<div id="conditional-cta">
		<div class="container-input">
			<div class="inputWihIcons inp-cont">
				<i class="fas fa-location-arrow"></i>		
				<input type="text" value="" id="inp-content-title-cta" name="inp-content-title-cta" placeholder="Invita a tus Clientes" />
			</div>
			<p class="app-control-step-tooltip-info">Invita a tus clientes a visitar tu negocio o a conocer tus productos o servicios.</p>
		</div>
		<div class="container-input">				
			<textarea id="inp-content-cta" name="inp-content-cta" placeholder="Detallales qué esperas de ellos."></textarea>
		</div>
		<div class="container-input">				
			<div class="app-control-images">
				<?php include("include_unsplash_referral.php"); ?>
				<div id='app-control-images-cta'>
					<div class="photo-container"></div>
				</div>
			</div>
		</div>
	</div>
</div>