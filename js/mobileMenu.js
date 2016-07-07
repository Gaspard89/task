$(function() {
    var shouldMenuAnimate = true;
    $("#toggle-nav").click(function() {
    var menuRight = $('.mobile-menu');

        if(shouldMenuAnimate)
        {
            shouldMenuAnimate = false;
            $(menuRight).animate({left: "0%"}, 500);
        }
        else
        {
            $(menuRight).animate({left: "-100%"}, 500);
            shouldMenuAnimate = true;
        }
    });
    $('#toggle-nav').click(function(e) {
        e.preventDefault();
    });
});
