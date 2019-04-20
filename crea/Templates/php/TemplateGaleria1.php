<?php if (($content->gallery) && (count($content->gallery->images[0]->img) > 0)) : ?>
    <div class="galeria-cont">
        <div class="galeria-header">
            <h3><?php echo($content->gallery[0]->header[0]->title); ?></h3>
            <p><?php echo($content->gallery[0]->header[0]->text); ?></p>
        </div>
        <div class="galeria">
            <?php for ($i = 0; $i < count($content->gallery->images[0]->img); $i ++) : ?>
                <div class="galeria-img-cont <?php echo(getImgClasses($content->gallery->images[0]->img[$i])); ?>"><img src="<?php echo($content->gallery->images[0]->img[$i]); ?>" /></div>
            <?php endfor; ?>
        </div>
    </div>
<?php endif; ?>