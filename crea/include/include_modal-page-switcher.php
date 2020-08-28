<!--
<div class="dialog ventana-login">
    <a class="cerrar-ventana x-close">
        <i class="fas fa-times"></i>
    </a>  -->
    <?php
        //include_once("../include/include_page-switcher.php");
    ?>		
<!--</div> -->

<div class="page-switcher ventana-login" style="display: none;">
    <img src="/img/logo.png" />	
    <p>Selecciona el proyecto que quieres editar:</p>
    <select class="proyectos-disponibles">
        <option value="">Selecciona una página...</option>
    </select>
    <span class="form-error not-selected" style="display: none">Debes seleccionar un proyecto</span>
    <button class="llevame">Editar</button>
</div>