<div class="tercero">
    <div class="tercera-pregunta dialog">
        <?php
            $q = 3;
            include "include/include_question.php";
        ?>
        <div><button class="back" data-back="3">Regresar</button><button class="res_3 res">Siguiente</button></div>
    </div>
    <img class="earth" src="images/item_earth.svg" /><img class="satellite right" src="images/item_satellite.svg" />
</div>
<div class="segundo">
    <aside class="right comets"><img alt="" src="images/item_comet_1.svg" /><img alt="" src="images/item_comet_2.svg" /></aside>                        
    <img class="planet-blue" alt="" src="images/item_planet_blue.svg">
    <div class="segunda-pregunta dialog">
        <?php
            $q = 2;
            include "include/include_question.php";
        ?>
        <div><button class="back" data-back="2">Regresar</button><button class="res_2 res">Siguiente</button></div>
    </div>
</div>
<div class="sun">
    <img alt="" src="images/item_sun.svg" />
    <div class="primera-pregunta dialog" style="display: none">
        <?php
            $q = 1;
            include "include/include_question.php";
        ?>
        <div><!-- <button class="back" data-back="0">Regresar</button>--><button class="res_1 res">Siguiente</button></div>
    </div>                            
</div>