<?php
header('Content-Type: application/json');
foreach($_FILES as $file){
    if($file["size"]) {
        $target_dir = "../client_images/";
        $name = uniqid() . "_" . basename($file["name"]);
        $target_file = $target_dir . $name;    
        $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
        $uploadOk = 1;
        $mensaje = new stdClass();

        $check = getimagesize($file["tmp_name"]);
        if($check === false) {
            $mensaje->texto = "Este archivo no es una imagen.";
            $uploadOk = 0;
        }
    
        // Check file size
        if ($file["size"] > 500000) {
            $mensaje->texto = "Lo sentimos, este archivo es muy grande.";
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
    }
}
// Check if image file is a actual image or fake image
