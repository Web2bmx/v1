<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$id = filter_input(INPUT_POST,'userId');
$idSitio = filter_input(INPUT_POST,'idSitio');
$info = filter_input(INPUT_POST,'info');

if (!empty($_POST) && $id && $info){

    $sql = "SELECT * FROM `info_paginas` WHERE IdUsuario = '$id' AND  id = '$idSitio'";
    $r = $dbh->query($sql);

    if($r->num_rows > 0){

        $sql = "UPDATE `info_paginas` SET `info` = '$info' WHERE `info_paginas`.`id` = $idSitio";
        if($dbh->query($sql)!==TRUE){
            echo '{"ok": 0, "mensaje": "Error al intentar guardar los datos."}';        
            http_response_code(200);
            exit;
        } 

        echo '{"ok":1}';
        http_response_code(200);
        exit;                 
    } else {
        echo '{"ok":0,"mensaje" : "Ha ocurrido un error al guardar la información de este sitio asignado al usuario." }';
        http_response_code(200);
        exit;                  
    }
} else {
    echo '{"ok":0,"mensaje" : "Ha ocurrido un error al recibir los datos en el servidor." }';
    http_response_code(200);
    exit;                  
}