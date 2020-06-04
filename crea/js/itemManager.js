export default function itemManager () {
	var _ctrl = null;
	var _number_of_items = 0;
	var _current_step = 0;
	var init = function(_that) {
		_ctrl = _that;
	};
    var setItems = function() {
		/*FIRES AFTER TEMPLATE IS LOADED*/
		switch (_ctrl.sessionStatus) {
			case "START SESSION" :
				_number_of_items = $("#template .item").length;
				break;
			case "RESUME SESSION" :
			case "UPDATE SESSION" :
				_number_of_items = _ctrl.jd.selections["inp-content-items-number"].text;
				for (let i = 0; i < _number_of_items; i++) { addItemToTemplate(i); }
				break;
		}
		$("#inp-content-items-number").val(_number_of_items);
		for (let i = 0; i < _number_of_items; i++) { addItemControl(i); }
	};
	var addItemControl = function(i) {
		/*ADDS CONTROL*/
		let k = (i * 1) + 1;
		if (i > 0) {//Item 0 is already included in form
			/*UPDATES STEPS NAV*/
			$("#control-view-index").append(($(".control-view-index-step.current").clone().removeClass("current")));
			/*ADD CONTROL*/
			_current_step = $("#inp-content-item-add-y").closest(".app-control-step").index() - 1;
			let $item_add = $("#inp-content-item-add-y");
			//let step = $(".app-control-step").index($item_add.closest(".app-control-step"));
			let $i_t = $(".app-control-step:eq(" + (_current_step - 1) + ")").clone();
			$item_add.closest(".app-control-step").before($i_t);
			/*UPDATES CONTROL META DATA*/
			$i_t.find("h2:first-child span:eq(0)").html("Tu producto o servicio (" + k + ")");
			$i_t.find("input[type=text]").attr({
				"id" : ("inp-content-title-item-" + k),
				"name" : ("inp-content-title-item-" + k),
				"placeholder" : "Tu producto o servicio"
			}).val("");
			$i_t.find("textarea").attr({
				"id" : ("inp-content-item-" + k),
				"name" : ("inp-content-item-" + k),
				"placeholder" : "Tu producto o servicio"
			}).val("");
			$i_t.find("h2:eq(1)").html("Elige una imagen para tu producto o servicio");
			$i_t.find("#app-control-images-item-" + i).attr("id", ("app-control-images-item-" + k));
			$i_t.find("input").each(function() {
				if($(this).attr("type") != "file" && $(this).attr("type") != "submit"){ $(this).attr("name", ("inp-img-item-" + k)); }
				if($(this).attr("type") == "file"){ $(this).attr("name", ("item-" + k)); }
			});
		}
		/*UPDATES CONTROL DATA*/
		let i_img = _ctrl.jd.selections["#img-item-" + k] ? _ctrl.jd.selections["#img-item-" + k].img : "";
		let i_t = _ctrl.sessionStatus == "START SESSION" ? $("#val-content-title-item-" + k).html() : _ctrl.jd.selections["inp-content-title-item-" + k].text;
		let i_c = _ctrl.sessionStatus == "START SESSION" ? $("#val-content-item-" + k).html() : _ctrl.jd.selections["inp-content-item-" + k].text;
		//img
		$("#inp-content-title-item-" + k).val(i_t);
		$("#inp-content-item-" + k).val(i_c);
		
	};
    var addItem = function() {
		/*SAVES NEWLY ADDED ITEM TO COUNT*/
		addItemControl(_number_of_items);
		addItemToTemplate(_number_of_items);
		_number_of_items = (_number_of_items * 1) + 1;
		$("#inp-content-items-number").val(_number_of_items);
		/*RESETS ADD ITEM CONTROL*/
		$("#inp-content-item-add-y").prop('checked', false);
		$("#inp-content-item-add-n").trigger("click");
		$("#app-control").trigger("itemWasAdded");
		
	};
    var addItemToTemplate = function (i) {
		let items_in_template = $("#template .item").length;
		if (i >= items_in_template) {
			if ($("#template .items:last .item").length == 3) { $("#template .items:last").after("<div class='items'></div>"); }
			var $item_copy = $("#template .item:last").clone();
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
		}
	};
	var getCurrentStep = function() { return _current_step; };
	return {
		init : init,
		setItems : setItems,
		addItem : addItem,
        getCurrentStep : getCurrentStep
	};
}