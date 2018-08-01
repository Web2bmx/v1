console.log("1");
$(document).ready(function() {
    var d = 300;
    $(".item").css({ "top" : (d + "px"), "opacity" : "0" });
    $(document).on("scroll", function() {
       var st = $(this).scrollTop();
       if (st <= d) {
            $(".item").each(function() {
                $(this).css({
                    "top" : ((Math.round(d - st)) + "px"),
                    "opacity" : ((st / d))
                });
            });
        }    
    });
    $(document).on({mouseenter: function() {
    //    $(this).animate({ "opacity" : 0 }, 500);
    }, mouseleave: function() {
    //    $(this).animate({ "opacity" : 1 }, 500);
    }}, ".item .img-cont");
});