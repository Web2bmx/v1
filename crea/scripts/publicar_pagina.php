<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$site_name = filter_input(INPUT_POST,'site_name');
$contenido = filter_input(INPUT_POST,'contenido');
$title = filter_input(INPUT_POST,'title');
$description = filter_input(INPUT_POST,'description');

if (!empty($_POST) && 
    $site_name && 
    $contenido 
    // $title && 
    //$description
    ) {

    $site = file_get_contents('../include/include_site.tmp.html');
    $site = str_replace('##title##', $title, $site);
    $site = str_replace('##description##', $description, $site);  
    $site = str_replace('##content##', $contenido, $site);
    $site = str_replace('href="Templates', 'href="/crea/Templates', $site);

    $path = "../../client_sites/" . strtolower($site_name);

    if(!file_exists($path)){
        mkdir($path);
    }
    array_map('unlink', glob($path . "/*"));
    if(file_put_contents($path . "/index.html",$site) !== false) {
        echo '{"ok": 1}';
        http_response_code(200);   
    } else {
        echo '{"ok": 0, "error": "No se puso crear la página"}';
        http_response_code(400);        
    }

} else {
    echo '{"ok": 0, "error": "Error al recibir datos de formulario"}';
    http_response_code(400);
}
