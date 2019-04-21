<section id="hero">
	<div class="wrapper">
		<div class="img <?php echo(getImgClasses($content->hero[0]->img[0])); ?>" style="background-image: url(<?php echo($content->hero[0]->img[0]); ?>);"></div>
		<div class="wrapper-content">
			<?php if ($content->hero[0]->logotipo != "") : ?>
				<div id="branding">
					<img id="val-image-logotipo" src="<?php echo($content->hero[0]->logotipo); ?>" alt="Logotipo" />
				</div>	
			<?php endif; ?>
			<h1 id="val-content-name"><?php echo($content->hero[0]->title); ?></h1>
			<h3 id="val-content-slogan"><?php echo($content->hero[0]->slogan); ?></h3>
			<?php if ($content->hero[0]->button != "") : ?>
				<div class="seemore">
					<a href="#">
						<span><?php echo($content->hero[0]->button); ?></span>
						<span>&darr;</span>
					</a>
				</div>
			<?php endif ?>
		</div>
	</div>
</section>	