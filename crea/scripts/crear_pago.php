<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$id_usuario = filter_input(INPUT_POST,'id_usuario');
$paquete = filter_input(INPUT_POST,'paquete');
$info_pago = filter_input(INPUT_POST,'info_pago');
$id_pagina = filter_input(INPUT_POST,'id_pagina');
$id_paypal = filter_input(INPUT_POST,'id_paypal');
$id = uniqid();

if (!empty($_POST) && 
    $id_usuario && 
    $paquete &&
    $info_pago &&
    $id_pagina && 
    $id_paypal) {    

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `Id` = '" . $id_usuario . "'";
    $resultado = $dbh->query($sql);
    if($resultado->num_rows > 0){

        // buscar pagina si existe
        $sql2 = "SELECT * FROM `pagos` WHERE id_pagina = " . $id_pagina;
        $resultado2 = $dbh->query($sql2);
        if($resultado2->num_rows > 0){

            while ($fila = $resultado2->fetch_assoc()) {
                $fecha_actual = $fila['fecha_fin'];
                if($paquete !== 'basico' && $paquete !== 'premium') {
                    echo '{"ok": 0, "error": "Paquete inválido"}';
                    http_response_code(400);
                    exit;
                }
                $fecha_guardada = new DateTime($fecha_actual);
                $hoy = new DateTime();
                
                if($fecha_actual < $hoy) {
                    $fecha = $hoy;
                } else {
                    $fecha = $fecha_actual;
                }

                $fecha->add(new DateInterval('P366D'));

                //insertar informacion de nueva pagina
                $sql2 = "UPDATE `pagos` SET 
                    `paquete` = '$paquete',
                    `fecha_fin` = '" . $fecha->format('Y-m-d') . "',
                    `info_pago` = '" . $fila['info_pago'] . " -> " . $info_pago . "',
                    `id_paypal` = '" . $fila['id_paypal'] . " -> " . $id_paypal . "'
                    WHERE 
                    id = '" . $fila['id'] . "'";

            }

        } else {

            // set new dates
            $fecha = new DateTime();
            switch($paquete){
                case 'basico':
                case 'premium':
                    $fecha->add(new DateInterval('P366D'));
                break;
                default:
                    $fecha->add(new DateInterval('P15D'));
                break;
            }

            //insertar informacion de nueva pagina
            $sql2 = "INSERT INTO `pagos` (
                `id`,
                `paquete`,
                `id_usuario`,
                `fecha_fin`,
                `info_pago`,
                `id_pagina`,
                `id_paypal`
                ) VALUES (
                '" . $id . "',
                '" . $paquete . "',
                '" . $id_usuario . "',
                '" . $fecha->format('Y-m-d') . "',
                '" . $info_pago . "',
                '" . $id_pagina . "',
                '" . $id_paypal . "')";

        }
        if($dbh->query($sql2)!==TRUE){ 
            echo '{"ok": 0, "error": "Error al insertar información de nueva página"}';
            http_response_code(400);
            exit;
        } else{
            echo '{"ok": 1, "pagoId": "' . $id . '", "fecha": "' . $fecha->format('Y-m-d') . '"}';
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
