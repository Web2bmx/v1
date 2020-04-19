export default function colorManager () {
	var _ctrl = null;
	var _color_hex = "#000000";
	var _paletas = ["light","dark","grey","impact","colorful"];
	var _paletas_loc = ["Luminoso","Oscuro","Monocromático","Impactante","Colorido"];
	var palette_id = 0;
	var init = function(_that) {
		_ctrl = _that;
		setColors();
	}
	var setColors = function() {
		for (let i = 0; i < _paletas.length; i++) {
			var $control_color = $(".template.control-color").clone();
			$control_color.removeClass("template");
			$control_color.find("h4").html(_paletas_loc[i]);
			$control_color.find("input").attr("id", ("inp-palette-" + i));
			$control_color.find("input").attr("value", (i + "_" + _color_hex.replace("#", "")));
			$control_color.find(".control-color-thumb").attr("id", ("thumb-" + _paletas[i]));
			for (let k = 0; k < 3; k++) {
				$control_color.find(".control-color-thumb-bg:eq(" + k + ")");
			}
			$("#app-control-palettes").append($control_color);
		}
	}
	
    var changeColors = function(selections) {
        if ($("[name='inp-palette']:checked").length == 0) {
			if (selections["color"]) {
				_color_hex = selections["color"].text;
			} else {
				selections["color"] = { "name": "color", "type": "text", "value":"#ADADAD" };
				_color_hex = selections["color"].text;
			}
			$("#inp-color").attr("value", _color_hex);
			modifyColors();
			if (!selections["palette"]) {
				selections["palette"] = { "name": "palette", "type": "id", "value":"0" };
			}
			palette_id = selections["palette"].value;
			$(".control-color-thumb:eq(" + palette_id + ")").addClass("thumb-selected");
			$("[name='inp-palette']:eq(" + palette_id + ")").attr("checked", "checked");
		} else {
			let palette_arr = $("[name='inp-palette']:checked").val();
			palette_arr = palette_arr.split("_");
			palette_id = palette_arr[0];
			selections["palette"].value = palette_id;
        }
		return palette_id;
	}
	var modifyColors = function() {
		let original = ($("#inp-color").val());
		let id = $("[name^='inp-design']:checked").val();
		id = id.replace("inp-design-", "");
		id = id * 1;
		let ori = original.replace("#", "");
		let url = "Templates/php/style.php?t=" + id + "&hex=" + ori;
		$("#style").html("<style></style>");
		$("#style>style").load(url);
	}
    var updateTemplatePalette = function($template) {
		$template.attr("class", ("color-" + _paletas[palette_id]));
    }
    return {
		init : init,
		setColors : setColors,
        changeColors : changeColors,
		modifyColors : modifyColors,
        updateTemplatePalette : updateTemplatePalette
    };
}