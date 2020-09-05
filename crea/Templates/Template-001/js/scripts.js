$(document).ready(function() {
	/*Gallery*/
	var c_gallery_count = 0;
	var $c_gallery_images = $('.gallery div.img');
	var $c_gallery_control = $('.gallery-nav');
	$c_gallery_images.filter(':not(:eq(' + c_gallery_count + '))').hide();
	$c_gallery_control.show();
	$('.gallery').addClass('gallery_slider');
	$('body').on('click', '.gallery-nav>a', function() {
		var b = $(this).hasClass('gallery-nav-next') ? 'next' : 'prev';
		change_gallery_item(b);
	});
	var change_gallery_item = function(b) {
		if (b == 'prev') {
			c_gallery_count --;
			if (c_gallery_count == -1) { c_gallery_count = ($('.gallery div.img').length - 1); }
		}
		if (b == 'next') {
			c_gallery_count ++;
			if (c_gallery_count == $('.gallery div.img').length) { c_gallery_count = 0; }
		}
		$('.gallery div.img').filter(':not(:eq(' + c_gallery_count + '))').hide();
		$('.gallery div.img').filter(':eq(' + c_gallery_count + ')').show();
	};
	/*Gallery*/
});