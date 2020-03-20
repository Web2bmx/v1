<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$userid = filter_input(INPUT_POST,'userid');
$api_path = filter_input(INPUT_POST,'api_path');
$params = filter_input(INPUT_POST,'params');
$api_id = "2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64";

if (!empty($_POST) && $userid && $api_path) {

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `Id` = '" . $userid . "'";
    $resultado = $dbh->query($sql);
    if($resultado->num_rows > 0) {

        $final_path = $api_path . "?client_id=" . $api_id .
            ($params ? "&$params" : ''); 
      
        // Do proper call here
        echo file_get_contents($final_path);

    } else {
        echo '{"ok": 0, "error": "Usuario no existe"}';
        http_response_code(200);
        exit;
    }            

} else {
    echo '{"ok": 0, "mensaje": "Error al recibir datos de formulario"}';
    http_response_code(200);
}
