<?php foreach($content->items[0]->row as $row) : ?>
<?php
	$row_class = "";
	switch (count($row->item)) {
		case 1 : $row_class = "one"; break;
		case 2 : $row_class = "two"; break;
		case 3 : $row_class = "three"; break;
	}
?>
<div class="items <?php echo($row_class); ?>">
	<?php foreach ($row->item as $item) : ?>
	<div class="item">
        <div id="img-item-1" class="img-cont img-MC" style="background-image: url('<?php echo($item->img[0]); ?>')"></div>
		<div class="item-content">
			<h2 id="val-content-title-cta"><?php echo($item->title); ?></h2>
			<p id="val-content-cta"><?php echo($item->text); ?></p>
		</div>
	</div>
	<?php endforeach; ?>
</div>
<?php endforeach; ?>