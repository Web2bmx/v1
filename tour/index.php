<?php

include "../lib/dbc.php";

$preguntas = [];
$i=1;

//obtener tipos
$result =$dbh->query('SELECT tipo, count(*) as total FROM preguntas WHERE isActive = 1 GROUP BY tipo');
while ($arr = $result->fetch_assoc()) {

    //Obtener una pregunta random de tipo especifico
    $r2 = $dbh->query('SELECT * FROM preguntas WHERE `tipo` = ' .  $arr['tipo'] . ' AND isActive = 1 ORDER BY RAND() LIMIT 1');
    $arr2 = $r2->fetch_assoc();

    if($arr2['tiene_opciones']) {
        $opciones=array();

        //obtener las opciones de respuesta
        $r3 = $dbh->query('SELECT * FROM `opciones_respuesta` WHERE `tipo_pregunta` = ' . $arr['tipo']);
        $arr3 = $r3->fetch_assoc();
        if($arr3['respuesta'] == "[categorias]"){            
            $r4 =$dbh->query('SELECT * FROM `categorias_negocio`');
            while ($arr4 = $r4->fetch_assoc()) {
                array_push($opciones,array($arr4['Categoria'], $arr4['Categoria_en']));
            }
        } else {
            $arr_t = explode("#",$arr3['respuesta']);            
            foreach ($arr_t as $v) {
                array_push($opciones,array($v, ""));
            }
        }
    } else {
        $opciones = "";
    }
    
    $preguntas[$i] = array(
        "pregunta" => array(
            "id" => $arr2['Id'],
            "texto" => $arr2['pregunta'],
            "tipo" => $arr2['tipo']
        ),
        "opciones" => $opciones
    );

    $i++;
}

