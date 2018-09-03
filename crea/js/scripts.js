import creator from "./creator";

var new_template = new creator();
new_template.validation();
$(document).ready(function() {	
	new_template.init();
});