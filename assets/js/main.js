$('.banner-slider').slick({
    infinite: true,
    fade: true,
    prevArrow:false,
    nextArrow:false,
    autoplay:true,
    autoplaySpeed:4000
  });

  $('.nav-links ul li a').hover(function(){
    $('.bottom-header').toggleClass('submenu-active');
  });

  $('.top-links-box span').click(function(){
    $(this).parents('.accord-box ul li').toggleClass('active-accord').siblings().removeClass('active-accord');
    
  });

  $('.question .quest-t span').click(function(){
    $(this).parents('.question-item ol li').toggleClass('show-result').siblings().removeClass('show-result');
  });
  $(document).ready(function(){
    var textLength = $('.slider-text .text');
     for(var i = 0; i< textLength.length; i++){
      if($(textLength[i]).text().length <= 0){
        $(textLength[i]).css('display', 'none');
      }
     }
     
  })
  
  $('.contact-left-form .input-lab-box input').keyup(function(){
    if($(this).val().length > 0){
      $(this).prev().addClass('hidden-validate');
    }else{
      $(this).prev().removeClass('hidden-validate');
    }
  }) 

 
 