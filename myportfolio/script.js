$(function(){
$('a[href^=#]').click(function(){
        var headerheight = 75;
        var href= $(this).attr("href");

        var target = $(href == "#" || href == "" ? 'html' : href);

        var position = target.offset().top-headerheight;

        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;

    });
 
 $('.js-accordion').click(function() {
    var $archive = $(this).find('.archive');
    if ($archive.hasClass('open')) {
    // true: open クラスがあれば
      $archive.removeClass('open');
      $archive.slideUp();
      $(this).find('.toggle').text('+');
    } else {
    // false: open クラスがなければ
      $archive.addClass('open');
      $archive.slideDown();
      $(this).find('.toggle').text('-');
    }
  });

});



