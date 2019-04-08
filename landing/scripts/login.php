<?php
header('Content-Type: application/json');

include "../../lib/dbc.php";
include "../../scripts/getPages.php";

$correo = filter_input(INPUT_POST,'correo');
$password = filter_input(INPUT_POST,'password');

if (!empty($_POST) && $correo && $password){

    //buscar usuario existente
    $sql = "SELECT * FROM `usuarios` WHERE `correo` = '" . $correo . "'";

    $resultado = $dbh->query($sql);

    if($resultado->num_rows > 0){
        //usuario encontrado
        while ($fila = $resultado->fetch_assoc()) {
            $id = $fila["Id"];
            $hashed_pass=$fila["password"];
        } 

        if (!password_verify($password, $hashed_pass)) {
            echo '{"ok":0,"error":"Usuario o Contraseña incorrecta."}';
            http_response_code(200);
            exit;   
        } else {
            $paginas = getPages($dbh, $id);

            echo json_encode(array("ok" => 1, "paginas" => $paginas, "userId" => $id));
            //echo '{"ok":1,"paginas" : "' . json_encode(utf8json($paginas)) . '", "userId": "' . $id . '" }';
            http_response_code(200);
            exit;   
        }

    
    } else {
        echo '{"ok":0,"error":"Usuario o Contraseña incorrecta."}';
        http_response_code(200);
        exit;        
    }



}

function utf8json($inArray) { 

    static $depth = 0; 

    /* our return object */ 
    $newArray = array(); 

    /* safety recursion limit */ 
    $depth ++; 
    if($depth >= '30') { 
        return false; 
    } 

    /* step through inArray */ 
    foreach($inArray as $key=>$val) { 
        if(is_array($val)) { 
            /* recurse on array elements */ 
            $newArray[$key] = utf8json($val); 
        } else { 
            /* encode string values */ 
            $newArray[$key] = utf8_encode($val); 
        } 
    } 

    /* return utf8 encoded array */ 
    return $newArray; 
} 