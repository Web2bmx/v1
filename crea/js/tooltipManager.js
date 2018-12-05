export default function toolTipManager () {    
    var setTooltips = function() {
		$(".app-control-step-tooltip-info").prev("*").append($(".app-control-step-tooltip.template").clone().removeClass("template"));
		$(".app-control-step-tooltip").click(function() {
			var $target = $(this).parent().next(".app-control-step-tooltip-info");
			if ($target.is(":visible")) {
				$target.removeClass("active");
			} else {
				$target.addClass("active");
			}
		});
    }
    return {
        setTooltips : setTooltips
    };
}