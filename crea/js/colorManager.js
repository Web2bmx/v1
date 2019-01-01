export default function colorManager () {
	var _this = null;
	var $palettes = null;
	var palette_id = 0;
	var init = function(_that) {
		_this = _that;
	}
	var getTemplateId = function() {
		console.log(_this.template_id)
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
		let t = $palettes.length;
		for (let i = 0; i < $palettes.length; i++) {
			var $control_color = $(".template.control-color").clone();
			var $palette = $palettes.filter(":eq(" + i + ")");
			$control_color.removeClass("template");
			$control_color.find("h4").html($palette.find("h1").html());
			$control_color.find("input").attr("id", ("inp-palette-" + i));
			$control_color.find("input").attr("value", i);
			//$control_color.find(".control-color-thumb").css({ "background-color" : $palette.find("p:eq(0)").html() });
			for (let k = 0; k < 3; k++) {
				$control_color.find(".control-color-thumb-bg:eq(" + k + ")").css({ "background-color" : $palette.find("p:eq(" + k + ")").html() });
			}
			$("#app-control-palettes").append($control_color);
		}
		$(".control-color-thumb").on('click', function() {
			let $this = $(this);
			$this.closest("#app-control-palettes").find(".control-color-thumb").removeClass("thumb-selected");
			$this.next("input").trigger("click");
			$this.addClass("thumb-selected");
		});
    }
    var changeColors = function(selections) {
        if ($("[name='inp-palette']:checked").length == 0) {
			if (selections["palette"]) {
				palette_id = selections["palette"].value;
			} else {
				selections["palette"] = { "name": "palette", "type": "id", "value":"0" };
				palette_id = selections["palette"].value;
			}
			$(".control-color-thumb:eq(" + palette_id + ")").addClass("thumb-selected");
			$("[name='inp-palette']:eq(" + palette_id + ")").attr("checked", "checked");
		} else {
			palette_id = $("[name='inp-palette']:checked").val();
			selections["palette"].value = palette_id;
        }
		return palette_id;
	}
    var updateColors = function($template) {
        $template.attr("class", $palettes.filter(":eq(" + palette_id + ")").attr("id"));
    }
    var HexColorToRGBA = function (c, a) {
		var s = ("rgba(" + parseInt(c.substr(1, 2), 16) + "," + parseInt(c.substr(3, 2), 16) + "," + parseInt(c.substr(5, 2), 16) + ", " + a + ")");
		return s;
	}
    return {
		init : init,
		loadColors : loadColors,
        changeColors : changeColors,
        updateColors : updateColors
    };
}