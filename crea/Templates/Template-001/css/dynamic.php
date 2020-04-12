<?php
include("../php/colors.php");
header('Content-type: text/css');
/*LIGHT*/
buildCSSRule("light", ".wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original, 0, 100, 1)),
    array("color", hsl_array_to_hsla_string($c_original_dark))
));
buildCSSRule("light", "#items", array(
    array("color", hsl_array_to_hsla_string($c_original_dark))
));
buildCSSRule("light", "#aboutus div.wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original, 0, 100, 1)),
    array("background", "radial-gradient(circle, " . hsl_array_to_hsla_string($c_original, 0, 100, .7) . " 0%, " . hsl_array_to_hsla_string($c_original, 0, 100, .9) . " 100%)"),
    array("color", hsl_array_to_hsla_string($c_original_dark))
));
buildCSSRule("light", "#gallery", array(
    array("color", hsl_array_to_hsla_string($c_original_dark))
));
buildCSSRule("light", "#cta", array(
    array("background-color", hsl_array_to_hsla_string($c_original, 0, 100, 1)),
    array("color", hsl_array_to_hsla_string($c_original_dark))
));
buildCSSRule("light", "footer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("light", "footer header p", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("light", "#disclaimer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
/* */
/*DARK*/
buildCSSRule("dark", "", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", ".wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", "#aboutus div.wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark)),
    array("background", "radial-gradient(circle, " . hsl_array_to_hsla_string($c_original_dark, null, null, .5) . " 0%, " . hsl_array_to_hsla_string($c_original_dark, null, null, .8) . " 100%)"),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", ".gallery-nav > span", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", "#cta", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", "footer header p", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("dark", "#disclaimer", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
/* */
/*GREY*/
buildCSSRule("grey", "", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("grey", ".wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("grey", "#aboutus div.wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original_desaturated)),
    array("background", "radial-gradient(circle, " . hsl_array_to_hsla_string($c_original_desaturated, null, null, .5) . " 0%, " . hsl_array_to_hsla_string($c_original_desaturated, null, null, .8) . " 100%)"),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("grey", ".gallery-nav > span", array(
    array("background-color", hsl_array_to_hsla_string($c_original_desaturated)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("grey", "#cta", array(
    array("background-color", hsl_array_to_hsla_string($c_original)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("grey", "footer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated))
));
buildCSSRule("grey", "footer header p", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("grey", "#disclaimer", array(
    array("background-color", hsl_array_to_hsla_string($c_original_dark_desaturated)),
    array("color", hsl_array_to_hsla_string($c_original_light))
));
/* */
/*IMPACT: COLOR PLUS ACCENT*/
buildCSSRule("impact", ".wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("impact", "#aboutus div.wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original)),
    array("background", "radial-gradient(circle, " . hsl_array_to_hsla_string($c_original, null, null, 1) . " 0%, " . hsl_array_to_hsla_string($c_original, null, null, .7) . " 100%)"),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("impact", ".gallery-nav > span", array(
    array("background-color", hsl_array_to_hsla_string($c_original)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("impact", "#cta", array(
    array("background-color", hsl_array_to_hsla_string($c_invert)),
    array("color", hsl_array_to_hsla_string($c_original_desaturated))
));
buildCSSRule("impact", "footer header p", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
buildCSSRule("impact", "#disclaimer", array(
    array("color", hsl_array_to_hsla_string($c_original_light))
));
/* */
/*IMPACT: COLORFUL*/
buildCSSRule("colorful", ".wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_original)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("colorful", "#aboutus div.wrapper-content", array(
    array("background-color", hsl_array_to_hsla_string($c_triad_2)),
    array("background", "radial-gradient(circle, " . hsl_array_to_hsla_string($c_triad_2, null, null, 1) . " 0%, " . hsl_array_to_hsla_string($c_triad_2, null, null, .7) . " 100%)"),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("colorful", ".gallery-nav > span", array(
    array("background-color", hsl_array_to_hsla_string($c_triad_2)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("colorful", "#cta", array(
    array("background-color", hsl_array_to_hsla_string($c_triad_3)),
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("colorful", "footer header p", array(
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
buildCSSRule("colorful", "#disclaimer", array(
    array("color", hsl_array_to_hsla_string($c_invert_desaturated))
));
/* */
?>