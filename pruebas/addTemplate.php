<?php

include "../lib/dbc.php";

if (filter_input(INPUT_POST,'folder')){
    $folder = filter_input(INPUT_POST,'folder');
    $width = filter_input(INPUT_POST,'width');
    $height = filter_input(INPUT_POST,'height');
    $font = filter_input(INPUT_POST,'font');
    $fontsize = filter_input(INPUT_POST,'fontsize');
    $color = filter_input(INPUT_POST,'color');
    $posx = filter_input(INPUT_POST,'posx');
    $posy = filter_input(INPUT_POST,'posy');
    $uppercase = filter_input(INPUT_POST,'uppercase') ? 1 : 0;
    $align = filter_input(INPUT_POST,'align');
    
    if($dbh->query("INSERT INTO `templates` (`folder`, `width`, `height`, `font`, `fontsize`, `color`,`posx`,`posy`,`uppercase`,`align`,`id`) 
							VALUES ('$folder', '$width', '$height', '$font','$fontsize','$color','$posx','$posy',$uppercase,'$align',NULL);"))
    {
        echo "Template dado de alta";
    }else {
        echo "Error";
    }
}
?>
<html>
    <head>
        <meta charset="utf-8">
        <style>
            input,label{
                display: block;
            }
            input[type=checkbox]{
                display: inline-block;
            }
        </style>
    </head>
    <body>
        <h3>Alta de Template</h3>
        <form method="POST">
            <input type="text" name="folder" placeholder="Folder" />
            <input type="number" name="width" placeholder="Width" />
            <input type="number" name="height" placeholder="Height" />
            <input type="text" name="font" placeholder="Font" />
            <input type="number" name="fontsize" placeholder="Font Size" />
            <input type="text" name="color" placeholder="Color" />
            <input type="number" name="posx" placeholder="Posicion horizontal" />
            <input type="number" name="posy" placeholder="Posicion vertical" />
            <label>
                Texto en mayusculas?
                <input type="checkbox" value="true" name="uppercase" />
            </label>
            <label>
                Alineacion: 
                <select name="align">
                    <option value="left" selected>Izquierda</option>
                    <option value="center" selected>Centrado</option>
                    <option value="right" selected>Derecha</option>
                </select>    
            </label>
            <input type="submit" value="Subir" />
        </form>
        </body> 
</html>
