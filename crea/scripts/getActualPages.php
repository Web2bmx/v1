<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";
include "../../scripts/getPages.php";

$id = filter_input(INPUT_GET,'userId');

if (!empty($_GET) && $id){

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `Id` = '" . $id . "'";
    $resultado = $dbh->query($sql);
    if($resultado->num_rows > 0){

        $paginas = getPages($dbh, $id);
        echo '{"ok": 1, "paginas": ' . json_encode($paginas) . '}';
        http_response_code(200);        

    } else {
        echo '{"ok": 0, "mensaje": "Usuario no existe"}';
        http_response_code(200);
    }
             

} else {
    echo '{"ok": 0, "mensaje": "Error al recibir datos de formulario"}';
    http_response_code(200);
}