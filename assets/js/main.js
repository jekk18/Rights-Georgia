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

  

$('.nav-li').hover(function(){
  var SubLi =  $(this).children('.sub-menu-1').children('.sub-container').children('.sub-li').length;
     
   for(var i=0; i<SubLi; i++){
    var len = $(this).children('.sub-menu-1').children('.sub-container').children('.sub-li');
     
     if($(len[i]).children('.child-sub-menu-1').children().length > 0){
      $(this).children('.sub-menu-1').addClass('sub-menu-2');
     }else{
      console.log('false');
     }
    //  if($(len[i]).children('.child-sub-menu-1').children('.child-sub-li').children('.grandson-sub-menu-1').children('.grandson-li').length > 0){
    //   $(len[i]).children('.child-sub-menu-1').children('.child-sub-li').children('.grandson-sub-menu-1').children('.img-rp').addClass('remove-img');
    //  }
     
     var ar1 = $(this).children('.sub-menu-1').children('.sub-container').height();
     var ar2 = $(len[i]).children('.child-sub-menu-1').height();
     var ar3 = $(len[i]).children('.child-sub-menu-1').children('.child-sub-li').children('.grandson-sub-menu-1').height();
     var maxArray = [ar1, ar2, ar3]
     var res = Math.max(...maxArray);
      
      $(this).children('.sub-menu-1').height(res);
   }
});

 

$(document).ready(function(){
  var SubLi =  $('.nav-li').children('.sub-menu-1').children('.sub-container').children('.sub-li').length;
  for(var i=0; i<SubLi; i++){
     
    var len = $('.nav-li').children('.sub-menu-1').children('.sub-container').children('.sub-li');
    if($(len[i]).children('.child-sub-menu-1').children().length>0){
      $(len[i]).addClass('hover-active');
      $(len[i]).children('.child-sub-menu-1').children('.child-sub-li:first-child').addClass('hover-active2')
        return false;
    }
  }
});

 
$(document).ready(function(){
  if($('.hover-active2').children('.grandson-sub-menu-1').children('.grandson-li').length > 0){
 
    $('.hover-active2').children('.grandson-sub-menu-1').children('.img-rp').addClass('remove-img');
   }
   $('.hover-active2').children('.grandson-sub-menu-1').children('.grandson-li:first-child').addClass('hover-active3')
 });

$('.sub-li').hover(function(){
  $(this).toggleClass('hover-active')
  $(this).siblings().removeClass('hover-active');
  $(this).children('.child-sub-menu-1').children('.child-sub-li').siblings().removeClass('hover-active2');
});

$('.child-sub-li').hover(function(){
  $(this).toggleClass('hover-active2');
  $(this).siblings().removeClass('hover-active2');
  if($(this).children('.grandson-sub-menu-1').children('.grandson-li').length > 0){
    $(this).children('.grandson-sub-menu-1').children('.img-rp').addClass('remove-img');;
    console.log('remm')
  }else{
    $(this).children('.grandson-sub-menu-1').children('.img-rp').removeClass('remove-img');
  }
});

$('.grandson-li').hover(function(){
  $(this).toggleClass('hover-active3');
  $(this).siblings().removeClass('hover-active3');
});

 
$('.resp-active-arrow').click(function() {
  $('.pos-abs').toggleClass('left-0');
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
 
 