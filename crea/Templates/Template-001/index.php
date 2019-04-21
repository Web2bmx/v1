<?php include_once("../php/Master.php"); ?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Template 001</title>
		<meta name="description" content="Template 001">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<meta name="author" content="Web2b">
		<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	</head>
	<body>
		<div id="template" <?php if (isset($_GET["c"])) { echo('class="color-' . $_GET["c"] . '"'); } ?>>
			<link href="https://fonts.googleapis.com/css?family=Markazi+Text:400,700|Open+Sans:400,400i,700" rel="stylesheet">
			<link rel="stylesheet" href="css/styles.css?v=1.0">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<!--<script src="js/scripts.js"></script>-->
			<main>
				<?php include_once("../php/Components/Hero.php"); ?>
				<?php include_once("../php/Components/Items.php"); ?>
				<?php include_once("../php/Components/Aboutus.php"); ?>
				<?php include_once("../php/Components/Gallery.php"); ?>
				<?php include_once("../php/Components/CTA.php"); ?>
				<?php include_once("../php/Components/Map.php"); ?>
				<?php include_once("../php/Components/Footer.php"); ?>
				<?php include_once("../php/Components/Disclaimer.php"); ?>
			</main>
			<div id="template-colors" style="display: none;">
				<div class="template-color" id="color-orange">
					<h1>Naranja</h1>
					<p>rgba(250, 153, 0, 1)</p>
					<p>rgba(0,0,0,1)</p>
					<p>rgba(255,255,255,1)</p>
				</div>
				<div class="template-color" id="color-yellow">
					<h1>Amarillo</h1>
					<p>rgba(250, 212, 0, 1)</p>
					<p>rgba(0,0,0,1)</p>
					<p>rgba(255,255,255,1)</p>
				</div>
				<div class="template-color" id="color-green">
					<h1>Verde</h1>
					<p>rgba(164, 188, 0, 1)</p>
					<p>rgba(0,0,0,1)</p>
					<p>rgba(255,255,255,1)</p>
				</div>
			</div>
		</div>	
	</body>
</html>