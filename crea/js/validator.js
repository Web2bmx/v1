export default function validator () {
	var _ctrl = null;
    var init = function(_that) {
        _ctrl = _that;
    }
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
	var translateData = function(text){
		$.get("https://translate.yandex.net/api/v1.5/tr.json/translate",
			{
				key: 'trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2',
				lang: 'es-en',
				text: text,
				format: 'plain'
			}
		  ).done(function(data) {
			if(data){
				_ctrl.new_imageManager.setImageSelection(decodeURIComponent(data.text[0]));
				_ctrl.new_templateManager.updateContent();
			}
		  });	
	};	
    return {
		init : init,
        isValidinput : isValidinput,
        isEmail : isEmail,
        isValidDomain : isValidDomain,
		validPassword : validPassword,
		translateData : translateData
    };
}