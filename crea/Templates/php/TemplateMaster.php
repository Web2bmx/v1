<?php
    $content_ide = isset($_GET["t"]) ? $_GET["t"] : 0;
    $content_file = "../xml/Content-" . $content_ide . ".xml";
    if (file_exists($content_file)) {
        $content = simplexml_load_file($content_file);
    }
?>