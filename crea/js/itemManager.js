export default function itemManager () {
	var _ctrl = null;
	var _number_of_items = 0;
	var _type_of_item = 0;
	var _current_step = 0;
	var $item = null;
	var init = function(_that) {
		_ctrl = _that;
	};
    var setItems = function() {
		/*FIRES AFTER TEMPLATE IS LOADED*/
		$item = $("#template .item:last").clone();
		$("#template .items").remove().detach();
		switch (_ctrl.sessionStatus) {
			case "START SESSION" :
				_ctrl.jd.selections["inp-content-items-number"] = { "name": "items-number", "type": "text", "text":_number_of_items };
				_ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
				break;
			case "RESUME SESSION" :
				_number_of_items = (_ctrl.jd.selections["inp-content-items-number"].text && _ctrl.jd.selections["inp-content-items-number"].text != "") ?  
				parseInt(_ctrl.jd.selections["inp-content-items-number"].text) : 0;
				$("#inp-content-items-number").val(_number_of_items);
				for (let i = 0; i < _number_of_items; i++) {
					addItemControl(i);
					addItemToTemplate(i + 1);
				}
				break;
		}
	};
	var addItemControl = function(i) {
		console.log("addItemControl");
		/*ADDS CONTROL*/
		let k = (i * 1) + 1;
		let $i_t = $(".item-control:last").clone();
		$("#items-control").append($i_t);
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
		$i_t.find(".app-control-images>div:eq(0)").attr("id", ("app-control-images-item-" + k));
		$i_t.find("input").each(function() {
			if($(this).attr("type") != "file" && $(this).attr("type") != "submit"){ $(this).attr("name", ("inp-img-item-" + k)); }
			if($(this).attr("type") == "file"){ $(this).attr("name", ("item-" + k)); }
		});
	};
    var addItem = function(v) {
		console.log("addItem + " + v);
		if (v < _number_of_items) {
			$(".item-control:last").remove();
			$("#template .items:last .item:last").remove();
			if($("#template .items:last .item").length == 0) { $("#template .items:last").remove(); }
			$("#template .items:last").removeClass("one two three");
			$("#template .items:last").addClass(getClassSize());
		}
		if (v > _number_of_items) {
			addItemControl(_number_of_items);
			addItemToTemplate(v);
		}
		_number_of_items = v;
	};
    var addItemToTemplate = function (i) {
		console.log("addItemToTemplate + " + i);
		let items_in_template = $("#template .item").length;
		if (i >= items_in_template) {
			if ($("#template .items:last .item").length == 3) { $("#template .items:last").after("<div class='items'></div>"); }
			if ($("#template .items").length == 0) { $("#template #items header").after("<div class='items'></div>"); }
			let $item_copy = $item.clone();
			$item_copy.find(".img:eq(0)").attr("id", ("img-item-" + (i)));
			$item_copy.find("h3:eq(0)").attr("id", ("val-content-title-item-" + (i)));
			$item_copy.find("p:eq(0)").attr("id", ("val-content-item-" + (i)));
			$("#template .items:last").append($item_copy);
			$("#template .items:last").attr("class", "items").addClass(getClassSize());
		}
	};
	var getClassSize = () => {
		switch ($("#template .items:last .item").length % 3) {
			case 0 : return "three";
			case 1 : return "one";
			case 2 : return "two";
		}
	};
	var setContentType = function() { 
		console.log("setContentType");
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
		let p = "";
		switch (v) {
			case 'inp-content-item-type-1' : 
				m = "producto";
				p = "productos";
				break;
			case 'inp-content-item-type-2' : 
				m = "servicio"; 
				p = "servicios"; 
				break;
			case 'inp-content-item-type-3' : 
				m = "producto o servicio"; 
				p = "productos o servicios"; 
				break;
		}
		$(".content-item-type").html(m);
		$(".content-items-type").html(p);
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