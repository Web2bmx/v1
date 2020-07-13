<div class="name-control">
	<h2>Cuéntanos más sobre tu Negocio</h2>
	<div class="container-input">
		<label>¿Cómo quieres que tus Clientes accedan al sitio de tu Negocio?</label>
		<div class="inputWihIcons">
			<i class="fas fa-pen"></i><input data-validate="true" pattern="^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]+$" type="text" id="siteName" name="inp-siteName" placeholder="tuSitio" />
			<span>.web2b.mx</span>
		</div>
		<p class="app-control-step-tooltip-info">Es como tus Clientes accesarán al sitio web de tu Negocio, al final podrás cambiar por tu propia dirección web si así lo deseas, por ejemplo: www.minegocio.com.mx</p>
		<p class="input-error">La dirección web de tu sitio solo puede contener letras, números y guiones medios y debe de tener como mínimo 3 caracteres.</p>
	</div>
	<div class="container-input">
		<label>¿Qué nombre deseas que aparezca en el sitio web de tu Negocio?</label>
		<div class="inputWihIcons">
			<i class="fas fa-pen"></i><input type="text" id="inp-content-name" name="inp-content-name" placeholder="Nombre de tu negocio" />
		</div>
		<p class="app-control-step-tooltip-info">Este es el nombre que aparecerá como encabezado en el sitio web de tu Negocio.</p>
		<!--<p><a class="toggle"><i class="fas fa-toggle-on"></i></a>Si usas un logotipo puedes elegir no mostrar tu nombre.</p>-->
	</div>
	<div class="container-input">	
		<p><a id="toggle-logo" class="toggle"><i class="fas fa-toggle-on"></i></a><input type="checkbox" id="inp-rem-content-logo" name="inp-rem-content-logo" class="remove-content" value="y" checked="checked" />¿Tienes un logotipo para mostrar?</p>
	</div>
	<div id="conditional-logo">
		<!--
		<label>¿Tienes un logotipo para mostrar?</label>
		<a id="toggle-logotipo" class="toggle"><i class="fas fa-toggle-on"></i></a>
		-->
		<form enctype="multipart/form-data" method="POST" class="file-upload">
			<button>Selecciona tu logotipo en formato png o jpg con un mínimo de 400px</button>
			<input accept=".png, .jpg, .jpeg" type="file" name="logo" value="Selecciona imagen" />
			<input type="submit" disabled value="Subir foto" class="boton"/>
		</form>
		<div class="app-control-images" style="display: none">
			<h4>Tus logotipos:</h4>
			<div id='app-control-images-logo'>
				<div class="photo-container"></div>
			</div>
		</div>
	</div>
</div>