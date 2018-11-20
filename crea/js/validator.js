export default function validator () {
    var isValidinput = function(element){
		let value = element.val();
		let regex = new RegExp(element.attr("pattern"));
		return regex.test(value);
	};
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function isValidDomain(name) {
		var regex = /([a-z0-9])/;
		return regex.test(name);
	}	
	function validPassword(password) {
		var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,}$/;
		return regex.test(password);
	}	
    return {
        isValidinput : isValidinput,
        isEmail : isEmail,
        isValidDomain : isValidDomain,
        validPassword : validPassword
    };
}