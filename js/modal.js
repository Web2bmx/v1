export default function modal() {
    var $modal = null;
    var $close = null;
    var $overlay = null;
    var init = function (ide){
        $modal = $(ide);
        if ($modal.find("#modal-close").length > 0) { setCloseButton(); }
        if ($modal.find("#modal-overlay").length > 0) { setOverlay(); }
    }
    var setCloseButton = function () {
        $close = $(("#modal-close"));
        $("body").on("click", "#modal-close", function () {
            hide();
        });
    }
    var setOverlay = function () {
        $overlay = $(("#modal-overlay"));
        $modal.before($overlay);
    }
    var hide = function (){
        $modal.fadeOut(500).find(".dialog").hide();
        if ($overlay) { $overlay.hide(); }
    }
    var show = function (ide){
        $modal.hide().fadeIn(500).find(".dialog").hide().filter(ide).show();
        if ($overlay) { $overlay.fadeIn(500); }
    }
    var hideErrorMessage = function () {
        $(".dialog-error:visible").remove().detach();
    }
    var showErrorMessage = function ($target, cont, ide, mssg = undefined) {
        if ($target.find(ide).length == 0) { $target.find(cont).after($(ide).clone()); }
        if (mssg != undefined) { $target.find(ide).html(mssg); }
        $target.find(ide).hide().fadeIn("fast");
    }
    return {
        init: init,
        hide: hide,
        hideErrorMessage: hideErrorMessage,
        showErrorMessage: showErrorMessage,
        show: show
	};
};