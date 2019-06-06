<section id="items">
    <div class="wrapper">
        <header>
            <h2><?php echo($content->items[0]->header[0]->title); ?></h2>
            <p><?php echo($content->items[0]->header[0]->text); ?></p>
        </header>
        <?php 
            $key = 1;
            foreach($content->items[0]->row as $row) {
                $row_class = "";
                switch (count($row->item) % 3) {
                    case 1 : $row_class = "one"; break;
                    case 2 : $row_class = "two"; break;
                    case 0 : $row_class = "three"; break;
                }
        ?>
            <div class="items <?php echo($row_class); ?>">
                <?php for ($i = 1; $i <= count($row->item); $i++) { ?>
                    <div class="item">
                        <div id="img-item-<?php echo $key; ?>" class="img <?php echo(getImgClasses($row->item[$i - 1]->img[0])); ?>" style="background-image: url('<?php echo($row->item[$i - 1]->img[0]); ?>')"></div>
                        <div class="wrapper-content">
                            <h3 id="val-content-title-item-<?php echo $key; ?>"><?php echo($row->item[$i - 1]->title); ?></h3>
                            <p id="val-content-item-<?php echo $key; ?>"><?php echo($row->item[$i - 1]->text); ?></p>
                            <span id="val-precio-item-<?php echo $key; ?>"><?php echo($row->item[$i - 1]->precio); ?></span>
                        </div>
                    </div>
                <?php 
                    $key++;
                    }
                ?>
            </div>
        <?php  
            }
        ?>
    </div>
</section>