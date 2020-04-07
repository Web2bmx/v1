<?php
    $t = $_GET && isset($_GET["t"]) ? $_GET["t"] : 1;
    
    include("../Template-00" . $t . "/css/dynamic.php");

    $cs = array(
                "light" => array($c_original_light, $c_original_light_desaturated, $c_invert_light_desaturated),
                "dark" => array($c_original_dark, $c_original_dark_desaturated, $c_invert_dark_desaturated),
                "grey" => array($c_original_desaturated, $c_invert_desaturated, $c_original_light),
                "impact" => array($c_original, $c_invert_light, $c_original_light),
                "colorful" => array($c_original_light, $c_triad_2, $c_triad_3)
    );    
    foreach ($cs as $k=>$v) {
        for ($i = 1; $i < 4; $i++) {
            echo("#thumb-" . $k . ">.control-color-thumb-bg:nth-child(" . $i . ") { background-color: " . hsl_array_to_hsla_string($v[$i - 1]) . "; }");
        }    
    }    
?>