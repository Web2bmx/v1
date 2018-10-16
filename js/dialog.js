export default function dialogHandler(setHeight = false){

    var winWidth = $(window).width(),
	winHeigth = $(window).height();     

    $(".dialog").dialog({ 
        autoOpen: false,
        modal: true,
        width: winWidth,
        height: setHeight ? winHeigth : 'auto',
        fluid: true,        
        show: {
            effect: "fade",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 1000
        },
        closeOnEscape: false
  }); 

    // run function on all dialog opens
    $(document).on("dialogopen", ".ui-dialog", function (event, ui) {
        fluidDialog();
    });  

    // remove window resize namespace
    $(document).on("dialogclose", ".ui-dialog", function (event, ui) {
        $(window).off("resize.responsive");
    });    
    
    function fluidDialog() {
        var $visible = $(".ui-dialog:visible");
        // each open dialog
        $visible.each(function () {
            var $this = $(this);
            var dialog = $this.find(".ui-dialog-content").dialog( "instance" );
          console.log(dialog);
            // if fluid option == true
            if (dialog.options.maxWidth && dialog.options.width) {
                // fix maxWidth bug
                $this.css("max-width", dialog.options.maxWidth);
                //reposition dialog
                dialog.option("position", dialog.options.position);
            }
    
            if (dialog.options.fluid) {
                // namespace window resize
                $(window).on("resize.responsive", function () {
                    var wWidth = $(window).width();
                    // check window width against dialog width
                    if (wWidth < dialog.options.maxWidth + 50) {
                        // keep dialog from filling entire screen
                        $this.css("width", "90%");
                        
                    }
                  //reposition dialog
                  dialog.option("position", dialog.options.position);
                });
            }
    
        });
    }    
}

