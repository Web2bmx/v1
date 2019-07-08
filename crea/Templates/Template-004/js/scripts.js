$(document).ready(function() {
    /*Gallery*/
    var c_gallery_count = 0;
    var $c_gallery_images = $(".gallery div.img");
    var $c_gallery_control = $(".gallery-nav");
    $c_gallery_images.filter(":not(:eq(" + c_gallery_count + "))").hide();
    $c_gallery_control.show();
    $(".gallery").addClass("gallery_slider");
    $(".gallery-nav>span").on("click", function() {
        var b = $(this).hasClass(".gallery-nav-next") ? "next" : "prev";
        change_gallery_item(b);
    });
    var change_gallery_item = function(b) {
        if (b == "prev") {
            c_gallery_count --;
            if (c_gallery_count == -1) { c_gallery_count = ($c_gallery_images.length - 1); }
        }
        if (b == "next") {
            c_gallery_count ++;
            if (c_gallery_count == $c_gallery_images.length) { c_gallery_count = 0; }
        }
        
        $c_gallery_images.filter(":not(:eq(" + c_gallery_count + "))").hide();
        $c_gallery_images.filter(":eq(" + c_gallery_count + ")").show();
    }
    /*Gallery*/
    /*Menu*/
    var setMenu = function() {
        console.log($(window).width());
        if ($(window).width() <= 560) {
            $("#menu").addClass("toggle");
            $("#menu-icon").show();
            $("#menu-icon").removeClass("showing");
            $("#menu menu").hide();  
        } else {
            $("#menu").removeClass("toggle");
            $("#menu-icon").hide();
            $("#menu-icon").addClass("showing");
            $("#menu menu").show();
        }
    }
    setMenu();
    $(window).on("resize", function() {
        setMenu();
    });
    $("#template").on("click", "#menu-icon", function() {
        var $this = $(this);
        if ($this.hasClass("showing")) {
            $("#menu menu").hide();
            $this.removeClass("showing");
        } else {
            $("#menu menu").show();
            $this.addClass("showing");
        }
    });
    /*Menu*/
});