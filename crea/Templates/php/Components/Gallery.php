<section id="gallery">
    <div class="wrapper"> 
        <header>
            <h2><?php echo($content->gallery[0]->header[0]->title); ?></h2>
            <p><?php echo($content->gallery[0]->header[0]->text); ?></p>
        </header>
        <div class="gallery">
            <?php for ($i = 0; $i < count($content->gallery->images[0]->img); $i ++) : ?>
                <div class="img <?php echo(getImgClasses($content->gallery->images[0]->img[$i])); ?>" style="background-image: url(<?php echo($content->gallery->images[0]->img[$i]); ?>);"></div>
            <?php endfor; ?>
        </div>
    </div>
</section>