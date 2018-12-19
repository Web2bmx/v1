<div class="aboutus-cont">
	<div class="aboutus">
		<?php if ($content->aboutus[0]->img[0] != "") : ?>
			<div id="img-aboutus" class="img-cont img-L img-MC" style="background-image: url(<?php echo($content->aboutus[0]->img[0]); ?>);"></div>
		<?php endif; ?>
		<div class="aboutus-content">
			<h2 id="val-content-title-aboutus"><?php echo($content->aboutus[0]->title); ?></h2>
			<p id="val-content-aboutus"><?php echo($content->aboutus[0]->text); ?></p>
		</div>
	</div>
</div>