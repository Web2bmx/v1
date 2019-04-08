<?php

include "../../lib/dbc.php";
include "../../lib/functions.php";

$result = $dbh->query("SELECT * FROM `templates`");
$images = [];
while ($arr = $result->fetch_assoc()) {
    array_push($images,$arr);
}

$hash = uniqid();
$finalImages = array();
$finalLogos = array();

$width='200';
$height='100';

if(isset($_FILES)){
    $uploadOk = 1;
    $name = "";

    // Check if image file is a actual image or fake image
    if($_FILES && $_FILES["fileToUpload"]["size"]) {
        $target_dir = "../img/logos/";
        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);    
        $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            //echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }

        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 500000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif" ) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {                
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
                $name = $hash . "." . $imageFileType;
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }    

    }
                                           
    $name="../img/logos/" . $hash . ".png";
    image_resize($target_file,$name,$width,$height);
    $img2=imagecreatefrompng($name);
        
}
?>