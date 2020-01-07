<?php $a = $GLOBALS['preguntas'][$q]; ?>
<h3 data-id="<?php echo($a["pregunta"]["id"]); ?>" data-type="<?php echo($a["pregunta"]["tipo"]); ?>"><?php echo(utf8_encode($a["pregunta"]["texto"])); ?></h3>  
<div class="options">  
    <?php $opciones = $a['opciones']; $x = 0; ?>
    <?php foreach($opciones as $opcion) : ?>
        <h4><i class="fas fa-plus-circle"></i><i class="fas fa-minus-circle"></i> <?php echo($opcion["TEXT"]); ?></h4>
        <div class="options-group">
            <?php foreach($opcion["OPCIONES"] as $o) : ?>
                <input 
                    id="rb-<?php echo($o["ID"]); ?>" 
                    type="radio" 
                    name="q-<?php echo($q); ?>" 
                    value="<?php echo($o["TEXT"]); ?>" 
                    data-loc-en="<?php echo($o["LOC_EN"]); ?>" 
                    data-id="<?php echo($o["ID"]); ?>"
                />
                <label for="rb-<?php echo($o["ID"]); ?>"><?php echo($o["TEXT"]); ?></label>
            <?php endforeach; ?>
        </div>
    <?php endforeach; ?>
    <div class="option-free"><input class="otra" type="text" value="" placeholder="Otro:" /></div>
</div>