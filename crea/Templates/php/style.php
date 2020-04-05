<?php
    $t = $_GET && isset($_GET["t"]) ? $_GET["t"] : 1;
    
    include("../Template-00" . $t . "/css/dynamic.php");

    
    echo("#thumb-light>.control-color-thumb-bg:nth-child(1) { background-color: " . hsl_array_to_hsla_string($c_original_light) . "; }");
    echo("#thumb-light>.control-color-thumb-bg:nth-child(2) { background-color: " . hsl_array_to_hsla_string($c_original_light_desaturated) . "; }");
    echo("#thumb-light>.control-color-thumb-bg:nth-child(3) { background-color: " . hsl_array_to_hsla_string($c_invert_light_desaturated) . "; }");
    echo("#thumb-dark>.control-color-thumb-bg:nth-child(1) { background-color: " . hsl_array_to_hsla_string($c_original_dark) . "; }");
    echo("#thumb-dark>.control-color-thumb-bg:nth-child(2) { background-color: " . hsl_array_to_hsla_string($c_original_dark_desaturated) . "; }");
    echo("#thumb-dark>.control-color-thumb-bg:nth-child(3) { background-color: " . hsl_array_to_hsla_string($c_invert_dark_desaturated) . "; }");
    echo("#thumb-grey>.control-color-thumb-bg:nth-child(1) { background-color: " . hsl_array_to_hsla_string($c_original_desaturated) . "; }");
    echo("#thumb-grey>.control-color-thumb-bg:nth-child(2) { background-color: " . hsl_array_to_hsla_string($c_invert_desaturated) . "; }");
    echo("#thumb-grey>.control-color-thumb-bg:nth-child(3) { background-color: " . hsl_array_to_hsla_string($c_original_light) . "; }");
    echo("#thumb-impact>.control-color-thumb-bg:nth-child(1) { background-color: " . hsl_array_to_hsla_string($c_original) . "; }");
    echo("#thumb-impact>.control-color-thumb-bg:nth-child(2) { background-color: " . hsl_array_to_hsla_string($c_invert_light) . "; }");
    echo("#thumb-impact>.control-color-thumb-bg:nth-child(3) { background-color: " . hsl_array_to_hsla_string($c_original_light) . "; }");
    echo("#thumb-colorful>.control-color-thumb-bg:nth-child(1) { background-color: " . hsl_array_to_hsla_string($c_original_light) . "; }");
    echo("#thumb-colorful>.control-color-thumb-bg:nth-child(2) { background-color: " . hsl_array_to_hsla_string($c_triad_2) . "; }");
    echo("#thumb-colorful>.control-color-thumb-bg:nth-child(3) { background-color: " . hsl_array_to_hsla_string($c_triad_3) . "; }");
?>