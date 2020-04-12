<?php 
	$template_name = 'Template-003';
	include_once("../php/Master.php"); 
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Template 003</title>
		<meta name="description" content="Template 003">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<meta name="author" content="Web2b">
		<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/regular.css" integrity="sha384-ZlNfXjxAqKFWCwMwQFGhmMh3i89dWDnaFU2/VZg9CvsMGA7hXHQsPIqS+JIAmgEq" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/brands.css" integrity="sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
		<link rel="stylesheet" href="css/dynamic.php?hex=<?php echo($_GET['hex']); ?>&c=<?php echo($_GET['c']); ?>">
	</head>
	<body>
		<div id="template" <?php if (isset($_GET["c"])) { echo('class="color-' . $_GET["c"] . '"'); } ?>>
			<link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,400i,700|Montserrat:400,400i,700" rel="stylesheet">
			<link rel="stylesheet" href="css/styles.css?v=1.0">
			<div id="style"></div>
			<main>
				<?php include_once("../php/Components/Menu.php"); ?>
				<?php include_once("../php/Components/Hero.php"); ?>
				<?php include_once("../php/Components/Aboutus.php"); ?>	
				<?php include_once("../php/Components/CTA.php"); ?>
				<?php include_once("../php/Components/Items.php"); ?>	
				<?php include_once("../php/Components/Map.php"); ?>	
				<?php include_once("../php/Components/Gallery.php"); ?>	
				<?php include_once("../php/Components/Footer.php"); ?>
				<?php include_once("../php/Components/Disclaimer.php"); ?>
			</main>
			<div id="template-colors" style="display: none;">
				<div class="template-color" id="color-orange">
					<h1>Naranja</h1>
					<p>rgba(240, 170, 0, 1)</p>
					<p>rgba(0,0,0,1)</p>
					<p>rgba(255,255,255,1)</p>
				</div>
				<div class="template-color" id="color-yellow">
					<h1>Amarillo</h1>
					<p>rgba(255, 230, 0, 1)</p>
					<p>rgba(0,0,0,1)</p>
					<p>rgba(255,255,255,1)</p>
				</div>
				<div class="template-color" id="color-green">
					<h1>Verde</h1>
					<p>rgba(76, 190, 116, 1)</p>
					<p>rgba(40, 55, 75, 1)</p>
					<p>rgba(255,255,255,1)</p>
				</div>
			</div>
		</div>	
	</body>
</html>