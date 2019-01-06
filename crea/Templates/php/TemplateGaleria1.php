<?php if (($content->galeria) && (count($content->galeria->images[0]->img) > 0)) : ?>
    <div class="galeria-cont">
        <div class="galeria-header">
            <h3><?php echo($content->galeria[0]->header[0]->title); ?></h3>
            <p><?php echo($content->galeria[0]->header[0]->text); ?></p>
        </div>
        <div class="galeria">
            <?php for ($i = 0; $i < count($content->galeria->images[0]->img); $i ++) : ?>
                <div class="galeria-img-cont <?php echo(getImgClasses($content->galeria->images[0]->img[$i])); ?>"><img src="<?php echo($content->galeria->images[0]->img[$i]); ?>" /></div>
            <?php endfor; ?>
        </div>
    </div>
<?php endif; ?>