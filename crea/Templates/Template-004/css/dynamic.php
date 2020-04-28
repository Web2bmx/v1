<?php
include("../../php/color/colors.php");
header('Content-type: text/css');
/*LIGHT*/
buildCSSRule("light", "", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("light", "#menu h4", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("light", "#menu menu li a:hover", array(
    array("color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("light", "#menu menu li a:active", array(
    array("color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("light", ".item", array(
    array("background-color", hsl_array_to_hsla_string($c_invert_light_desaturated))
));
buildCSSRule("light", ".item .wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("light", "#aboutus .wrapper", array(
    array("background-color", hsl_array_to_hsla_string($c_invert_light_desaturated))
));
buildCSSRule("light", "#aboutus .wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("light", "footer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("light", "footer  header p", array(
    array("color", hsl_array_to_hsla_string($c_invert_dark))
));
buildCSSRule("light", "#disclaimer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark))
));
/**/
/*DARK*/
buildCSSRule("dark", "", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#menu", array(
    array("background-color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("dark", "#menu h4", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#menu menu li a:hover", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", "#menu menu li a:active", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", "#hero", array(
    array("background-color", hsl_array_to_hsla_string($c_invert_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#items", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", ".item", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark))
));
buildCSSRule("dark", ".item .wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_light_desaturated))
));
buildCSSRule("dark", "#gallery", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark)),
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#gallery a", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#aboutus", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark)),
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#aboutus .wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#aboutus .wrapper-content p", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "#cta .wrapper-content", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("dark", "footer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_light))
));
buildCSSRule("dark", "footer  header p", array(
    array("color", hsl_array_to_hsla_string($c_invert_light_desaturated))
));
buildCSSRule("dark", "#disclaimer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark))
));
/* */
/*GREY*/
buildCSSRule("grey", "", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("grey", "#menu h4", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("grey", "#menu menu li a:hover", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("grey", "#menu menu li a:active", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("grey", "#aboutus .wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("grey", "#cta .wrapper-content", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("grey", ".item", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("grey", ".item .wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("grey", "#gallery header h2", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("grey", "footer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("grey", "footer  header p", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("grey", "#disclaimer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
/* */
/*IMPACT: COLOR PLUS ACCENT*/
buildCSSRule("impact", "", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("impact", "#menu", array(
    array("background-color", hsl_array_to_hsla_string($c_original)),
    array("color", hsl_array_to_hsla_string($c_invert_light_desaturated))
));
buildCSSRule("impact", "#menu menu li a:hover", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("impact", "#menu menu li a:active", array(
    array("color", hsl_array_to_hsla_string($c_original_light_desaturated))
));
buildCSSRule("impact", "#hero", array(
    array("background-color", hsl_array_to_hsla_string($c_invert_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("impact", "h1", array(
    array("color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("impact", ".seemore", array(
    array("border-color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("impact", "#aboutus", array(
    array("background-color", hsl_array_to_hsla_string($c_invert_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("impact", "#cta .wrapper-content", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("impact", "footer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("impact", "footer  header p", array(
    array("color", hsl_array_to_hsla_string($c_invert_dark))
));
buildCSSRule("impact", "#disclaimer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_light_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_dark))
));
/* */
/*IMPACT: COLORFUL*/
buildCSSRule("colorful", "", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("colorful", "#hero", array(
    array("background-color", hsl_array_to_hsla_string($c_invert_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("colorful", "h1", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("colorful", ".seemore", array(
    array("border-color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("colorful", "#menu", array(
    array("border-color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("colorful", "#menu menu li a:hover", array(
    array("border-color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("colorful", "#menu menu li a:active", array(
    array("border-color", hsl_array_to_hsla_string($c_original))
));
buildCSSRule("colorful", "#aboutus", array(
    array("background-color", hsl_array_to_hsla_string($c_triad_2)),
    array("color", hsl_array_to_hsla_string($c_invert))
));
buildCSSRule("colorful", "#cta .wrapper-content", array(
    array("color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("colorful", "footer", array(
    array("background-color", hsl_array_to_hsla_string($c_triad_3)),
    array("color", hsl_array_to_hsla_string($c_invert_dark_desaturated))
));
buildCSSRule("colorful", "footer  header p", array(
    array("color", hsl_array_to_hsla_string($c_invert_dark))
));
buildCSSRule("colorful", "#disclaimer", array(
    array("background-color", hsl_array_to_hsla_string($c_triad_3)),
    array("color", hsl_array_to_hsla_string($c_invert))
));
?>
