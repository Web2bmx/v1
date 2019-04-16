<?php
    include "../lib/dbc.php";
    include "../lib/preguntas_tour.php";
?>
<html>
    <head>
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <meta charset="utf-8" />
        <link rel="stylesheet" href="css/jquery-ui.min.css" >
        <link rel="stylesheet" href="css/jquery-ui.structure.min.css" >
        <link rel="stylesheet" href="css/jquery-ui.theme.min.css" >
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">	               
        <link rel="stylesheet" href="css/tour.css" >
    </head>
    <body>
        <a href="/" class="global-back"><i class="fas fa-arrow-circle-left"></i><span>Regresar</span></a>        
    	<div class="background"><div class='stars'></div><div class='stars2'></div><div class='stars3'></div></div>
        <div class="main-container">
            <div>
                <div>
                    <div>
                        <div class="planet_red">
                            <img src="images/red_planet.png">
                            <div class="fin dialog">
                                <aside><img alt="" src="images/rocket.png"/><img src="images/rocket_fire.png"/></aside>
                                <h2>La misión ha sido un éxito</h2>
                                <p>Ahora que ya tenemos tu informacion <br />Elaboraremos la mejor <br />Página web para ti</p>
                                <a href="/crea" class="boton">Quiero ver mi página web</a>                                    
                            </div>                                  
                        </div>                        
                        <div class="nave"><img src="images/nave.png"></div>
                    </div>                    
                    <div class="tercero">
                        <div class="tercera-pregunta dialog">
                            <?= muestra_pregunta(3);?>
                            <div>
                                <button class="back" data-back="3">Regresar</button><button class="res_3 res">Siguiente</button>
                            </div>
                        </div>
                        <img class="earth" src="images/earth.png" /><img class="satellite right" src="images/satellite.png" />
                    </div>
                    <div class="segundo">
                        <aside class="right comets"><img alt="" src="images/comet_1.png" /><img alt="" src="images/comet_2.png" /></aside>                        
                        <img class="planet-blue" alt="" src="images/planet_blue.png">
                        <div class="segunda-pregunta dialog">
                            <?= muestra_pregunta(2);?>
                            <div><button class="back" data-back="2">Regresar</button><button class="res_2 res">Siguiente</button></div>
                        </div>
                    </div>
                    <div class="sun">
                        <img alt="" src="images/sun.png" />
                        <div class="primera-pregunta dialog" style="display: none">
                            <?= muestra_pregunta(1);?>
                            <div><!-- <button class="back" data-back="0">Regresar</button>--><button class="res_1 res">Siguiente</button></div>
                        </div>                            
                    </div>
                    <div class="inicio">
                        <button class="init">Iniciar tour</button>
                        <aside class="rocket"><img alt="" src="images/rocket.png" /><img src="images/rocket_fire.png" /></aside>                                  
                        <img class="right space-man" src="images/spaceman.png" /><img class="right luna" alt="luna" src="images/land.png" />
                    </div>
                    <div class="datos-existentes dialog" style="display: none">
                        <p>Hemos detectado que ya estabas realizando el tour.<br /> Quieres seguir donde estabas o iniciar de nuevo?</p>                         
                        <button class="iniciar">Iniciar de nuevo</button><button class="continuar res">Continuar donde estaba</button>                                
                    </div>                                               
                </div>
            </div>
    	</div>      
            <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>        
            <script>
                if (!window.jQuery) {
                // fallback to local jQuery
                document.write(decodeURIComponent('%3Cscript src="scripts/jquery-3.3.1.min.js" %3E%3C/script%3E'));
            }
        </script>      
        <script src="scripts/jquery-ui.min.js"></script>
        <script type="text/javascript" src="./scripts/tour.bundle.js"></script>
    </body>
</html>