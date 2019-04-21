<?php
    $content_ide = isset($_GET["t"]) ? $_GET["t"] : 0;
    $content_file = "../xml/Content-" . $content_ide . ".xml";
    if (file_exists($content_file)) {
        $content = simplexml_load_file($content_file);
    }
    function getImgClasses($xml) {
        $img_classes = "";
        if ($xml['orientation']) {
            switch ($xml['orientation']) {
                case "portrait" :
                    $img_classes .= ("img-P ");
                    break;
                case "landscape" :
                    $img_classes .= ("img-L ");
                    break;
                case "square" :
                    $img_classes .= ("img-S ");
                    break;    
            }
        }
        if ($xml['focus-hor'] && $xml['focus-ver']) {
            $img_classes .= ("img-");
            switch ($xml['focus-ver']) {
                case "top" :
                    $img_classes .= ("T");
                    break;
                case "middle" :
                    $img_classes .= ("M");
                    break;
                case "bottom" :
                    $img_classes .= ("B");
                    break;    
            }
            switch ($xml['focus-hor']) {
                case "left" :
                    $img_classes .= ("L ");
                    break;
                case "center" :
                    $img_classes .= ("C ");
                    break;
                case "right" :
                    $img_classes .= ("R ");
                    break;    
            }
        }
        return $img_classes;
    }
?>