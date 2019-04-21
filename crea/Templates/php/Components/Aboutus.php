<section id="aboutus">
	<div class="wrapper">
		<?php if ($content->aboutus[0]->img[0] != "") : ?>
			<div class="img <?php echo(getImgClasses($content->aboutus[0]->img[0])); ?>" style="background-image: url(<?php echo($content->aboutus[0]->img[0]); ?>);"></div>
		<?php endif; ?>
		<div class="wrapper-content">
			<h2 id="val-content-title-aboutus"><?php echo($content->aboutus[0]->title); ?></h2>
			<p id="val-content-aboutus"><?php echo($content->aboutus[0]->text); ?></p>
		</div>
	</div>
</section>