<div class="brand-name">
	<h2>
		Primero, dinos como quieres presentar tu marca
		<span>Puedes activar cualquiera de las 2 opciones, o ambas.</span>
	</h2>
	<div>
		<p class="form-error">
			No es posible realizar esta operacion, al menos una de las 2 opciones debe estar seleccionada.
		</p>
		<aside>
			<h4>
				Escribe el nombre de tu negocio
				<a class="toogle">
					<i class="fas fa-toggle-on"></i>		
				</a>
			</h4>
			<div class="inputWihIcons">
				<i class="fas fa-font"></i>			
				<input type="text" id="inp-content-name" name="inp-content-name" placeholder="Nombre de tu negocio" />
			</div>
		</aside>
		<h2 class="middle">ó</h2>
		<aside>
			<h4>
				Selecciona/sube tu logotipo
				<a class="toogle">
					<i class="fas fa-toggle-on"></i>			
				</a>			
			</h4>
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
		</aside>
	</div>		
</div>