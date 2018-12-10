export default function colorManager () {
    var $palettes = null;
    var palette_id = 0;
    var getPalettes = function () {
        return $palettes;
    }
    var loadColors = function () {
        $.ajax({
		    url: "xml/sample_colors.xml",
			dataType: "xml",
			success: (data) => {
				let $xml; 
				$xml =$(data);
				$palettes = $xml.find("palette");
				setColors();
			}
        });
    }
    var setColors = function() {
		let t = $palettes.length;
		for (let i = 0; i < $palettes.length; i++) {
			var $control_color = $(".template.control-color").clone();
			var $palette = $palettes.filter(":eq(" + i + ")");
			$control_color.removeClass("template");
			$control_color.find("h4").html($palette.find("name").html());
			$control_color.find("input").attr("id", ("inp-palette-" + i));
			$control_color.find("input").attr("value", i);
			$control_color.find(".control-color-thumb").css({ "background-color" : $palette.find("bg>back").html() });
			var blocks = ["top", "middle", "bottom"];
			for (let k = 0; k < 3; k++) {
				$control_color.find(".control-color-thumb-bg:eq(" + k + ")").css({ "background-color" : $palette.find(blocks[k] + ">back").html() });
				$control_color.find(".control-color-thumb-content:eq(" + k + ")").css({ "background-color" : $palette.find(blocks[k] + ">fore").html() });
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
        var $palette = $palettes.filter(":eq(" + palette_id + ")");
		var c1 = $palette.find("top>back").html();
		var col_hero_content = HexColorToRGBA(c1, 0.6);
		var c2 = $palette.find("middle>back").html();
		var col_items = HexColorToRGBA(c2, 0.6);
		$template.css({
			"background-color" : $palette.find("bg>back").html()
		});
		$template.find("#hero").css({
			"background-color" : $palette.find("top>back").html(),
			"color" : $palette.find("top>fore").html()
		});
		$template.find("#hero-content").css({
			"background-color" : $palette.find("top>back").html(),
			"color" : $palette.find("top>fore").html()
		});
		$template.find("#hero-content h1, #hero-content h2").css({
			"color" : $palette.find("top>fore").html()
		});
		$template.find(".items").css({
			"background-color" : "transparent",
			"color" : $palette.find("middle>fore").html()
		});
		$template.find(".items .item-content").css({
			"background-color" : $palette.find("middle>back").html(),
			"color" : $palette.find("middle>fore").html()
		});
		$template.find("footer").css({
			"background-color" : $palette.find("bottom>back").html(),
			"color" : $palette.find("bottom>fore").html()
		});
    }
    var HexColorToRGBA = function (c, a) {
		var s = ("rgba(" + parseInt(c.substr(1, 2), 16) + "," + parseInt(c.substr(3, 2), 16) + "," + parseInt(c.substr(5, 2), 16) + ", " + a + ")");
		return s;
	}
    return {
        loadColors : loadColors,
        changeColors : changeColors,
        updateColors : updateColors
    };
}