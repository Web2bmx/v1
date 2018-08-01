console.log("1");
$(document).ready(function() {
    console.log("2");
    $(document).on("scroll", function() {
        var st = $(this).scrollTop();
        $("#hero-content").css({ "top" : ((Math.round(st * 4.8)) + "px") });
    });
    $(document).on({mouseenter: function() {
        $(this).animate({ "opacity" : 0 }, 500);
    }, mouseleave: function() {
        $(this).animate({ "opacity" : 1 }, 500);
    }}, ".item .img-cont");
});