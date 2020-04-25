$(function() {
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { //100pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500); //0.5秒かけてトップへ移動
    return false;
  })
  $('.document').click(function(){
		var adjust = -61.5;
		var speed = 500;
		// var href= $(this).attr("href");
		// var target = $(href == "#" || href == "" ? 'html' : href);
		var position = $('#document').offset().top + adjust;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
  
});
