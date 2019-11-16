<?php $a = $GLOBALS['preguntas'][$q]; ?>
<p data-id="<?php echo($a["pregunta"]["id"]); ?>" data-type="<?php echo($a["pregunta"]["tipo"]); ?>"><?php echo(utf8_encode($a["pregunta"]["texto"])); ?></p>  
<div class="opciones">  
    <?php
        $opciones = $a['opciones'];
        $x = 0;
    ?>
    <?php foreach($opciones as $opcion) : ?>
        <div class="cont_answers">
            <label for="rb<?php echo($opcion["ID"]); ?>">           
                <input id="rb<?php echo($opcion["ID"]); ?>" type="radio" name="pregunta<?php echo($q); ?>" value="<?php echo($opcion["TEXT"]); ?>" data-loc-en="<?php echo($opcion["LOC_EN"]); ?>">
                <i class="fas fa-plus-circle"></i>
                <strong><?php echo($opcion["TEXT"]); ?></strong>
            </label>
            <div class="group_answers">
            <?php foreach($opcion["OPCIONES"] as $o) : ?>
                <label for="rb<?php echo($o["ID"]); ?>">           
                    <input id="rb<?php echo($o["ID"]); ?>" type="radio" name="pregunta<?php echo($q); ?>" value="<?php echo($o["TEXT"]); ?>" data-loc-en="<?php echo($o["LOC_EN"]); ?>" data-id="<?php echo($o["ID"]); ?>">
                    <?php echo($o["TEXT"]); ?>
                </label>
            <?php endforeach; ?>
            </div>
        </div>
    <?php endforeach; ?>
    <div class="cont_answers"><label>Otro: <input class="otra" type="text" value="" /></label></div>
</div>