export default function validator () {
	var _ctrl = null;
    var init = function(_that) {
        _ctrl = _that;
    };
	var isValidinput = function(element){
		let value = element.val();
		let regex = new RegExp(element.attr("pattern"));
		return regex.test(value);
	};
	var isEmail = function(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	};
	var isValidDomain = function(name) {
		var regex = /([a-z0-9])/;
		return regex.test(name);
	};
	var validPassword = function(password) {
		var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,}$/;
		return regex.test(password);
	};
	return {
		init : init,
        isValidinput : isValidinput,
        isEmail : isEmail,
        isValidDomain : isValidDomain,
		validPassword : validPassword
	};
}