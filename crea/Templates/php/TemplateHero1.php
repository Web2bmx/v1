<div id="hero">
	<div id="img-hero" class="img-cont <?php echo(getImgClasses($content->hero[0]->img[0])); ?>" style="background-image: url(<?php echo($content->hero[0]->img[0]); ?>);"></div>
	<div id="hero-content">
		<?php if ($content->hero[0]->logotipo != "") : ?>
			<img id="val-image-logotipo" src="<?php echo($content->hero[0]->logotipo); ?>" alt="Logotipo" />
		<?php endif; ?>
		<h1 id="val-content-name"><?php echo($content->hero[0]->title); ?></h1>
		<h2 id="val-content-slogan"><?php echo($content->hero[0]->slogan); ?></h2>
	</div>
</div>