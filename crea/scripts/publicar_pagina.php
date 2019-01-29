<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";

$site_name = filter_input(INPUT_POST,'site_name');
$contenido = filter_input(INPUT_POST,'contenido');
$title = filter_input(INPUT_POST,'title');
$description = filter_input(INPUT_POST,'description');
$template_url = filter_input(INPUT_POST,'template_url');

if (!empty($_POST) && 
    $site_name && 
    $pagina) {

    $site = file_get_contents('../include/include_site.tmp.html');
    str_replace('##title##', $title, $site);
    str_replace('##description##', $description, $site);  
    str_replace('##content##', $contenido, $site);
    str_replace('##template_url##', $template_url, $site);

    if(!file_exists("/client_sites/" + $site_name)){
        mkdir("/client_sites/" + $site_name);
    }
    array_map('unlink', glob("/client_sites/" + $site_name + "/*"));
    if(file_put_contents("/client_sites/" + $site_name + "/index.html",$site) !== false) {
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
