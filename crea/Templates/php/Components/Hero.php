<section id="hero">
	<div class="wrapper">
		<div id='img-hero' class="img <?php echo(getImgClasses($content->hero[0]->img[0])); ?>" style="background-image: url(<?php echo($content->hero[0]->img[0]); ?>);"></div>
		<div class="wrapper-content">
			
				<div id="branding">
					<img id="img-logo" src="<?php echo $content->hero[0]->logotipo ? $content->hero[0]->logotipo : ''; ?>" alt="Logotipo" />
				</div>	
			
			<h1 id="val-content-name"><?php echo($content->hero[0]->title); ?></h1>
			<h3 id="val-content-slogan"><?php echo($content->hero[0]->slogan); ?></h3>
			<?php if ($content->hero[0]->button != "") : ?>
				<!-- <div class="seemore">
					<a href="#">
						<span><?php echo($content->hero[0]->button); ?></span>
						<span>&darr;</span>
					</a>
				</div> -->
			<?php endif ?>
		</div>
	</div>
</section>	