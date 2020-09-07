<div id="app-new-start" class="app-new-start dialog" style="display: none">
	<form>
		<img src="/img/logo.png" />
		<p>
			¡Tú página ya está lista! <br>
			Crea una cuenta con nosotros para comenzar a editarla.
		</p>
		<div class="inputWihIcons">
			<i class="fas fa-font"></i>		
			<input type="text" name="nombre" id="nombrePagina" value="" placeholder="Nombre de tu Negocio" />
		</div>
		<div class="inputWihIcons">
			<i class="fas fa-envelope"></i>
			<input type="email" name="correo" id="correo" value="" placeholder="Introduce tu correo" />
		</div>
		<div class="inputWihIcons">
			<i class="fas fa-asterisk"></i>
			<input type="password" name="password" id="password" value="" placeholder="Crea una contraseña" />
		</div>
		<label>
			<input type="checkbox" name="politicas" id="politicas-check" />
			<span>
				He leído y acepto las <a href="/politica-de-privacidad" target="_blank">Políticas de Privacidad</a>
			</span>
		</label>
		<label>
			<input type="checkbox" name="terminos" id="terminos-check"  />
			<span>
				He leído y acepto los <a href="/terminos-y-condiciones" target="_blank">Términos y Condiciones de uso</a>
			</span>
		</label>		
		<span class="form-error name-invalid">Nombre de página inválido: Solo números y letras, sin espacios son permitidos.</span>						
		<span class="form-error empty-fields">Alguno de los campos están vacios</span>
		<span class="form-error not-email">El email is inválido</span>
		<span class="form-error otherMsgs"></span>
		<span class="form-error password-invalid">
			La contraseña debe ser de al menos 6 caracteres incluyendo al menos un número y una letra
		</span>
		<span class="form-error check-invalid">Debes aceptar las Políticas de Privacidad y los Términos y Condiciones.</span>	
		<span class="form-error invalid-response"></span>


		
		<input type="submit" class="boton" name="start" value="¡Comienza ya!" />
	</form>						
</div>