function muestra_pregunta($numero_pregunta){    
    $html = '
    <p data-id="' . $GLOBALS['preguntas'][$numero_pregunta]["pregunta"]["id"] . 
        '" data-type="' . $GLOBALS['preguntas'][$numero_pregunta]["pregunta"]["tipo"] . '">    
        '. utf8_encode($GLOBALS['preguntas'][$numero_pregunta]["pregunta"]["texto"]) . '                                
    </p>    
    ';
    $opciones = $GLOBALS['preguntas'][$numero_pregunta]['opciones'];
    if($opciones == ""){
        $html .= "<textarea></textarea>";
    } else {
        $x=0;
        foreach($opciones as $opcion){            
            $html .= ' 
            <label for="rb' . $numero_pregunta . '-' . $x . '">           
            <input id="rb' . $numero_pregunta . '-' . $x . '" type="radio" name="pregunta' . $numero_pregunta . '" value="' . utf8_encode($opcion[0]) . '" data-loc-en="' . $opcion[1] . '">
            ' . utf8_encode($opcion[0]) . (strpos($opcion[0],"Otra") !== false ? ': <input type="text">' : "") . '
            </label>
            ';

            $x++;
        }
        
    } 
    return $html;        
}
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
        <a href="/" class="global-back">
            <i class="fas fa-arrow-circle-left"></i><span>
                Regresar
            </span>
        </a>        
    	<div class="background">
            <div class='stars'></div>
            <div class='stars2'></div>
            <div class='stars3'></div>
    	</div>
    	<div class="main-container">
            <div>
                    <div>
                        <div>
                            <div class="planet_red">
                                <img src="images/red_planet.png">
                                <div class="fin dialog">
                                    <aside>
                                        <img alt="" src="images/rocket.png">
                                        <img src="images/rocket_fire.png">                                       
                                    </aside>
                                    <h2>La misión ha sido un éxito</h2>
                                    <p>
                                        Ahora que ya tenemos tu informacion <br />
                                        Elaboraremos la mejor <br />
                                        Página web para ti
                                    </p>
                                    <a href="/crea" class="boton">
                                        Quiero ver mi página web
                                    </a>                                    
                                </div>                                  
                            </div>                        
                            <div class="nave">
                                <img src="images/nave.png">
                            </div>
                            <div class="septima-pregunta dialog">
                                <aside>
                                    <?= muestra_pregunta(7);?>
                                </aside>
                                <button class="back" data-back="6">
                                    Regresar
                                </button>                                                              
                                <button class="res_7 res">
                                    Siguiente
                                </button>
                            </div>                            
                        </div>                    
                        <div class="cinco">
                            <div class="sexta-pregunta dialog">
                                <aside>
                                    <?= muestra_pregunta(6);?>
                                </aside>
                                <button class="back" data-back="5">
                                    Regresar
                                </button>                                   
                                <button class="res_6 res">
                                    Siguiente
                                </button>
                            </div>                            
                            <div class="planet_ring">
                                <img src="images/planet_ring.png">
                            </div>                        
                            <div class="alien">
                                <img src="images/alien.png">
                            </div>                        
                        </div>

                        <div class="cuarto">
                            <div class="cometas">
                                <img src="images/cometas.png">
                            </div>                            
                            <div class="full_moon">
                                <img src="images/full_moon.png">
                            </div>

                            <div class="stars_img">
                                <img src="images/stars.png">
                            </div>
                                <div class="quinta-pregunta dialog">
                                    <aside>
                                        <?= muestra_pregunta(5);?>
                                    </aside>                                    
                                    <button class="back" data-back="4">
                                        Regresar
                                    </button>                                       
                                    <button class="res_5 res">
                                        Siguiente
                                    </button>
                                </div>
                        </div>
                        <div class="tercero">
                                <div class="tercera-pregunta dialog">
                                    <?= muestra_pregunta(3);?>
                                    <div>
                                        <button class="back" data-back="3">
                                            Regresar
                                        </button>                                       
                                        <button class="res_3 res">
                                            Siguiente
                                        </button>
                                    </div>
                                </div>

                                <img class="earth" src="images/earth.png">
                                <img class="satellite right" src="images/satellite.png">

                        </div>
                        <div class="segundo">
                                <aside class="right comets">
                                        <img alt="" src="images/comet_1.png">
                                        <img alt="" src="images/comet_2.png">
                                </aside>                        
                                <img class="planet-blue" alt="" src="images/planet_blue.png">
                                <div class="segunda-pregunta dialog">
                                    <?= muestra_pregunta(2);?>
                                    <div>
                                        <button class="back" data-back="2">
                                            Regresar
                                        </button>                                      
                                        <button class="res_2 res">
                                            Siguiente
                                        </button>
                                    </div>
                                </div>
                        </div>
                        <div class="sun">
                            <img alt="" src="images/sun.png">
                            <div class="primera-pregunta dialog" style="display: none">
                                <?= muestra_pregunta(1);?>
                                <div>
                                    <!-- <button class="back" data-back="0">
                                        Regresar
                                    </button>                                    -->
                                    <button class="res_1 res">
                                        Siguiente
                                    </button>
                                </div>
                            </div>                            
                        </div>
                        <div class="inicio">
                            <button class="init">Iniciar tour</button>
                            <aside class="rocket">
                                    <img alt="" src="images/rocket.png">
                                    <img src="images/rocket_fire.png">
                            </aside>                                  
                            <!-- <div class="primera-pregunta dialog" style="display: none">
                                <?= muestra_pregunta(1);?>                                
                                <button class="res_1 res">
                                    Siguiente
                                </button>
                            </div> -->
                            <img class="right space-man" src="images/spaceman.png">
                            <img class="right luna" alt="luna" src="images/land.png">
                        </div>
                        <div class="datos-existentes dialog" style="display: none">
                                <p>
                                Hemos detectado que ya estabas realizando el tour.<br /> 
                                Quieres seguir donde estabas o iniciar de nuevo?      
                                </p>                         
                                <button class="iniciar">
                                    Iniciar de nuevo
                                </button>
                                <button class="continuar res">
                                    Continuar donde estaba
                                </button>                                
                        </div>                                               
                    </div>
                    
    		</div>           
    	</div>      
        <script
          src="http://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous">
        </script>        
        <script>
            if (!window.jQuery) {
                // fallback to local jQuery
                document.write(decodeURIComponent('%3Cscript src="scripts/jquery-3.3.1.min.js" %3E%3C/script%3E'));
            }
        </script>      
        <script src="scripts/jquery-ui.min.js"></script>
        <script type="text/javascript" src="./scripts/tour.bundle.js">
        </script>
    </body>
</html>
