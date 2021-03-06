<div>
	<h2>¿Te gustaría poner más información sobre tu empresa?</h2>
	<div class="container-input">
		<p><a id="toggle-aboutus" class="toggle"><i class="fas fa-toggle-on"></i></a><input type="checkbox" id="inp-rem-content-aboutus" name="inp-rem-content-aboutus" class="remove-content" value="y" checked="checked" />¿Quieres incluir una sección sobre la historia de tu Negocio?</p>
	</div>
	<div id="conditional-aboutus">
		<div class="container-input">
			<div class="inputWihIcons inp-cont">
				<i class="fas fa-users"></i>
				<input type="text" value="" id="inp-content-title-aboutus" name="inp-content-title-aboutus" placeholder="Acerca de nosotros" />
			</div>
			<p class="app-control-step-tooltip-info">Aquí puedes escribir la historia de tu empresa o describir más a fondo quiénes son.</p>
		</div>
		<div class="container-input">
			<textarea id="inp-content-aboutus" name="inp-content-aboutus" placeholder="Una descripción sobre tu empresa o negocio."></textarea>
		</div>
		<div class="container-input">
			<div class="app-control-images">
				<?php include("include_unsplash_referral.php"); ?>
				<div id='app-control-images-aboutus'>
					<div class="photo-container"></div>
				</div>
			</div>
		</div>
	</div>
</div>