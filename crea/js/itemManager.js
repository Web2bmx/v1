export default function itemManager () {
	var _ctrl = null;
	var _number_of_items = 0;
	var _type_of_item = 0;
	var _current_step = 0;
	var init = function(_that) {
		_ctrl = _that;
	};
    var setItems = function() {
		/*FIRES AFTER TEMPLATE IS LOADED*/
		switch (_ctrl.sessionStatus) {
			case "START SESSION" :
				_number_of_items = $("#template .item").length;
				_ctrl.jd.selections["inp-content-items-number"] = { "name": "items-number", "type": "text", "text":_number_of_items };
				_ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
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
			let $i_t = $(".item-control:eq(0)").clone();
			//$(".add-item-control").before($i_t);
			$(".item-control:last").after($i_t);
			/*UPDATES CONTROL META DATA*/
			$i_t.find(".content-item-number").html(k);
			$i_t.find("input[type=text]").attr({
				"id" : ("inp-content-title-item-" + k),
				"name" : ("inp-content-title-item-" + k)
			}).val("");
			$i_t.find("textarea").attr({
				"id" : ("inp-content-item-" + k),
				"name" : ("inp-content-item-" + k)
			}).val("");
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
		/****************************************** */
	};
    var addItem = function(v) {
		if (v < _number_of_items) {
			$(".item-control:last").remove();
			$("#template .items:last .item").remove();
			if($("#template .items:last .item").length == 0) { $("#template .items:last").remove(); }
		}
		if (v > _number_of_items) {
			addItemControl(_number_of_items);
			addItemToTemplate(v);
		}
		_number_of_items = v;
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
	var setContentType = function() { 
		if (!_ctrl.jd.selections["inp-content-item-type"]) {
			_type_of_item = $("input[name='inp-content-item-type']:checked"). val();
			_ctrl.jd.selections["inp-content-item-type"] = { "name": "items-type", "type": "text", "text":_type_of_item };
		} else {
			switch (_ctrl.sessionStatus) {
				case "RESUME SESSION" :
					_type_of_item = _ctrl.jd.selections["inp-content-item-type"].text;
					$("input[name='inp-content-item-type'][value='" + _type_of_item + "']").prop("checked", "checked");
					break;
				case "UPDATE SESSION" :
					_type_of_item = $("input[name='inp-content-item-type']:checked").val();
					_ctrl.jd.selections["inp-content-item-type"].text = _type_of_item;
					break;
			}
			$("#content-item-type label").removeClass("checked");
			$("input[name='inp-content-item-type']:checked").parent().addClass("checked");
		}
		
		let v = $("input[name='inp-content-item-type']:checked").attr("id");
		let m = "";
		switch (v) {
			case 'inp-content-item-type-1' : m = "producto"; break;
			case 'inp-content-item-type-2' : m = "servicio"; break;
			case 'inp-content-item-type-3' : m = "producto o servicio"; break;
		}
		$(".content-item-type").html(m);
	 };
	var getCurrentStep = function() { return _current_step; };
	return {
		init : init,
		setItems : setItems,
		addItem : addItem,
		setContentType : setContentType,
        getCurrentStep : getCurrentStep
	};
}