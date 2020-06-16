<div class="name-control">
	<h2>Primero necesitamos los datos generales de tu Negocio</h2>
	<div class="container-input">
		<label>¿Cómo quieres que tus Clientes accedan al sitio de tu Negocio?</label>
		<div class="inputWihIcons">
			<i class="fas fa-pen"></i><input pattern="^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]+$" type="text" id="siteName" name="inp-siteName" placeholder="tuSitio" />
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
		<p><a class="toogle"><i class="fas fa-toggle-on"></i></a>&nbsp;Si usas un logotipo puedes elegir no mostrar tu nombre.</p>
	</div>
	<div class="container-input">
		<label><a class="toogle"><i class="fas fa-toggle-on"></i></a>&nbsp;¿Prefieres usar un logotipo?</label>
		<form enctype="multipart/form-data" method="POST" class="file-upload">
			<p class="one-line-text">
				<span>Sube tu logotipo en formato png o jpg con un mínimo de 400px</span>
				<button>Selecciona tu imagen...</button>
				<input accept=".png, .jpg, .jpeg" type="file" name="logo" value="Selecciona imagen" />
			</p>														
			<input type="submit" disabled value="Subir foto" class="boton"/>
		</form>				
		<div class="app-control-images" style="display: none">
			<p>Tus logotipos:</p>
			<div id='app-control-images-logo'>
				<div class="photo-container">
				</div>
			</div>
		</div>
	</div>
	<div class="container-input">
		<label>¿Quieres agregar un eslogan?</label>
		<div class="inputWihIcons">
			<i class="fas fa-pen"></i>
			<input type="text" id="inp-content-slogan" name="inp-content-slogan" value="" placeholder="El eslógan de tu negocio" class="optional" />
		</div>	
		<p class="app-control-step-tooltip-info">Un eslogan es una frase breve que le describe a tus Clientes que es lo que hace diferente a tu Negocio.</p>		
	</div>
</div>