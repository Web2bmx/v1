<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Web2b - Tu sitio web rápido y fácil</title>
		<meta name="description" content="Impulsa tu estrategia digital">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<meta name="author" content="Web2b">
		<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel="stylesheet" href="/css/jquery-ui.min.css" >
        <link rel="stylesheet" href="/css/jquery-ui.structure.min.css" >
		<link rel="stylesheet" href="/css/jquery-ui.theme.min.css" >
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/regular.css" integrity="sha384-ZlNfXjxAqKFWCwMwQFGhmMh3i89dWDnaFU2/VZg9CvsMGA7hXHQsPIqS+JIAmgEq" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/brands.css" integrity="sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
		<link rel="stylesheet" href="css/styles.css?v=1.0">
	</head>
	<body class="init">		
		<div id="template-cont"></div>
		<div id="app">
			<?php
				include_once("include/include_app-new-start.php");
				include_once("include/include_app-cover.php");
				include_once("include/include_app-control.php");
			?>
		</div>		
		<?php include_once("include/include_html_templates.php"); ?>
		<?php 
			$host = $_SERVER['HTTP_HOST'];
			$host_arr = explode(".",$host);
			if ($host_arr[0] !== "local" ) {
				include_once("include/include_chat.php"); 
			}
		?>
		<?php include_once("include/include_modal-page-switcher.php"); ?>
		<?php include_once("include/include_libraries.php"); ?>
		<img src="/img/logo.png" class="floating-logo" />
	</body>
</html>