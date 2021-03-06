<?php
header('Content-Type: application/json');
foreach($_FILES as $file){
    if($file["size"]) {
        $unique_id = isset($_GET['unique_id']) ? $_GET["unique_id"] : uniqid();
        $target_dir = "../client_images/";
        $name = $unique_id . "_" . str_replace(" ", "", basename($file["name"]));
        $target_file = $target_dir . $name;    
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        $uploadOk = 1;
        $mensaje = new stdClass();

        $check = getimagesize($file["tmp_name"]);
        if($check === false) {
            $mensaje->texto = "Este archivo no es una imagen.";
            $uploadOk = 0;
        }
    
        // Check file size
        if ($file["size"] > 50000000) {
            $mensaje->texto = "Lo sentimos, este archivo es muy grande. Intenta con uno mas pequeño.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif" ) {
            $mensaje->texto = "Lo sentimos, solo archivos JPG, JPEG, PNG o GIF son permitidos.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            $mensaje->texto = $mensaje->texto . " Tu archivo no fue subido.";
            $mensaje->upload = 0;
        } else {                
            if (move_uploaded_file($file["tmp_name"], $target_file)) {
                //echo "The file ". basename( $file["name"]). " has been uploaded.";
                $mensaje->texto = $name;
                $mensaje->upload = 1;
            } else {
                $mensaje->texto = "Hubo un error al subir tu archivo.";
                $mensaje->upload = 0;
            }
        }   
        echo json_encode($mensaje);
        http_response_code(200);     
    } else {
        echo '{"texto":"Ha habido problemas en el servidor para subir tu imagen.","upload":0}';
        http_response_code(200);     
    }
}
// Check if image file is a actual image or fake image
