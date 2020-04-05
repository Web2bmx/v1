<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$api_path = filter_input(INPUT_POST,'api_path');
$params = filter_input(INPUT_POST,'params');
$api_id = "2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64";

if (!empty($_POST) && $api_path) {

    $final_path = $api_path . "?client_id=" . $api_id .
        ($params ? "&$params" : ''); 
    
    // Do proper call here
    echo file_get_contents($final_path);

} else {
    echo '{"ok": 0, "mensaje": "Error al recibir datos de formulario"}';
    http_response_code(200);
}
