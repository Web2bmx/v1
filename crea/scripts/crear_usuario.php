<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$nombre = filter_input(INPUT_POST,'nombre');
$correo = filter_input(INPUT_POST,'correo');
$password = filter_input(INPUT_POST,'password');
$info = filter_input(INPUT_POST,'info');
$id = uniqid();

if($correo == "contacto@web2b.mx"){
    echo '{"ok": 1}';
    http_response_code(200);
    exit;
}

if (!empty($_POST) && $nombre && $correo && $info && $password){
    $exists = false;

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `correo` = '" . $correo . "'";

    $resultado = $dbh->query($sql);

    if($resultado->num_rows > 0){
        //ya existe usuario
        while ($fila = $resultado->fetch_assoc()) {
            $id = $fila["Id"];
            $nombre =$fila["nombre"];
            $hashed_pass=$fila["password"];            
            $exists = true;
        }  

        if (!password_verify($password, $hashed_pass)) {
            echo '{"ok":0,"error":"Este usuario ya existe, pero la contraseña es incorrecta."}';
            http_response_code(200);
            exit;   
        }    

    } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO `usuarios` (`Id`, `nombre`, `correo`,`password` ) VALUES ('" . $id . "', '" . $nombre . "', '" . $correo . "','" . $hashed_password . "')";    
        if($dbh->query($sql)!==TRUE){ 
            echo '{"ok": 0, "mensaje": "Error al insertar usuario nuevo"}';
            http_response_code(200);
            exit;
        } 
    }

    //insertar informacion de nueva pagina
    $sql = "INSERT INTO `info_paginas` (`IdUsuario`, `info`) VALUES ('" . $id . "', '" . $info . "')";
    if($dbh->query($sql)!==TRUE){ 
        echo '{"ok": 0, "mensaje": "Error al insertar información de nueva página"}';
        http_response_code(200);
        exit;
    } else{
        echo '{"ok": 1, "userId": "' . $id . '","idSitio":"' . $dbh->insert_id . '","exists":"' . $exists . '"}';
        http_response_code(200);
    }                

} else {
    echo '{"ok": 0, "mensaje": "Error al recibir datos de formulario"}';
    http_response_code(200);
}
