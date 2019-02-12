<?php

function getPages($dbh, $id)
{
    $sql = "SELECT info_paginas.id, info_paginas.IdUsuario, info_paginas.info, pagos.paquete, pagos.fecha_fin,
        IF(DATE(pagos.fecha_fin) >= DATE(NOW()), TRUE, FALSE) as activo
        FROM `info_paginas`
        LEFT JOIN pagos ON (info_paginas.id = pagos.id_pagina) WHERE IdUsuario = '$id'";
    $r = $dbh->query($sql);
    $paginas = [];

    if ($r->num_rows > 0) {
        while ($fila = $r->fetch_assoc()) {
            $pagina = [];
            $pagina["idSitio"] = $fila["id"];
            $pagina["info"] = utf8_encode($fila["info"]);
            $pagina["paquete"] = $fila["paquete"];
            $pagina["activo"] = $fila["activo"];
            $pagina["fecha_fin"] = $fila["fecha_fin"];
            array_push($paginas, $pagina);
        }
    }
    return $paginas;
}