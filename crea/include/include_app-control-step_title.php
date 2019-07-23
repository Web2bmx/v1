<div>
	<h2>Primero coloca el nombre de tu negocio</h2>
	<div class="inputWihIcons">
		<i class="fas fa-font"></i>			
		<input type="text" id="inp-content-name" name="inp-content-name" placeholder="Nombre de tu negocio" />
	</div>	
	<h2 class="middle">ó</h2>
	<div class="app-control-images" style="display: none">
		<div id='app-control-images-logo'>
			<div class="photo-container"></div>
		</div>
	</div>	
	<form enctype="multipart/form-data" method="POST" class="file-upload">
		<p class="one-line-text">
			<span>
				Sube tu logotipo en formato png o jpg con un mínimo de 400px
			</span>
			<button>Carga tu imagen</button>
			<input accept=".png, .jpg, .jpeg" type="file" name="logo" value="Selecciona imagen" />
		</p>														
		<input type="submit" disabled value="Subir foto"/>
	</form>						
</div>