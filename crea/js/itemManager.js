export default function toolTipManager () {
	var _ctrl = null;
	var number_of_items = 1; /*WORK, number of items should come from jd*/
	var index = 0;
	var init = function(_that) {
		_ctrl = _that;
	};
    var setItems = function() {
		$("#inp-content-item-add-y").on("click", function() {
			includeProduct();
        });
	};
	var includeProduct = function(addItem = true) {
		var current_step = $("#inp-content-item-add-y").closest(".app-control-step").index();
		var $this = $("#inp-content-item-add-y");
		index = $(".app-control-step").index($this.closest(".app-control-step"));
		$("#control-view-index").prepend(($(".control-view-index-item.current").clone().removeClass("current"))).append(($(".control-view-index-item.current").clone().removeClass("current")));
		if (addItem) {
			addItems(number_of_items);
		}
		number_of_items ++;
		var $i_t = $(".app-control-step:eq(" + (current_step - 1) + ")").clone();
		$i_t.find("h2:eq(0)").html("Tu producto o servicio");
		$i_t.find("input[type=text]").attr({
					"id" : ("inp-content-title-item-" + number_of_items),
					"name" : ("inp-content-title-item-" + number_of_items),
					"placeholder" : "Tu producto o servicio"
				}).val("");
		$i_t.find("textarea").attr({
					"id" : ("inp-content-item-" + number_of_items),
					"name" : ("inp-content-item-" + number_of_items),
					"placeholder" : "Tu producto o servicio"
				}).val("");
		$i_t.find("h2:eq(1)").html("Elige una imagen para tu producto o servicio");
		$i_t.find("#app-control-images-item-" + (number_of_items - 1)).attr("id", ("app-control-images-item-" + number_of_items));
		$i_t.find("input").each(function() {
			if($(this).attr("type") != "file" && $(this).attr("type") != "submit"){
				$(this).attr("name", ("inp-img-item-" + number_of_items));
			}
			if($(this).attr("type") == "file"){
				$(this).attr("name", ("item-" + number_of_items));
			}
		});
		$this.closest(".app-control-step").before($i_t);
		$this.prop('checked', false);
		$("#inp-content-item-add-n").trigger("click");
		$("#app-control").trigger("itemWasAdded");
	};
    var addItems = function (i) {
		if ($("#template .items:last .item").length == 3) { $("#template .items:last").after("<div class='items'></div>"); }
		var $item_copy = $(".item:last").clone();
		$item_copy.find("#img-item-" + i).attr("id", ("img-item-" + (i + 1)));
		$item_copy.find("#val-content-title-item-" + i).attr("id", ("val-content-title-item-" + (i + 1)));
		$item_copy.find("#val-content-item-" + i).attr("id", ("val-content-item-" + (i + 1)));
		$("#template .items:last").append($item_copy);
		var c = "";
		switch ($("#template .items:last .item").length % 3) {
			case 0 : c = "three"; break;
			case 1 : c = "one"; break;
			case 2 : c = "two"; break;
		}
		$("#template .items:last").attr("class", "items").addClass(c);
    };
    var getNumberOfItems = function() {
        return number_of_items;
    };
    var getIndex = function() {
        return index;
	};
	var checkItemsNumber = function() {
		let missing = $("#template .item").length -1;
		if(number_of_items < missing) {
			for(let i = 0; i< missing; i++) {
				includeProduct(false);
			}
		}
	};
    return {
		init : init,
		setItems : setItems,
        addItems : addItems,
        getNumberOfItems : getNumberOfItems,
		getIndex : getIndex,
		checkItemsNumber: checkItemsNumber
    };
}