export default function utilsManager () { 
	var _ctrl = null;
	var init = function(_that) {
        _ctrl = _that;
    };
    var validateFields = function(element, type = null) {
		if (!$(element).attr('pattern') || _ctrl.new_validator.isValidinput($(element))) {
			$(element).closest(".container-input").removeClass("container-error");
		} else {
			$(element).closest(".container-input").addClass("container-error");
		}
	};
    var fecha_diff = function(fecha) {
		// number of days
		let today = new Date();
		let finArr = fecha.split("-");
		let fin = new Date(Number(finArr[0]), Number(finArr[1]) - 1, Number(finArr[2]));
		let diff;
		if (fin >= today) {
			diff = Math.ceil((Math.abs(today - fin)) / (1000 * 3600 * 24));
		} else {
			diff = 0;
		}
		return diff;	
	};
    return {
        init : init,
        validateFields: validateFields,
        fecha_diff : fecha_diff
    };
}