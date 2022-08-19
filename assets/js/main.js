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
  
  $('.input-lab-box input').keyup(function(){
    if($(this).val().length > 0){
      $(this).prev().addClass('hidden-validate');
    }else{
      $(this).prev().removeClass('hidden-validate');
    }
  }) 

  $('.sub-li').hover(function(){
    if($(this).children('.sub-child-link').length > 0){
       $('.sub-menu').toggleClass('sub-menu-active');
       $('.nav-links ul li').toggleClass('pos-initial');
       $(this).toggleClass('hover-bg').siblings().removeClass('hover-bg');
       $(this).children('.sub-a').toggleClass('hover-bg1').siblings().removeClass('hover-bg1');
    }else{
      console.log('noHover')
       
    }
  });
  $('.sub-child-li').hover(function(){
    if($(this).children('.sub-child-child-link').length > 0){
       $('.sub-menu').toggleClass('sub-menu-active2');
       $(this).toggleClass('hover-bg2').siblings().removeClass('hover-bg2');
       $(this).children('.sub-a').toggleClass('hover-bg3').siblings().removeClass('hover-bg3');
    }else{
      console.log('noHover')
    }
  });


  $(function() {
    var increment = 4;
    var startFilter = 0;
    var endFilter = increment;
    var $this = $('.publications-box');
    var elementLength = $this.find('a.publication-item').length;
    $('.listLength').text(elementLength);

    if (elementLength > 2) {
        $('.buttonToogle').show();
    }
    $('.publications-box a.publication-item').slice(startFilter, endFilter).addClass('shown');
    $('.shownLength').text(endFilter);
    $('.publications-box a.publication-item').not('.shown').hide();
    $('.see-all').on('click', function() {
        if (elementLength > endFilter) {
            startFilter += increment;
            endFilter += increment;
            $('.publications-box a.publication-item').slice(startFilter, endFilter).not('.shown').addClass('shown').toggle(500);
            $('.shownLength').text((endFilter > elementLength) ? elementLength : endFilter);
            if (elementLength <= endFilter) {
                $(this).remove();
            }
        }

    });
});
 
 