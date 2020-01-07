<?php
    include "../lib/dbc.php";
    include "../lib/preguntas_tour.php";
?>
<html>
    <head>
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <meta charset="utf-8" />
        <!--
        <link rel="stylesheet" href="css/jquery-ui.min.css" >
        <link rel="stylesheet" href="css/jquery-ui.structure.min.css" >
        <link rel="stylesheet" href="css/jquery-ui.theme.min.css" >
        -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">	               
        
        <link rel="stylesheet" href="css/tour.css" >
    </head>
    <body>
        <nav id="global-navigation"><a href="/" class="global-navigation-back"><i class="fas fa-arrow-circle-left"></i><span>Regresar</span></a></nav>
    	<aside id="background"><div class='stars'></div><div class='stars2'></div><div class='stars3'></div></aside>
        <main>
            <section id="modal" style="display: none;">
                <div id="dialog-existing-session" class="dialog">
                    <p>Hemos detectado que ya estabas realizando el tour.</p>
                    <h3>¿Quieres seguir donde estabas o iniciar de nuevo?</h3>                         
                    <button class="iniciar">Iniciar de nuevo</button><button class="continuar res">Continuar donde estaba</button>
                </div>
                <div id="dialog-existing-project" class="dialog">
                    <p>Hemos detectado que ya tienes un proyecto abierto.</p> 
                    <h3>¿Quieres seguir editandolo o iniciar un nuevo proyecto?</h3>                         
                    <button class="iniciar-proyecto">Iniciar otro Proyecto</button>
                    <button class="continuar-proyecto res">Continuar Editando</button>                                
                </div>
                <?php include "include/include_questions.php"; ?>
                <div id="dialog-end" class="dialog">
                    <aside id="dialog-end-rocket"><img alt="" src="images/item_rocket.svg" /></aside>
                    <h2>La misión ha sido un éxito</h2>
                    <p>Ahora que ya tenemos tu informacion <br />Elaboraremos la mejor <br />Página web para ti</p>
                    <nav><a href="/crea" class="boton">Quiero ver mi página web</a></nav>
                </div>                                                              
            </section>
            <div id="stage">
                <aside id="item-rocket"><img alt="" src="images/item_rocket.svg" /><img src="images/item_rocket_tail.svg" /></aside>
                <div id="stage-0" class="stage">
                    <a id="button-start" class="boton" href="#stage-1">Iniciar tour</a>
                    <aside id="item-land"><img alt="land" src="images/item_land.svg" /></aside>
                    <aside id="item-spaceman"><img src="images/item_spaceman.svg" /></aside>
                </div>
                <div id="stage-1" class="stage" style="display: none;">
                    <aside id="item-planet-red"><img src="images/item_planet_red.svg" /></aside>
                    <aside id="item-comets"><img alt="" src="images/item_comet_1.svg" /><img alt="" src="images/item_comet_2.svg" /></aside>                        
                </div>
                <div id="stage-2" class="stage" style="display: none;">
                    <aside id="item-sun"><img alt="" src="images/item_sun.svg" /></aside>
                    <aside id="item-planet-blue"><img alt="" src="images/item_planet_blue.svg" /></aside>
                </div> 
                <div id="stage-3" class="stage" style="display: none;">
                    <aside id="item-earth"><img src="images/item_earth.svg" /></aside>
                    <aside id="item-satellite"><img class="satellite right" src="images/item_satellite.svg" /></aside>
                </div>
            </div>
        </main>      
          
            <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>        
            <script>
                if (!window.jQuery) {
                // fallback to local jQuery
                document.write(decodeURIComponent('%3Cscript src="scripts/jquery-3.3.1.min.js" %3E%3C/script%3E'));
            }
        </script>      
        <!--<script src="scripts/jquery-ui.min.js"></script>-->
        <script type="text/javascript" src="./scripts/tour.bundle.js"></script>
        <p class="dialog-error" style="display: none;">Por favor selecciona la opción que mejor represente tu empresa o escribe tu respuesta en el campo de texto.</p>
    </body>
</html>