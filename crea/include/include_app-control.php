<div id="app-control">
    <div id='app-switch'>
        <menu>
            <li><a id='switch-view'><i class="far fa-eye"></i><span>Ver mi página</span></a></li>
            <li><a id='switch-edit' style="display: none;"><i class="fas fa-wrench"></i><span>Editar</span></a></li>
            <li><a id='publish' style="display: none;"><i class="fas fa-upload"></i><span>Publicar</span></a></li>
            <li><a class='change-page' style="display: none;"><i class="fas fa-exchange-alt"></i><span>Cambiar</span></a></li>
            <li><a class='logout'><i class="fas fa-sign-out-alt"></i><span>Salir</span></a></li>
        </menu>
    </div>	
    <div class="app-control-step" style>
        <?php include_once("include/include_app-control-step_site-name.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_title.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_slogan.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_hero-banner.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_about-us.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_cta.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_item.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_item-add.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_gallery.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_contact.php"); ?>
    </div>
    <div class="app-control-step">
        <?php include_once("include/include_app-control-step_colors.php"); ?>
    </div>
    <div class="app-control-step">
        <div>
            <h2>¡Terminamos!</h2>
            <p>Revisa tu sitio antes de continuar.</p>
        </div>
    </div>
    <div id="app-control-nav">
        <nav id='control-view-nav'>
            <a href='#prev' class="nav-btns prev">
                <i class="fas fa-arrow-circle-left"></i>
            </a>
            <div id="control-view-index"><div class="control-view-index-step current"></div></div>
            <a href='#next' class="nav-btns next">
                <i class="fas fa-arrow-circle-right"></i>
            </a>
        </nav>
    </div>
</div>		