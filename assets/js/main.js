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