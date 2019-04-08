<?php

include "../lib/dbc.php";
include "../lib/functions.php";

$result = $dbh->query("SELECT * FROM `templates`");
$images = [];
while ($arr = $result->fetch_assoc()) {
    array_push($images,$arr);
}

//$images = array(
//    array(
//        "folder" => "html5up-strongly-typed",
//        "width" => 490,
//        "height" => 60,
//        "font" => "Arvo-Bold.ttf",
//        "fontsize" => 32,
//        "color" => "ed786a",
//        "posx"=>236,
//        "posy"=>120,
//        "upper" => true,
//        "align"=>"center"),
//    array(
//        "folder" => "html5up-telephasic",
//        "width" => 260,
//        "height" => 70,
//        "font" => "SourceSansPro-Bold.ttf",
//        "fontsize" => 24,
//        "color" => "ffffff",
//        "posx"=>380,
//        "posy"=>10,
//        "upper" => true,
//        "align"=>"center"),
//    array(
//        "folder" => "templatemo_395_urbanic",
//        "width" => 246,
//        "height" => 52,
//        "font" => "OpenSans-Regular.ttf",
//        "fontsize" => 50,
//        "color" => "7777777",
//        "posx"=>30,
//        "posy"=>80,
//        "upper" => false,
//        "align"=>"left"),
//    array(
//        "folder" => "yebo-flat-layout",
//        "width" => 150,
//        "height" => 90,
//        "font" => "Lato-Bold.ttf",
//        "fontsize" => 30,
//        "color" => "848789",
//        "posx"=>100,
//        "posy"=>30,
//        "upper" => true,
//        "align"=>"left"),    
//    array(
//        "folder" => "magnetic_pixelhint",
//        "width" => 162,
//        "height" => 50,
//        "font" => "OpenSans-Bold.ttf",
//        "fontsize" => 20,
//        "color" => "000000",
//        "posx"=>50,
//        "posy"=>100,
//        "upper" => true,
//        "align"=>"left"),
//    array(
//        "folder" => "startbootstrap-agency-gh-pages",
//        "width" => 182,
//        "height" => 42,
//        "font" => "KaushanScript-Regular.ttf",
//        "fontsize" => 28,
//        "color" => "fed136",
//        "posx"=>100,
//        "posy"=> 40,
//        "upper" => false,
//        "align"=>"left")  
//    );

$hash = uniqid();
$finalImages = array();
$finalLogos = array();

