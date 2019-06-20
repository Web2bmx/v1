export default function itemManager () {
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
		$("#control-view-index").prepend(($(".control-view-index-item.current").clone().removeClass("current")));
		if (addItem) {
			addItems(number_of_items);
			_ctrl.new_dataManager.saveSelected(_ctrl.jd,"products",number_of_items + 1,"text");
		}
		number_of_items ++;
		var $i_t = $(".app-control-step:eq(" + (current_step - 1) + ")").clone();
		$i_t.find("h2:eq(0)").html("Tu producto o servicio (" + number_of_items + ")");
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
		if(_ctrl.jd && _ctrl.jd.selections && _ctrl.jd.selections.products) {
			number_of_items = _ctrl.jd.selections.products.text;
		}
        return number_of_items;
    };
    var getIndex = function() {
        return index;
	};
	var checkItemsNumber = function() {
		let actual_in_navigation = $("#app-control .product").length;
		if(_ctrl.jd && 
			_ctrl.jd.selections &&
			_ctrl.jd.selections.products){

				if(actual_in_navigation < _ctrl.jd.selections.products.text) {
					let jd_items = _ctrl.jd.selections.products.text;
					let difference = jd_items - actual_in_navigation;
					for(let i = 0; i< difference; i++) {
						includeProduct(false);
					}
					_ctrl.new_appManager.goToStep(0);
				}

			} else {
				var items_in_template = $("#template .item").length;
				if(actual_in_navigation < items_in_template) {
					let difference = items_in_template - actual_in_navigation;
					for(let i = 0; i< difference; i++) {
						includeProduct(false);
					}
					_ctrl.new_appManager.goToStep(0);
				}				
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,"products",items_in_template,"text");
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