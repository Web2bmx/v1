<?php foreach($content->items[0]->row as $row) : ?>
<?php
	$row_class = "";
	switch (count($row->item)) {
		case 1 : $row_class = "one"; break;
		case 2 : $row_class = "two"; break;
		case 3 : $row_class = "three"; break;
	}
?>
<div class="items-cont">
    <div class="items-header">
        <h2><?php echo($content->items[0]->header[0]->title); ?></h2>
        <p><?php echo($content->items[0]->header[0]->text); ?></p>
    </div>
    <div class="items <?php echo($row_class); ?>">
        <?php for ($i = 1; $i <= count($row->item); $i++) : ?>
        <div class="item">
            <div id="img-item-1" class="img-cont img-MC" style="background-image: url('<?php echo($row->item[$i - 1]->img[0]); ?>')"></div>
            <div class="item-content">
                <h2 id="val-content-title-item-1"><?php echo($row->item[$i - 1]->title); ?></h2>
                <p id="val-content-item-1"><?php echo($row->item[$i - 1]->text); ?></p>
            </div>
        </div>
        <?php endfor; ?>
    </div>
    <?php endforeach; ?>
</div>