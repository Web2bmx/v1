<?php include_once("../php/TemplateMaster.php"); ?>
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
				<?php include_once("../php/TemplateHero1.php"); ?>
				<?php include_once("../php/TemplateItems2.php"); ?>
				<?php include_once("../php/TemplateAboutus1.php"); ?>
				<?php include_once("../php/TemplateGaleria1.php"); ?>
				<?php include_once("../php/TemplateCta1.php"); ?>
				<?php include_once("../php/TemplateMap1.php"); ?>
				<?php include_once("../php/TemplateFooter1.php"); ?>
				<?php include_once("../php/TemplateDisclaimer1.php"); ?>
			</main>
			<div id="template-colors" style="display: none;">
				<div class="template-color" id="color-orange">
					<h1>Naranja</h1>
					<p>#FA9900</p>
					<p>#000000</p>
					<p>#FFFFFF</p>
				</div>
				<div class="template-color" id="color-yellow">
					<h1>Amarillo</h1>
					<p>#FAD400</p>
					<p>#000000</p>
					<p>#FFFFFF</p>
				</div>
				<div class="template-color" id="color-green">
					<h1>Verde</h1>
					<p>#A4BC00</p>
					<p>#000000</p>
					<p>#FFFFFF</p>
				</div>
			</div>
		</div>	
	</body>
</html>