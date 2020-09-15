<div class="name-control">
	<h2>Nombre</h2>
	<div class="container-input">
		<label>Dirección web</label>
		<div class="inputWihIcons">
			<i class="fas fa-pen"></i><input data-validate="true" pattern="^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]+$" type="text" id="siteName" name="inp-siteName" placeholder="tuSitio" />
		</div>
		<p class="app-control-step-tooltip-info">Es lo que tus Clientes escribirán para acceder al sitio web de tu Negocio, al final lo podrás cambiar por tu propia dirección web si así lo deseas.</p>
		<p id="control-help-siteName"><span></span>.web2b.mx</p>
		<p class="input-error">La dirección web de tu sitio solo puede contener letras, números y guiones medios y debe de tener como mínimo 3 caracteres.</p>
	</div>
	<div class="container-input">
		<label>Nombre</label>
		<div class="inputWihIcons">
			<i class="fas fa-pen"></i><input type="text" id="inp-content-name" name="inp-content-name" placeholder="Nombre de tu negocio" />
		</div>
		<p class="app-control-step-tooltip-info">Este es el nombre que aparecerá como encabezado en el sitio web de tu Negocio.</p>
		<!--<p><a class="toggle"><i class="fas fa-toggle-on"></i></a>Si usas un logotipo puedes elegir no mostrar tu nombre.</p>-->
	</div>
	<div id="conditional-logo">
	<div class="app-control-images" style="display: none">
			<h4>Tus logotipos</h4>
			<div id='app-control-images-logo'>
				<div class="photo-container"></div>
			</div>
		</div>
		<form enctype="multipart/form-data" method="POST" class="file-upload">
			<button><i class="fas fa-file-upload"></i></i><br />Sube tu logotipo</button>
			<input accept=".png, .jpg, .jpeg" type="file" name="logo" value="Selecciona imagen" />
			<input type="submit" disabled value="Subir archivo" class="boton"/>
		</form>
	</div>
	<div class="container-input">	
		<h3>
			<a id="toggle-logo" class="toggle"><i class="fas fa-toggle-on"></i></a>
			Agregar logotipo
			<input type="checkbox" id="inp-rem-content-logo" name="inp-rem-content-logo" class="remove-content" value="y" checked="checked" />
		</h3>
	</div>
</div>