export default function colorManager () {
	var _ctrl = null;
	var _color_hex = '#666666';
	var _palettes = {
		light : 'Luminoso',
		dark : 'Oscuro',
		grey : 'Monocromático',
		impact : 'Impactante',
		colorful : 'Colorido'
	};
	var _palette = 'impact';
	var init = function(_that) {
		_ctrl = _that;
		setPalettes();
	};
	var setPalettes = function() {
		for (let k in _palettes) {
			var $control_color = $('.template.control-color').clone().removeClass('template');
			$control_color.find('h4').html(_palettes[k]);
			$control_color.find('input').attr('id', ('inp-palette-' + k));
			$control_color.find('input').attr('value', k);
			$control_color.find('.control-color-thumb').attr('id', ('thumb-' + k));
			$('#app-control-palettes').append($control_color);
		}
	};
	var updateColor = function(selections, $template) {
		if ((_ctrl.sessionStatus == 'START SESSION') || (_ctrl.sessionStatus == 'RESUME SESSION')) {
			if (selections['color']) {
				_color_hex = selections['color'].text;
			} else {
				selections['color'] = { 'name': 'color', 'type': 'text', 'text':_color_hex };
			}
			$('#inp-color').attr('value', _color_hex);
			if (selections['palette']) {
				_palette = selections['palette'].text;	
			} else {
				selections['palette'] = { 'name': 'palette', 'type': 'text', 'text':_palette };
			}
			$('#thumb-' + _palette).addClass('thumb-selected');
			$('#inp-palette-' + _palette).attr('checked', 'checked');
		} 
		if (_ctrl.sessionStatus == 'UPDATE SESSION') {
			_palette = $('[name=\'inp-palette\']:checked').val();
			selections['palette'].text = _palette;
			_color_hex = ($('#inp-color').val());
			selections['color'].text = _color_hex;
		}
		let id = $('[name^=\'inp-design\']:checked').val().replace('inp-design-', '') * 1;
		let url = 'Templates/php/color/style.php?t=' + id + '&hex=' + _color_hex.replace('#', '');
		$('#style-color').html('').load(url);
		/* */
		$template.attr('class', ('color-' + _palette));
	};
	return {
		init : init,
		updateColor : updateColor
	};
}