<div id="hero">
	<div id="img-hero" class="img-cont img-L img-MC" style="background-image: url(<?php echo($content->hero[0]->img[0]); ?>);"></div>
	<div id="hero-content">
		<?php if ($content->hero[0]->logotipo != "") : ?>
			<img id="val-image-logotipo" src="<?php echo($content->hero[0]->logotipo); ?>" alt="Logotipo" />
		<?php endif; ?>
		<h1 id="val-content-name"><?php echo($content->hero[0]->name); ?></h1>
		<h5 id="val-content-slogan"><?php echo($content->hero[0]->slogan); ?></h5>
		<div class="seemore">
			<a href="#">
				<h5>ENTRA</h5>
			</a>
		</div>
	</div>
</div>