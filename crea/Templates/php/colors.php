<?php
    function buildCSSRule ($id, $selector, $rules) {
        echo("\n#template.color-" . $id . " " . $selector . " {");
        foreach ($rules as $rule) {
            echo("\n\t" . $rule[0] . ": " . $rule[1] . ";");
        }
        echo("\n}");
    }
    function hsl_array_to_hsla_string($o, $s = null, $l = null, $a = null) {
        $h = $o[0];
        $s = ($s === null) ? $o[1] : $s;
        $l = ($l === null) ? $o[2] : $l;
        $a = ($a === null) ? 1 : $a;
        return ("hsla(" . $h . "," . $s . "%," . $l . "%," . $a . ")");
    }
    /**/
    if ($_GET && isset($_GET["hex"])) {
        $hex = $_GET["hex"];
        
        $computedH = 0;
		$computedS = 0;
		$computedV = 0;
        $r = hexdec(substr($hex,0,2));
		$g = hexdec(substr($hex,2,2));
		$b = hexdec(substr($hex,4,2));
        
        $r1 = $r / 255;
	    $g1 = $g / 255;
	    $b1 = $b / 255;
        $max = max( $r1, $g1, $b1 );
	    $min = min( $r1, $g1, $b1 );

        $h;
        $s;
        $l = ( $max + $min ) / 2;
	    $d = $max - $min;

    	if( $d == 0 ){
        	$h = $s = 0; // achromatic
    	} else {
        	$s = $d / ( 1 - abs( 2 * $l - 1 ) );
            switch( $max ){
                case $r1:
                    $h = 60 * fmod( ( ( $g1 - $b1 ) / $d ), 6 ); 
                    if ($b1 > $g1) {
                        $h += 360;
                    }
                    break;
                case $g1: 
                    $h = 60 * ( ( $b1 - $r1 ) / $d + 2 ); 
                    break;
                case $b1: 
                    $h = 60 * ( ( $r1 - $g1 ) / $d + 4 ); 
                    break;
            }			        	        
	    }
        $h = round( $h, 2 );
        $s = round( $s * 100, 2 );
        $l = round( $l * 100, 2 );
    }
    $c_original = array($h, $s, $l);
    $c_original_desaturated = array($h, 20, $l);
    $c_original_dark = $l > 40 ? array($h, $s, 15) : array($h, $s, $l);
    $c_original_dark_desaturated = $l > 40 ? array($h, 30, 15) : array($h, 20, $l);
    $c_original_light = $l < 85 ? array($h, $s, 85) : array($h, $s, $l);
    $c_original_light_desaturated = $l < 85 ? array($h, 30, 85) : array($h, 30, $l);
    $c_complement = array((($h + 180) % 360), $s, $l);
    $c_invert = array((($h + 180) % 360), (100 - $s), (100 - $l));
    $c_invert_dark = array((($h + 180) % 360), $s, 25);
    $c_invert_dark_desaturated = array((($h + 180) % 360), 20, 25);
    $c_invert_desaturated = array((($h + 180) % 360), 20, (100 - $l));
    $c_invert_light = $l < 85 ? array((($h + 180) % 360), $s, 85) : array((($h + 180) % 360), $s, $l);
    $c_invert_light_desaturated = $l < 85 ? array((($h + 180) % 360), 30, 85) : array((($h + 180) % 360), 30, $l);
    $c_triad_2 = array((($h + 120) % 360), $s, $l);
    $c_triad_3 = array((($h + 240) % 360), $s, $l);
?>