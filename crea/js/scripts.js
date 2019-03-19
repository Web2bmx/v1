import creator from "./creator";
var new_creator = new creator();
new_creator.validation();
$(document).ready(function() {	
	new_creator.init();
});