<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$correo = filter_input(INPUT_POST,'correo');

if (!empty($_POST)){

    //buscar usuario existente
    $sql = "SELECT * FROM `users_email_subscriptions` WHERE `EMAIL` = '" . $correo . "'";

    $resultado = $dbh->query($sql);

    if($resultado->num_rows == 0){
        $sql = "INSERT INTO `users_email_subscriptions` (EMAIL,STATUS,SUBSCRIPTION_TIME) VALUES ('" . $correo . "',1,NOW())";
        $insert = $dbh->query($sql);
        if($insert) {
            echo '{"ok":1,"error":"Correo agregado."}';
            http_response_code(200);
            exit; 
        } else {
            echo '{"ok":0,"error":"Error agregando correo."}';
            http_response_code(200);
            exit; 
        }
    } else {
        echo '{"ok":0,"error":"Este correo ya está registrado."}';
        http_response_code(200);
        exit;        
    }



}