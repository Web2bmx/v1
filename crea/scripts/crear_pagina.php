<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";
include "../../scripts/getPages.php";

$userid = filter_input(INPUT_POST,'userid');
$info = filter_input(INPUT_POST,'info');

if (!empty($_POST) && $userid && $info) {
    $exists = false;

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `Id` = '" . $userid . "'";

    $resultado = $dbh->query($sql);

    if($resultado->num_rows > 0){

        //insertar informacion de nueva pagina
        $sql = "INSERT INTO `info_paginas` (`IdUsuario`, `info`) VALUES ('" . $userid . "', '" . $info . "')";
        if($dbh->query($sql)!==TRUE){ 
            echo '{"ok": 0, "error": "Error al insertar información de nueva página"}';
            http_response_code(200);
            exit;
        } else{
            $idSitio = $dbh->insert_id;
            $paginas = getPages($dbh, $userid);
            echo '{"ok": 1, "userId": "' . $userid . '","idSitio":"' . $idSitio . '", "paginas": ' . json_encode($paginas) .  '}';
            http_response_code(200);
        }      

    } else {
        echo '{"ok": 0, "error": "Usuario no existe"}';
        http_response_code(200);
        exit;
    }            

} else {
    echo '{"ok": 0, "mensaje": "Error al recibir datos de formulario"}';
    http_response_code(200);
}
