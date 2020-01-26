export default function menuSingleSelection() {
    var init = function (container, menu){
        $(menu).hide();
        $(container).find(".toggle").addClass("clickable").attr("data-state", "off");
        $(container).find(".show-less").hide();
        $(container).find(".toggle").on("click", function() {
            let $this = $(this);
            let index = $this.closest(container).find(".toggle").index($this);
                
            if ($this.attr("data-state") == "off") {
                $(container).find(".toggle").attr("data-state", "off").filter(":eq(" + index + ")").attr("data-state", "on");
                $(container).find(".toggle .show-less").hide();
                $(container).find(".toggle .show-more").show();
                $this.find(".show-more").hide();
                $this.find(".show-less").show();
                $this.closest(container).find(menu).hide().filter(menu + ":eq(" + index + ")").slideDown("fast");
                $this.closest(container).find(menu + ":eq(" + index + ") input:first").trigger("click");
            } else {
                $this.attr("data-state", "off");
                $this.find(".show-less").hide();
                $this.find(".show-more").show();
                $this.closest(container).find(menu + ":eq(" + index + ")").slideUp("fast");
            }
        });
    }
    return {
		init: init
	};
};