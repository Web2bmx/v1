<?php
    function buildCSSRule ($id, $selector, $rules) {
        echo("\n#template.color-" . $id . " " . $selector . " {");
        foreach ($rules as $rule) {
            echo("\n\t" . $rule[0] . ": " . $rule[1] . ";");
        }
        echo("\n}");
    }
    function hsv_to_hsl($h, $s, $b) {
        $s = $s / 100;
        $b = $b / 100;
        $l = (2 - $s) * $b / 2;
        if ($l != 0) {
            if ($l == 1) {
                $s = 0;
            } else if ($l < 0.5) {
                $s = $s * $b / ($l * 2);
            } else {
                $s = $s * $b / (2 - $l * 2);
            }
        }
        return array($h, number_format(($s * 100),2), number_format(($l * 100),2));
    }
    function hsl_array_to_hsla_string($o, $s = null, $l = null, $a = null) {
        $h = $o[0];
        $s = ($s === null) ? $o[1] : $s;
        $l = ($l === null) ? $o[2] : $l;
        $a = ($a === null) ? 1 : $a;
        return ("hsla(" . $h . "," . $s . "%," . $l . "%," . $a . ")");
    }
    /**/
    
    $h = $_GET && isset($_GET["h"]) ? $_GET["h"] : random_int(0, 360);
    $s = $_GET && isset($_GET["s"]) ? $_GET["s"] : random_int(0, 100);
    $b = $_GET && isset($_GET["b"]) ? $_GET["b"] : random_int(0, 100);
    /**/
    if ($h < 0) { $h = 0; } if ($h > 360) { $h = 360; }
    if ($s < 0) { $s = 0; } if ($s > 100) { $h = 100; }
    if ($b < 0) { $b = 0; } if ($b > 100) { $b = 100; }
    /**/
    $c_original = hsv_to_hsl($h, $s, $b);
    $c_original_desaturated = hsv_to_hsl($h, 20, $b);
    $c_original_dark = $b > 40 ? hsv_to_hsl($h, $s, 15) : hsv_to_hsl($h, $s, $b);
    $c_original_dark_desaturated = $b > 40 ? hsv_to_hsl($h, 30, 15) : hsv_to_hsl($h, 20, $b);
    $c_original_light = $b < 85 ? hsv_to_hsl($h, $s, 85) : hsv_to_hsl($h, $s, $b);
    $c_original_light_desaturated = $b < 85 ? hsv_to_hsl($h, 30, 85) : hsv_to_hsl($h, 30, $b);
    $c_complement = hsv_to_hsl((($h + 180) % 360), $s, $b);
    $c_invert = hsv_to_hsl((($h + 180) % 360), (100 - $s), (100 - $b));
    $c_invert_dark = hsv_to_hsl((($h + 180) % 360), $s, 25);
    $c_invert_dark_desaturated = hsv_to_hsl((($h + 180) % 360), 20, 25);
    $c_invert_desaturated = hsv_to_hsl((($h + 180) % 360), 20, (100 - $b));
    $c_invert_light = $b < 85 ? hsv_to_hsl((($h + 180) % 360), $s, 85) : hsv_to_hsl((($h + 180) % 360), $s, $b);
    $c_invert_light_desaturated = $b < 85 ? hsv_to_hsl((($h + 180) % 360), 30, 85) : hsv_to_hsl((($h + 180) % 360), 30, $b);
    $c_triad_2 = hsv_to_hsl((($h + 120) % 360), $s, $b);
    $c_triad_3 = hsv_to_hsl((($h + 240) % 360), $s, $b);
?>