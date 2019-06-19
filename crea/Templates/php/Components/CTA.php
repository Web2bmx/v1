<section id="cta">
	<div class="wrapper">
		<?php if ($content->cta[0]->img[0] != "") : ?>
			<div id="img-cta" class="img <?php echo(getImgClasses($content->cta[0]->img[0])); ?>" style="background-image: url(<?php echo($content->cta[0]->img[0]); ?>);"></div>
		<?php endif; ?>
		<div class="wrapper-content">
			<h2 id="val-content-title-cta"><?php echo($content->cta[0]->title); ?></h2>
			<p id="val-content-cta"><?php echo($content->cta[0]->text); ?></p>
			<ul>
				<li>
					<a href="<?php echo($content->cta[0]->links[0]->link[0]->url); ?>">
						<?php echo($content->cta[0]->links[0]->link[0]->text); ?>
					</a>
				</li>
			</ul>
		</div>
	</div>	
</section>