<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$id_usuario = filter_input(INPUT_POST,'id_usuario');
$paquete = filter_input(INPUT_POST,'paquete');
$fecha_inicio = filter_input(INPUT_POST,'fecha_inicio');
$info_pago = filter_input(INPUT_POST,'info_pago');
$id_pagina = filter_input(INPUT_POST,'id_pagina');
$id_paypal = filter_input(INPUT_POST,'id_paypal');
$id = uniqid();

if (!empty($_POST) && 
    $id_usuario && 
    $paquete && 
    $fecha_inicio && 
    $info_pago && 
    $id_pagina && 
    $id_paypal){

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `Id` = '" . $id_usuario . "'";
    $resultado = $dbh->query($sql);
    if($resultado->num_rows > 0){
        
        //insertar informacion de nueva pagina
        $sql = "INSERT INTO `pagos` (
            `id`,
            `paquete`,
            `id_usuario`,
            `fecha_inicio`,
            `info_pago`,
            `id_pagina`,
            `id_paypal`
            ) VALUES (
            '" . $id . "',
            '" . $paquete . "',
            '" . $id_usuario . "',
            '" . $fecha_inicio . "',
            '" . $info_pago . "',
            '" . $id_pagina . "',
            '" . $id_paypal . "')";
        if($dbh->query($sql)!==TRUE){ 
            echo '{"ok": 0, "error": "Error al insertar información de nueva página"}';
            http_response_code(400);
            exit;
        } else{
            echo '{"ok": 1, "pagoId": "' . $id . '"}';
            http_response_code(200);
        }     

    } else {
        return '{ok: 0, error: "Este usuario no existe"}';
        http_response_code(400);
    }           

} else {
    echo '{"ok": 0, "mensaje": "Error al recibir datos de formulario"}';
    http_response_code(400);
}
