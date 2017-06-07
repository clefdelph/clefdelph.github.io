$(function(){
$('a[href^=#]').click(function(){
        var headerheight = 75;
        var href= $(this).attr("href");

        var target = $(href == "#" || href == "" ? 'html' : href);

        var position = target.offset().top-headerheight;

        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;

    });

});



