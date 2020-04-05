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
            $respuesta = array("ID"=>$dbo_r["ID"],"TEXT"=>($dbo_r["TEXT"]), "LOC_EN"=>($dbo_r["LOC_EN"]), "OPCIONES"=>array());
            for ($k = 0; $k < count($arr_respuestas); $k++) {
                if ($dbo_r["ID"] == $arr_respuestas[$k]["RID"]) {
                    array_push($respuesta["OPCIONES"], array("ID"=>$arr_respuestas[$k]["ID"], "TEXT"=>($arr_respuestas[$k]["TEXT"]), "LOC_EN"=>($arr_respuestas[$k]["LOC_EN"])));        
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
?>