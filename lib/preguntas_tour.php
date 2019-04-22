<?php
    $preguntas = [];
    $i=1;
    //obtener tipos
    $result =$dbh->query('SELECT tipo, count(*) as total FROM preguntas WHERE isActive = 1 GROUP BY tipo');
    $dbo_respuestas = $dbh->query('SELECT * FROM `tour_respuestas`');
    /*CONSTRUYE ÁRBOL DE RESPUESTAS*/
    $arr_respuestas = $dbo_respuestas->fetch_all(MYSQLI_ASSOC);
    $respuestas = array();
    foreach ($dbo_respuestas as $dbo_r) {
        if ($dbo_r["PID"] != NULL) {
            if (!array_key_exists($dbo_r["PID"], $respuestas)) { $respuestas[$dbo_r["PID"]] = array(); }
            $respuesta = array("ID"=>$dbo_r["ID"],"TEXT"=>utf8_encode($dbo_r["TEXT"]), "LOC_EN"=>utf8_encode($dbo_r["LOC_EN"]), "OPCIONES"=>array());
            for ($k = 0; $k < count($arr_respuestas); $k++) {
                if ($dbo_r["ID"] == $arr_respuestas[$k]["RID"]) {
                    array_push($respuesta["OPCIONES"], array("ID"=>$arr_respuestas[$k]["ID"], "TEXT"=>utf8_encode($arr_respuestas[$k]["TEXT"]), "LOC_EN"=>utf8_encode($arr_respuestas[$k]["LOC_EN"])));        
                }
            }
            $respuestas[$dbo_r["PID"]][] = $respuesta;
        }
    }
    /*CONSTRUYE ÁRBOL DE RESPUESTAS*/
    
    while ($arr = $result->fetch_assoc()) {
        //Obtener una pregunta random de tipo especifico
        $r2 = $dbh->query('SELECT * FROM preguntas WHERE `tipo` = ' .  $arr['tipo'] . ' AND isActive = 1 ORDER BY RAND() LIMIT 1');
        $arr2 = $r2->fetch_assoc();
        $opciones = $respuestas[$arr['tipo']];
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
    $x = 0;
    foreach($opciones as $opcion){            
        $html .= '
                    <div class="cont_answers">
                    <label for="rb' . $opcion["ID"] . '">           
                    <input id="rb' . $opcion["ID"] . '" type="radio" name="pregunta' . $numero_pregunta . '" value="' . $opcion["TEXT"] . '" data-loc-en="' . $opcion["LOC_EN"] . '">
                    <strong>' . $opcion["TEXT"] . 
                    '</strong></label><div class="group_answers">';
        foreach($opcion["OPCIONES"] as $o){
        
            $html .= ' 
                <label for="rb' . $o["ID"] . '">           
                <input id="rb' . $o["ID"] . '" type="radio" name="pregunta' . $numero_pregunta . '" value="' . $o["TEXT"] . '" data-loc-en="' . $o["LOC_EN"] . '" data-id="' . $o["ID"] . '">
                ' . $o["TEXT"] . 
                '</label>';

                
            
        }
        $html .= '</div></div>';
    } 
    $html .= '<div class="cont_answers"><label>Otro: <input class="otra" type="text" value="" /></label></div>';
    return $html;        
}
?>