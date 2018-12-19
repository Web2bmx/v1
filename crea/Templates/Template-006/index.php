<?php include_once("../php/TemplateMaster.php"); ?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Template 006</title>
		<meta name="description" content="Template 006">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<meta name="author" content="Web2b">
		<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/regular.css" integrity="sha384-ZlNfXjxAqKFWCwMwQFGhmMh3i89dWDnaFU2/VZg9CvsMGA7hXHQsPIqS+JIAmgEq" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/brands.css" integrity="sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<!--<script type="text/javascript" src="js/scripts.js"></script>-->
	</head>
	<body>
		<div id="template" <?php if (isset($_GET["c"])) { echo('class="color-' . $_GET["c"] . '"'); } ?>>
			<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"" rel="stylesheet">
			<link rel="stylesheet" href="css/styles.css?v=1.0">
			<main>
				<?php include_once("../php/TemplateHero2.php"); ?>
				<?php include_once("../php/TemplateMenu1.php"); ?>
				<?php include_once("../php/TemplateItems2.php"); ?>	
				<?php include_once("../php/TemplateAboutus1.php"); ?>	
				<?php include_once("../php/TemplateGaleria1.php"); ?>	
				<?php include_once("../php/TemplateCta1.php"); ?>
				<?php include_once("../php/TemplateMap1.php"); ?>	
				<?php include_once("../php/TemplateFooter2.php"); ?>
				<?php include_once("../php/TemplateDisclaimer1.php"); ?>
			</main>
			<div id="template-colors" style="display: none;">
				<div class="template-color" id="color-orange">
					<h1>Naranja</h1>
					<p>#F0AA00</p>
					<p>#000000</p>
					<p>#FFFFFF</p>
				</div>
				<div class="template-color" id="color-yellow">
					<h1>Amarillo</h1>
					<p>#FFE600</p>
					<p>#000000</p>
					<p>#FFFFFF</p>
				</div>
				<div class="template-color" id="color-green">
					<h1>Verde</h1>
					<p>#D4FF00</p>
					<p>#000000</p>
					<p>#FFFFFF</p>
				</div>
			</div>
		</div>	
	</body>
</html>