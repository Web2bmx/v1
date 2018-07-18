<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$nombre = filter_input(INPUT_POST,'nombre');
$correo = filter_input(INPUT_POST,'correo');
$info = filter_input(INPUT_POST,'info');
$id = uniqid();

if($correo == "contacto@web2b.mx"){
    http_response_code(200);
    exit;
}

if (!empty($_POST) && $nombre && $correo && $info){

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `correo` = '" . $correo . "'";

    $resultado = $dbh->query($sql);

    if($resultado->num_rows > 0){
        //ya existe usuario
        while ($fila = $resultado->fetch_assoc()) {
            $id = $fila["Id"];
        }  
    } else {
        $sql = "INSERT INTO `usuarios` (`Id`, `nombre`, `correo`) VALUES ('" . $id . "', '" . $nombre . "', '" . $correo . "')";    
        if($dbh->query($sql)!==TRUE){ 
            echo "Error al insertar usuario nuevo";
            http_response_code(400);
            exit;
        } 
    }

    //insertar informacion de nueva pagina
    $sql = "INSERT INTO `info_paginas` (`IdUsuario`, `info`) VALUES ('" . $id . "', '" . $info . "')";
    echo $sql;
    if($dbh->query($sql)!==TRUE){ 
        echo "5.1";
        echo "Error al insertar información de nueva página";
        http_response_code(400);
        exit;
    } else{
        echo "5.2";
        echo json_encode($id);
        http_response_code(200);
    }  
    echo "6";                

} else {
    http_response_code(400);
}
