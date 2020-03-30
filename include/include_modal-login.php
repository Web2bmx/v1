<section id="modal" class="modal-narrow" style="display: none">
	<div id="modal-overlay"></div>
	<a id="modal-close" class="cerrar-ventana x-close"><i class="fas fa-times"></i></a>	
	<img class="logo" src="landing/img/logo_web2b.svg" />
    <div id="dialog-login" class="dialog">
		<form id="form-login">
			<div class="login-content">
				<p>
					¿Ya tienes una cuenta con nosotros? <br>
					Sino, toma nuestro tour 
					<a href="/tour">
						dando clic aquí.
					</a>
				</p>
				<div id="inp-email" class="inputWihIcons"><i class="fas fa-envelope"></i><input type="email" name="email" id="email"  placeholder="Correo"  /></div>
				<div id="inp-password" class="inputWihIcons"><i class="fas fa-asterisk"></i><input type="password" name="password" id="password" value="" placeholder="Contraseña" /></div>
								
			</div>
			<!--<div class="login-error" style="display: none">
				<p>Esta cuenta no se ha encontrado en el sistema</p>			
				<button class="cerrar-ventana">Cerrar</button>					
			</div>-->
			<nav><input type="submit" class="boton entrar" value="Entrar" /></nav>
		</form>
	</div>
	<div id="dialog-project-switcher" class="dialog">
		<h3>¡Bienvenido!</h3>
		<p>Por favor, selecciona el proyecto que quieres editar:</p>
		<select class="proyectos-disponibles">
			<option value="">Selecciona una página...</option>
		</select>
		<p>Complétalo y !publícalo!</p>
		<nav><button class="boton llevame">Llévame</button></nav>
	</div>
	<p id="error-login" class="dialog-error" style="display: none;"></p>
	<p id="error-malformed-email" class="dialog-error" style="display: none;">El correo es incorrecto</p>
	<p id="error-malformed-password" class="dialog-error" style="display: none;">La contraseña no puede estar vacía</p>
	<p id="error-no-project-selected" class="dialog-error" style="display: none;">Debes seleccionar un proyecto</p>
</section>