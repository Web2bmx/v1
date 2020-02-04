<?php

include '../lib/dbc.php';

$sql = "SELECT info FROM `info_paginas` WHERE id in (SELECT id_pagina FROM `pagos` WHERE fecha_fin >= CURDATE())";
$pagados = array();
$existentes = array();

$resultado = $dbh->query($sql);
if($resultado->num_rows > 0){
    while ($fila = $resultado->fetch_assoc()) {
        $json = json_decode(urldecode($fila['info']));
        array_push($pagados,strtolower($json->{'selections'}->{'siteName'}->{'text'}));        
    }
}

$path = '../client_sites/';
foreach (glob("$path*",GLOB_ONLYDIR) as $nombre_fichero) {
    array_push($existentes, str_replace($path,'',$nombre_fichero));    
}

$res_arr = array_diff($existentes,$pagados);
echo "<pre>";
print_r($pagados);
print_r($existentes);
print_r($res_arr);
echo "</pre>";
foreach($res_arr as $site) {
    array_map('unlink', glob($path . $site . "/*"));
    rmdir( $path . $site );
}