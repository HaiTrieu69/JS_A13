/*###   I wish that a :parent  ###
  ### selector for css existed ###*/
  $('.maximize').on('click',function(){
    /* Mobile fallback because css          *
     * height/width animation sucks on phone*/
    if ($(this).parent().hasClass('mobile')){
      $(this).parent().toggleClass('full');
      if ($(this).parent().hasClass('full')){
        window.tmpSize = {
          'width':$(this).parent().width(),
          'height':$(this).parent().height(),
          'transform':$(this).parent().css('transform')
        };
        $(this).parent().animate({
          'width':'100%',
          'height':'100%'
        },600);
      } else {
        $(this).parent().animate({
          'width':window.tmpSize.width,
          'height':window.tmpSize.height,
          'transform':window.tmpSize.tranform
        });
      }
      
    }else {
      $(this).parent().toggleClass('full');
    }
  });
  
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.img').addClass('mobile');
  }