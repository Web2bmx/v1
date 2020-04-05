export default function colorManager () {
	var _ctrl = null;
	var _c_h = 120;
	var _c_s = 50;
	var _c_b = 50;
	var color_id = "#000000";
	var $palettes = null;
	var $paletas = ["light","dark","grey","impact","colorful"];
	var $paletas_loc = ["Luminoso","Oscuro","Monocromático","Impactante","Colorido"];
	var palette_id = 0;
	var init = function(_that) {
		_ctrl = _that;
	}
	var getPalettes = function () {
        return $palettes;
    }
	var loadColors = function ($template) {
        $palettes = $template.find(".template-color");
		setColors();
    }
    var setColors = function() {
		
		$("#app-control-palettes").find(">*").remove().detach();
		let t = $paletas.length;
		for (let i = 0; i < $paletas.length; i++) {
			var $control_color = $(".template.control-color").clone();
			$control_color.removeClass("template");
			$control_color.find("h4").html($paletas_loc[i]);
			$control_color.find("input").attr("id", ("inp-palette-" + i));
			$control_color.find("input").attr("value", (i + "_" + _c_h + "_" + _c_s + "_" + _c_b));
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
				color_id = selections["color"].text;
			} else {
				selections["color"] = { "name": "color", "type": "text", "value":"#ADADAD" };
				color_id = selections["color"].text;
			}
			$("#inp-color").attr("value", color_id);
			modifyColors();
			setColors();

			if (selections["palette"]) {
				palette_id = selections["palette"].value;
			} else {
				selections["palette"] = { "name": "palette", "type": "id", "value":"0" };
				palette_id = selections["palette"].value;
			}
			

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
	var getColors = function() {
		var a = [_c_h, _c_s, _c_b];
		return a;
	}
	var modifyColors = function() {
		let computedH = 0;
		let computedS = 0;
		let computedV = 0;
		let original = ($("#inp-color").val());
		let r = parseInt(Number("0x" + original.substr(1,2)), 10)/255;
		let g = parseInt(Number("0x" + original.substr(3,2)), 10)/255;
		let b = parseInt(Number("0x" + original.substr(5,2)), 10)/255;
 		var minRGB = Math.min(r,Math.min(g,b));
 		var maxRGB = Math.max(r,Math.max(g,b));
		computedV = (minRGB==maxRGB) ? minRGB : Math.round(maxRGB * 100);
  		var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
		var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
		computedH = Math.round(60*(h - d/(maxRGB - minRGB)));
		computedS = Math.round(((maxRGB - minRGB)/maxRGB) * 100);
		_c_h = computedH;
		_c_s = computedS;
		_c_b = computedV;

		
		let id = $("[name^='inp-design']:checked").val();
		id = id.replace("inp-design-", "");
		id = id * 1;
		let url = "Templates/php/style.php?t=" + id + "&h=" + _c_h + "&b=" + _c_b + "&s=" + _c_s;
		$("#style>style").html("").load(url);
	}
    var updateColors = function($template) {
		$template.attr("class", ("color-" + $paletas[palette_id]));
    }
    var HexColorToRGBA = function (c, a) {
		var s = ("rgba(" + parseInt(c.substr(1, 2), 16) + "," + parseInt(c.substr(3, 2), 16) + "," + parseInt(c.substr(5, 2), 16) + ", " + a + ")");
		return s;
	}
    return {
		init : init,
		loadColors : loadColors,
        changeColors : changeColors,
		getColors : getColors,
		modifyColors : modifyColors,
        updateColors : updateColors
    };
}