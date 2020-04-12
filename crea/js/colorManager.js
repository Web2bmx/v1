export default function colorManager () {
	var _ctrl = null;
	var _color_hex = "#000000";
	var $paletas = ["light","dark","grey","impact","colorful"];
	var $paletas_loc = ["Luminoso","Oscuro","Monocromático","Impactante","Colorido"];
	var palette_id = 0;
	var init = function(_that) {
		_ctrl = _that;
	}
	var setColors = function() {
		$("#app-control-palettes").find(">*").remove().detach();
		let t = $paletas.length;
		for (let i = 0; i < $paletas.length; i++) {
			var $control_color = $(".template.control-color").clone();
			$control_color.removeClass("template");
			$control_color.find("h4").html($paletas_loc[i]);
			$control_color.find("input").attr("id", ("inp-palette-" + i));
			$control_color.find("input").attr("value", (i + "_" + _color_hex.replace("#", "")));
			$control_color.find(".control-color-thumb").attr("id", ("thumb-" + $paletas[i]));
			for (let k = 0; k < 3; k++) {
				$control_color.find(".control-color-thumb-bg:eq(" + k + ")");
			}
			$("#app-control-palettes").append($control_color);
		}
		$("body").on('click', ".control-color-thumb", function() {
			let $this = $(this);
			$this.closest("#app-control-palettes").find(".control-color-thumb").removeClass("thumb-selected");
			$this.next("input").trigger("click");
			$this.addClass("thumb-selected");
		});
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
			setColors();
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
    var updateColors = function($template) {
		$template.attr("class", ("color-" + $paletas[palette_id]));
    }
    return {
		init : init,
		setColors : setColors,
        changeColors : changeColors,
		modifyColors : modifyColors,
        updateColors : updateColors
    };
}