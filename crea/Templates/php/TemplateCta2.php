<div class="cta-cont">
	<div class="cta">
		<?php if ($content->cta[0]->img[0] != "") : ?>
			<div id="img-cta" class="img-cont <?php echo(getImgClasses($content->cta[0]->img[0])); ?>" style="background-image: url(<?php echo($content->cta[0]->img[0]); ?>);"></div>
		<?php endif; ?>
		<div class="cta-content">
			<p id="val-content-cta"><?php echo($content->cta[0]->text); ?></p>
			<h2 id="val-content-title-cta"><?php echo($content->cta[0]->title); ?></h2>
		</div>
	</div>	
</div>