<div id="app-new-start" class="app-new-start dialog" style="display: none">
	<form>
		<img src="/img/logo.png" />	
		<div class="inputWihIcons">
			<i class="fas fa-font"></i>		
			<input type="text" name="nombre" id="nombrePagina" value="Web2b" placeholder="Nombre de tu página" />
		</div>
		<div class="inputWihIcons">
			<i class="fas fa-envelope"></i>
			<input type="email" name="correo" id="correo" value="contacto@web2b.mx" placeholder="Correo" />
		</div>
		<div class="inputWihIcons">
			<i class="fas fa-asterisk"></i>
			<input type="password" name="password" id="password" value="" placeholder="Contraseña" />
		</div>
		<p>Crea tu página web en 5 minutos </p>
		<span class="form-error name-invalid">Nombre de página inválido: Solo números y letras, sin espacios son permitidos.</span>						
		<span class="form-error empty-fields">Alguno de los campos están vacios</span>
		<span class="form-error not-email">El email is inválido</span>
		<span class="form-error otherMsgs"></span>
		<span class="form-error password-invalid">
			La contraseña debe ser de al menos 6 caracteres incluyendo al menos un número y una letra
		</span>
		<span class="form-error invalid-response"></span>
		<input type="submit" class="boton" name="start" value="¡Comienza ya!" />
	</form>						
</div>