if(isset($_POST["submit"])){
    $uploadOk = 1;
    $name = "";

    // Check if image file is a actual image or fake image
    if($_FILES && $_FILES["fileToUpload"]["size"]) {
        $target_dir = "logos/";
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

        // Check if file already exists
//        if (file_exists($target_file)) {
//            echo "Sorry, file already exists.";
//            $uploadOk = 0;
//        }
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

    foreach($images as $image){
                                           
        if($name==""){                      
            if(isset($_POST["empresa"]) && $_POST["empresa"] != "") {
                $text=$_POST["empresa"];
            } else{
                $text = "No name";
            }
            if($image["uppercase"]) $text = strtoupper($text);
            //Get size
            $font = "fonts/" . $image["font"]; //font path
            
            $box = calculateTextBox($text, $font,$image["fontsize"],0); 
            //Create logo from text

            $logoimg = imagecreatetruecolor($box["width"]+10, $box["height"]+5); //create Image
            //for transparent background
            imagealphablending($logoimg, false);
            imagesavealpha($logoimg, true);
            $col=imagecolorallocatealpha($logoimg,255,255,255,127);
            imagefill($logoimg, 0, 0, $col);
            //for transparent background
            $colors = explode(",",rgbarray($image["color"]));
            $white = imagecolorallocate($logoimg, $colors[0], $colors[1], $colors[2]); //for font color

//            $x= -$textw/2; // x- position of your text
//            $y=$image["height"] - ($image["height"]-$image["fontsize"]); // y- position of your text
            imagettftext($logoimg, $image["fontsize"],0 ,$box["left"], $box["top"], $white, $font, $text); //fill text in your image
            $target="templates/" . $image["folder"] . "/2b_thumb/logos/" . $hash . ".png"; //path of target where you want to save image
            imagepng($logoimg,$target); //save your image at new location $target

            $img2=imagecreatefrompng($target);
            
            image_resize($target,$target,$image["width"],$image["height"]);
            $img2=imagecreatefrompng($target);
            $subx=imagesx($img2);
            $suby=imagesy($img2);            
        } else {
            $name="templates/" . $image["folder"] . "/2b_thumb/logos/" . $hash . ".png";
            image_resize($target_file,$name,$image["width"],$image["height"]);
            $img2=imagecreatefrompng($name);
            $subx=imagesx($img2);
            $suby=imagesy($img2);
        }
    
    array_push($finalLogos,$hash . ".png");
        
    //paste on actual image
    $img1=imagecreatefrompng("templates/" . $image["folder"] . "/2b_thumb/org.PNG");
    
    $difx=0;
    if($image["width"]>$subx && $image["align"]=="center"){
        $difx = ($image["width"]/2) - ($subx/2);
    }
    
    $dify=0;
    if($image["height"]>$suby){
        $dify = ($image["height"]/2) - ($suby/2);
    }    
    
    imagecopy($img1,$img2,$image["posx"] + $difx,$image["posy"]+$dify,0,0,$subx,$suby);

    imagepng($img1,"templates/" . $image["folder"] . "/2b_thumb/" . $hash . ".png"); //save your image at new location $target
    
    array_push($finalImages,"templates/" . $image["folder"] . "/2b_thumb/" . $hash . ".png");        
        
    }

}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Untitled Form</title>
        <style>
            body > div:first-child{
                width: 30%;
                float: left;                
            }
            body > div + div{
                width: 70%;
                float: left;                
            }
            body > div + div img{
                width: 100%;                
            }
            body > div + div aside{
                width: 50%;
                float: left;
                box-sizing: border-box;
                padding: 10px;
                border: 1px solid #CCC;
            }
            body ul li{
                list-style: none;
                margin-bottom: 15px;
            }
        </style>
    </head>
    <body id="main_body" >

        <div id="form_container">

            <form method="post" enctype="multipart/form-data">					
                <ul >

                    <li id="li_1" >
                        <label class="description" for="element_1">Nombre de tu empresa </label>
                        <div>
                            <input id="element_1" name="empresa" class="element text medium" type="text" maxlength="255" value=""/> 
                        </div> 
                    </li>		<li id="li_2" >
                        <label class="description" for="element_2">Upload a File </label>
                        <div>
                            <input name="fileToUpload" id="fileToUpload" class="element file" type="file"/> 
                        </div>  
                    </li>

                    <li class="buttons">
                        <input id="saveForm" class="button_text" type="submit" name="submit" value="Submit" />
                    </li>
                </ul>
            </form>
        </div>
        <div>
            <?php
            if(!empty($finalImages)){
                $c = 0;
                foreach($finalImages as $i){
                    $folder = explode("/2b_thumb/",$i);
                    echo ' 
                        <aside>
                            <a target="_blank" href="' . $i . '">                            
                                <img src="' . $i . '" />
                            </a>
                            <a href="' . $folder[0] . '?logo=2b_thumb/logos/' . $finalLogos[$c] . '" target="_blank">Ver en accion</a>
                        </aside>                  
                    ';
                    $c++;
                }  
            }
             else{
                foreach($images as $i){
                    echo ' 
                        <aside>
                            <a target="_blank" href="templates/' . $i["folder"] . '/2b_thumb/org.PNG"> 
                                <img src="templates/' . $i["folder"] . '/2b_thumb/org.PNG" />
                            </a>
                        </aside>                  
                    ';                    
                }  
             }                
            ?>
        </div>
    </body>
</html>