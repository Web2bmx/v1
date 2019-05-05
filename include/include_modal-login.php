<!-- Ingreso Modal -->
<div class="dialog ventana-login">
	<a class="cerrar-ventana x-close"><i class="fas fa-times"></i></a>			
	<div class="login-content">
		<img src="/img/logo.png" />	
		<div class="inputWihIcons">
			<i class="fas fa-envelope"></i><input type="email" name="email" id="email"  placeholder="Correo"  />
		</div>
		<div class="inputWihIcons">
			<i class="fas fa-asterisk"></i><input type="password" name="password" id="password" value="" placeholder="Contraseña" />
		</div>
		<p>¿Ya tienes una cuenta con nosotros?</p>				
		<span class="form-error email" style="display: none">El correo es incorrecto</span>
		<span class="form-error password" style="display: none">La contraseña no puede estar vacía</span>			
		<button class="right entrar">Entrar</button>				
	</div>
	<div class="login-error" style="display: none">
		<p>Esta cuenta no se ha encontrado en el sistema</p>			
		<button class="cerrar-ventana">Cerrar</button>					
	</div>
	<?php include_once("include/include_page-switcher.php"); ?>		
</div>