<div class="brand-name">
	<h2>Elige mostrar el nombre de tu Negocio o tu logotipo</h2>
	<div>
		<p class="form-error">No es posible realizar esta operacion, al menos una de las 2 opciones debe estar seleccionada.</p>
		<aside>
			<p>Escribe el nombre de tu negocio:</p>
			<div class="inputWihIcons">
				<i class="fas fa-font"></i><input type="text" id="inp-content-name" name="inp-content-name" placeholder="Nombre de tu negocio" />
			</div>
			<h4><a class="toogle"><i class="fas fa-toggle-on"></i></a>&nbsp;Si lo prefieres puedes no mostrarlo.</h4>
		</aside>
		<aside>
			<h4><a class="toogle"><i class="fas fa-toggle-on"></i></a>&nbsp;¿Prefieres usar un logotipo?</h4>
			<form enctype="multipart/form-data" method="POST" class="file-upload">
				<p class="one-line-text">
					<span>Sube tu logotipo en formato png o jpg con un mínimo de 400px</span>
					<button>Selecciona tu imagen...</button>
					<input accept=".png, .jpg, .jpeg" type="file" name="logo" value="Selecciona imagen" />
				</p>														
				<input type="submit" disabled value="Subir foto" class="boton"/>
			</form>				
			<div class="app-control-images" style="display: none">
				<p>
					Tus logotipos:
				</p>
				<div id='app-control-images-logo'><div class="photo-container"></div></div>
			</div>
		</aside>
	</div>		
</div>