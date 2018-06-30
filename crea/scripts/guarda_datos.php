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
    $sql = "INSERT INTO `usuarios` (`Id`, `nombre`, `correo`, `Info`) VALUES ('" . $id . "', '" . $nombre . "', '" . $correo . "', '" . $info . "')";
    if($dbh->query($sql)===TRUE){        
        echo json_encode($id);
        http_response_code(200);
    }else{
        http_response_code(400);
    }
} else {
    echo "aca";
    http_response_code(400);
}

