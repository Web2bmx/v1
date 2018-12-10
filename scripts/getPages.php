<?php

function getPages($dbh, $id){
    $sql = "SELECT * FROM `info_paginas` WHERE IdUsuario = '$id'";
    $r = $dbh->query($sql);
    $paginas = [];

    if($r->num_rows > 0){
        while ($fila = $r->fetch_assoc()) {
            $pagina = [];                    
            $pagina["idSitio"] = $fila["id"];
            $pagina["info"] = utf8_encode($fila["info"]);
            array_push($paginas,$pagina);
        }                       
    } 
    return $paginas;
}