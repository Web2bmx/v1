<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$correo = filter_input(INPUT_POST,'correo');
$password = filter_input(INPUT_POST,'password');

if (!empty($_POST) && $correo && $password){

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `correo` = '" . $correo . "'";

    $resultado = $dbh->query($sql);

    if($resultado->num_rows > 0){
        //usuario encontrado
        while ($fila = $resultado->fetch_assoc()) {
            $id = $fila["Id"];
            $nombre =$fila["nombre"];
            $hashed_pass=$fila["password"];
        } 

        if (!password_verify($password, $hashed_pass)) {
            echo '{"ok":0,"error":"Contraseña incorrecta"}';
            http_response_code(200);
            exit;   
        } else {
            $sql = "SELECT * FROM `info_paginas` WHERE IdUsuario = '$id'";
            $r = $dbh->query($sql);

            if($r->num_rows > 0){
                $paginas = [];
                while ($fila = $r->fetch_assoc()) {
                    $pagina = [];
                    $pagina["idSitio"] = $fila["id"];
                    $pagina["info"] = $fila["info"];
                    array_push($paginas,$pagina);
                }
                echo '{"ok":1,"paginas" : ' . json_encode($paginas) . ', "userId": "' . $id . '" }';
                http_response_code(200);
                exit;                 
            } else {
                echo '{"ok":1,"paginas" : "[]", "userId": "' . $id . '" }';
                http_response_code(200);
                exit;                  
            }      
        }

          


    } else {
        echo '{"ok":0,"error":"Correo no existe"}';
        http_response_code(200);
        exit;        
    }



}