<div id="app-cover">
	<div class="app-cover-start">
		<img src="/img/logo.png" class="logo" />
		<aside class='actions'>
			<a class='change-page' style='display: none'>
				<i class="fas fa-exchange-alt"></i>
				<span>
					Cambiar
				</span>
			</a>
			<a class='logout'>
				<i class="fas fa-sign-out-alt"></i>
				<span>
					Salir
				</span>
			</a>
		</aside>
		<h2>Elige el diseño de tu página</h2>					
		<div class="control-design-cont">
			<div class="control-design-thumb">
				<aside>
					<img src="Templates/Template-001/Thumb.png" />
				</aside>							
				<label for="inp-design-001">Formal</label>
				<i class="far fa-circle"></i>
				<input type="radio" id="inp-design-001" name="inp-design" value="inp-design-001" checked="checked" style="display: none;" />
			</div>
			<div class="control-design-thumb">
				<aside>
					<img src="Templates/Template-002/Thumb.png" />
				</aside>
				<label for="inp-design-002">Divertido</label>							
				<i class="far fa-circle"></i>
				<input type="radio" id="inp-design-002" name="inp-design" value="inp-design-002" style="display: none;" />
			</div>
			<div class="control-design-thumb">
				<aside>
					<img src="Templates/Template-003/Thumb.png" />
				</aside>
				<label for="inp-design-003">Impactante</label>
				<i class="far fa-circle"></i>
				<input type="radio" id="inp-design-003" name="inp-design" value="inp-design-003" style="display: none;" />
			</div>
			<div class="control-design-thumb">
				<aside>
					<img src="Templates/Template-004/Thumb.png" />
				</aside>
				<label for="inp-design-004">Moderno</label>
				<i class="far fa-circle"></i>
				<input type="radio" id="inp-design-004" name="inp-design" value="inp-design-004" style="display: none;" />
			</div>
		</div>
		<button class="next nav-btns">
			SELECCIONAR
		</button>
	</div>			
	<div class="app-cover-finish" style="display: none;">
		<div>
			<img src="/img/logo.png" />
			<div class='created' style='display: none'>
				<h3>Tu sitio web está listo</h3>
				<p>Puedes verlo en:</p>
				<p class="url">
					<a href="" target="_blank" class="siteName">
						<span></span>.web2b.mx
					</a>
				</p>
				<p>Tu sitio estará disponible durante <span class='daysLeft'>0</span> días.</p>
			</div>
			<div class='caduco' style='display: none'>
				<h3>Tu sitio web ya no esta disponible</h3>
			</div>
			<p class="extra-info">
				¿Deseas conservar y crecer tu sitio?<br />
				Conoce nuestros paquetes.
			</p>
			<div class="paquetes">
				<div class="app-cover-finish-package">
					<aside>
						<h4>GRATUITO</h4>
						<hr />
						<span class="price">$0</span>
						<span>anual</span>
					</aside>
					<ul>
						<li>Demo por 14 días</li>
						<li>Edición de prueba</li>
						<li>Panel de control</li>
					</ul>
					<button class="finish">
						<i class="fas fa-check-circle"></i>
						<span>COMENZAR DEMO</span>
					</button>
				</div>
				<div class="app-cover-finish-package">
					<aside>
						<h4>BÁSICO</h4>
						<hr />
						<span class="price">$899</span>
						<span>anual</span>
					</aside>
					<ul>
						<li>Conservar mi sitio por un año</li>
						<li>Agregar mi logotipo</li>
						<li>Agregar nuevo contenido</li>
						<li>Actualizaciones ilimitadas</li>
					</ul>

					<div class="finish" id="paypal-button-container" data-total='899' data-desc='Básico'>
					</div>			
				</div>
				<div class="app-cover-finish-package">
					<aside>
						<h4>PREMIUM</h4>
						<hr />
						<span class="price">$1595</span>
						<span>anual</span>
					</aside>
					<ul>
						<li>Dominio .com o .mx</li>
						<li>Conservar mi sitio por un año</li>
						<li>Agregar mi logotipo</li>
						<li>Agregar nuevo contenido</li>
						<li>Actualizaciones ilimitadas</li>
					</ul>

					<div class="finish" id="paypal-button-container2" data-total='1599' data-desc='Premium'>
					</div>	
				</div>
			</div>		
			<button id="back">
				Seguir editando
			</button>										
		</div>
	</div>
	<div class="dialog final-msgs" style="display: none;">
		<a class="cerrar-final-msgs x-close">
			<i class="fas fa-times"></i>
		</a>    
		<p>
		</p>
		<a class="cta cerrar-final-msgs">
			ACEPTAR
		</a>
	</div> 	
</div>