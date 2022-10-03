var minute = 3000;
$('.banner-slider').slick({
    infinite: true,
    fade: true,
    prevArrow:false,
    nextArrow:false,
    autoplay:true,
    autoplaySpeed:minute
  });

  $('.nav-links ul li a').hover(function(){
    $('.bottom-header').toggleClass('submenu-active');
  });

  $('.top-links-box span').click(function(){
    $(this).parents('.accord-box ul li.li-01').toggleClass('active-accord').siblings().removeClass('active-accord');
    
  });
  $('.svvg').click(function(){
    $(this).parents('.sp-001').toggleClass('active-accord-2').siblings().removeClass('active-accord-2');
    
  });
  // $('.service-column-box').click(function(){
  //   $(this).parents('.accord-box ul li').toggleClass('active-accord').siblings().removeClass('active-accord');
    
  // });

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
     
     
     
     var ar1 = $(this).children('.sub-menu-1').children('.sub-container').height();
     var ar2 = $(len[i]).children('.child-sub-menu-1').height();
     var ar3 = $(len[i]).children('.child-sub-menu-1').children('.child-sub-li').children('.grandson-sub-menu-1').height();
     var maxArray = [ar1, ar2, ar3]
     var res = Math.max(...maxArray);
      
      $(this).children('.sub-menu-1').height(res);
        
     if(ar1 > ar2){
      ar2 = 100 + '%';
      $(len[i]).children('.child-sub-menu-1').height(ar2);
     }
     
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
 


// const PUZZLE_HOVER_TINT = "#009900";
// const img = new Image();
// const canvas = document.querySelector("#canvas");
// const stage = canvas.getContext("2d");
// let difficulty = 3;
// let pieces;
// let puzzleWidth;
// let puzzleHeight;
// let pieceWidth;
// let pieceHeight;
// let currentPiece;
// let currentDropPiece;
// let mouse;
// img.addEventListener("load", onImage, false);
// img.src = "https://asyncbanana.github.io/html5-canvas-puzzle/mke.jpg";

// function initPuzzle() {
// pieces = [];
// mouse = {
//     x: 0,
//     y: 0
// };
// currentPiece = null;
// currentDropPiece = null;
// stage.drawImage(
//     img,
//     0,
//     0,
//     puzzleWidth,
//     puzzleHeight,
//     0,
//     0,
//     puzzleWidth,
//     puzzleHeight
// );
// createTitle("Click to Start Puzzle");
// buildPieces();
// }

// function setCanvas() {
// canvas.width = puzzleWidth;
// canvas.height = puzzleHeight;
// canvas.style.border = "1px solid black";
// }

// function onImage() {
// pieceWidth = Math.floor(img.width / difficulty);
// pieceHeight = Math.floor(img.height / difficulty);
// puzzleWidth = pieceWidth * difficulty;
// puzzleHeight = pieceHeight * difficulty;
// setCanvas();
// initPuzzle();
// }

// function createTitle(msg) {
// stage.fillStyle = "#000000";
// stage.globalAlpha = 0.4;
// stage.fillRect(100, puzzleHeight - 40, puzzleWidth - 200, 40);
// stage.fillStyle = "#FFFFFF";
// stage.globalAlpha = 1;
// stage.textAlign = "center";
// stage.textBaseline = "middle";
// stage.font = "20px Arial";
// stage.fillText(msg, puzzleWidth / 2, puzzleHeight - 20);
// }

// function buildPieces() {
// let i;
// let piece;
// let xPos = 0;
// let yPos = 0;
// for (i = 0; i < difficulty * difficulty; i++) {
//     piece = {};
//     piece.sx = xPos;
//     piece.sy = yPos;
//     pieces.push(piece);
//     xPos += pieceWidth;
//     if (xPos >= puzzleWidth) {
//     xPos = 0;
//     yPos += pieceHeight;
//     }
// }
// document.onpointerdown = shufflePuzzle;
// }

// function shufflePuzzle() {
// pieces = shuffleArray(pieces);
// stage.clearRect(0, 0, puzzleWidth, puzzleHeight);
// let xPos = 0;
// let yPos = 0;
// for (const piece of pieces) {
//     piece.xPos = xPos;
//     piece.yPos = yPos;
//     stage.drawImage(
//     img,
//     piece.sx,
//     piece.sy,
//     pieceWidth,
//     pieceHeight,
//     xPos,
//     yPos,
//     pieceWidth,
//     pieceHeight
//     );
//     stage.strokeRect(xPos, yPos, pieceWidth, pieceHeight);
//     xPos += pieceWidth;
//     if (xPos >= puzzleWidth) {
//     xPos = 0;
//     yPos += pieceHeight;
//     }
// }
// document.onpointerdown = onPuzzleClick;
// }

// function checkPieceClicked() {
// for (const piece of pieces) {
//     if (
//     mouse.x < piece.xPos ||
//     mouse.x > piece.xPos + pieceWidth ||
//     mouse.y < piece.yPos ||
//     mouse.y > piece.yPos + pieceHeight
//     ) {
//     //PIECE NOT HIT
//     } else {
//     return piece;
//     }
// }
// return null;
// }

// function updatePuzzle(e) {
// currentDropPiece = null;
// if (e.layerX || e.layerX == 0) {
//     mouse.x = e.layerX - canvas.offsetLeft;
//     mouse.y = e.layerY - canvas.offsetTop;
// } else if (e.offsetX || e.offsetX == 0) {
//     mouse.x = e.offsetX - canvas.offsetLeft;
//     mouse.y = e.offsetY - canvas.offsetTop;
// }
// stage.clearRect(0, 0, puzzleWidth, puzzleHeight);
// for (const piece of pieces) {
//     if (piece == currentPiece) {
//     continue;
//     }
//     stage.drawImage(
//     img,
//     piece.sx,
//     piece.sy,
//     pieceWidth,
//     pieceHeight,
//     piece.xPos,
//     piece.yPos,
//     pieceWidth,
//     pieceHeight
//     );
//     stage.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
//     if (currentDropPiece == null) {
//     if (
//         mouse.x < piece.xPos ||
//         mouse.x > piece.xPos + pieceWidth ||
//         mouse.y < piece.yPos ||
//         mouse.y > piece.yPos + pieceHeight
//     ) {
//         //NOT OVER
//     } else {
//         currentDropPiece = piece;
//         stage.save();
//         stage.globalAlpha = 0.4;
//         stage.fillStyle = PUZZLE_HOVER_TINT;
//         stage.fillRect(
//         currentDropPiece.xPos,
//         currentDropPiece.yPos,
//         pieceWidth,
//         pieceHeight
//         );
//         stage.restore();
//     }
//     }
// }
// stage.save();
// stage.globalAlpha = 0.6;
// stage.drawImage(
//     img,
//     currentPiece.sx,
//     currentPiece.sy,
//     pieceWidth,
//     pieceHeight,
//     mouse.x - pieceWidth / 2,
//     mouse.y - pieceHeight / 2,
//     pieceWidth,
//     pieceHeight
// );
// stage.restore();
// stage.strokeRect(
//     mouse.x - pieceWidth / 2,
//     mouse.y - pieceHeight / 2,
//     pieceWidth,
//     pieceHeight
// );
// }

// function onPuzzleClick(e) {
// if (e.layerX || e.layerX === 0) {
//     mouse.x = e.layerX - canvas.offsetLeft;
//     mouse.y = e.layerY - canvas.offsetTop;
// } else if (e.offsetX || e.offsetX === 0) {
//     mouse.x = e.offsetX - canvas.offsetLeft;
//     mouse.y = e.offsetY - canvas.offsetTop;
// }
// currentPiece = checkPieceClicked();
// if (currentPiece !== null) {
//     stage.clearRect(
//     currentPiece.xPos,
//     currentPiece.yPos,
//     pieceWidth,
//     pieceHeight
//     );
//     stage.save();
//     stage.globalAlpha = 0.9;
//     stage.drawImage(
//     img,
//     currentPiece.sx,
//     currentPiece.sy,
//     pieceWidth,
//     pieceHeight,
//     mouse.x - pieceWidth / 2,
//     mouse.y - pieceHeight / 2,
//     pieceWidth,
//     pieceHeight
//     );
//     stage.restore();
//     document.onpointermove = updatePuzzle;
//     document.onpointerup = pieceDropped;
// }
// }

// function gameOver() {
// document.onpointerdown = null;
// document.onpointermove = null;
// document.onpointerup = null;
// initPuzzle();
// }

// function pieceDropped(e) {
// document.onpointermove = null;
// document.onpointerup = null;
// if (currentDropPiece !== null) {
//     let tmp = {
//     xPos: currentPiece.xPos,
//     yPos: currentPiece.yPos
//     };
//     currentPiece.xPos = currentDropPiece.xPos;
//     currentPiece.yPos = currentDropPiece.yPos;
//     currentDropPiece.xPos = tmp.xPos;
//     currentDropPiece.yPos = tmp.yPos;
// }
// resetPuzzleAndCheckWin();
// }

// function resetPuzzleAndCheckWin() {
// stage.clearRect(0, 0, puzzleWidth, puzzleHeight);
// let gameWin = true;
// for (piece of pieces) {
//     stage.drawImage(
//     img,
//     piece.sx,
//     piece.sy,
//     pieceWidth,
//     pieceHeight,
//     piece.xPos,
//     piece.yPos,
//     pieceWidth,
//     pieceHeight
//     );
//     stage.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
//     if (piece.xPos != piece.sx || piece.yPos != piece.sy) {
//     gameWin = false;
//     }
// }
// if (gameWin) {
//     setTimeout(gameOver, 500);
// }
// }

// function shuffleArray(o) {
// for (
//     var j, x, i = o.length;
//     i;
//     j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
// );
// return o;
// }

// function updateDifficulty(e) {
// difficulty = e.target.value;
// pieceWidth = Math.floor(img.width / difficulty);
// pieceHeight = Math.floor(img.height / difficulty);
// puzzleWidth = pieceWidth * difficulty;
// puzzleHeight = pieceHeight * difficulty;
// gameOver();
// }
// document.querySelector("#difficulty").oninput = updateDifficulty;
 

// $(document).ready(function(){
//   setTimeout(() => {
//     $('html').addClass('opacity');
//     console.log('sss')
//   }, 100);
// });

// var $jscomp = $jscomp || {};
// $jscomp.scope = {};
// $jscomp.arrayIteratorImpl = function (c) {
//   var a = 0;
//   return function () {
//       return a < c.length ? {
//           done: !1,
//           value: c[a++]
//       } : {
//           done: !0
//       }
//   }
// };
// $jscomp.arrayIterator = function (c) {
//   return {
//       next: $jscomp.arrayIteratorImpl(c)
//   }
// };
// $jscomp.makeIterator = function (c) {
//   var a = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
//   return a ? a.call(c) : $jscomp.arrayIterator(c)
// };
// $jscomp.arrayFromIterator = function (c) {
//   for (var a, b = []; !(a = c.next()).done;) b.push(a.value);
//   return b
// };
// $jscomp.arrayFromIterable = function (c) {
//   return c instanceof Array ? c : $jscomp.arrayFromIterator($jscomp.makeIterator(c))
// };
// $(".banner-slider").slick({
//   infinite: !0, 
//   prevArrow: !1,
//   nextArrow: !1,
//   autoplay: !0,
//   autoplaySpeed: 4E3
// });
// $(".nav-links ul li a").hover(function () {
//   $(".bottom-header").toggleClass("submenu-active")
// });
// $(".top-links-box span").click(function () {
//   $(this).parents(".accord-box ul li").toggleClass("active-accord").siblings().removeClass("active-accord");
// });
// $(".click-0012").click(function () {
//   $(this).parents(".accord-box ul li").toggleClass("active-accord").siblings().removeClass("active-accord");
// });

// $(".question .quest-t span").click(function () {
//   $(this).parents(".question-item ol li").toggleClass("show-result").siblings().removeClass("show-result")
// });
// $(document).ready(function () {
//   for (var c = $(".slider-text .text"), a = 0; a < c.length; a++) 0 >= $(c[a]).text().length && $(c[a]).css("display", "none")
// });
// $(".input-lab-box input").keyup(function () {
//   0 < $(this).val().length ? $(this).prev().addClass("hidden-validate") : $(this).prev().removeClass("hidden-validate")
// });

// // $(".nav-li").hover(function () {
// //     for (var c = $(this).children(".sub-menu-1").children(".sub-container").children(".sub-li").length, a = 0; a < c; a++) {
// //         var b = $(this).children(".sub-menu-1").children(".sub-container").children(".sub-li");
// //         0 < $(b[a]).children(".child-sub-menu-1").children().length ? $(this).children(".sub-menu-1").addClass("sub-menu-2") : console.log("false");
// //         var d = $(this).children(".sub-menu-1").children(".sub-container").height(),
// //             e = $(b[a]).children(".child-sub-menu-1").height();
// //         b = $(b[a]).children(".child-sub-menu-1").children(".child-sub-li").children(".grandson-sub-menu-1").height();
// //         d = Math.max.apply(Math, $jscomp.arrayFromIterable([d, e, b]));
// //         $(this).children(".sub-menu-1").height(d)
// //     }
// // });

// $('.nav-li').hover(function(){
//   var SubLi =  $(this).children('.sub-menu-1').children('.sub-container').children('.sub-li').length;
     
//    for(var i=0; i<SubLi; i++){
//     var len = $(this).children('.sub-menu-1').children('.sub-container').children('.sub-li');
     
//      if($(len[i]).children('.child-sub-menu-1').children().length > 0){
//       $(this).children('.sub-menu-1').addClass('sub-menu-2');
//      }else{
//       console.log('false');
//      }
  
//      var ar1 = $(this).children('.sub-menu-1').children('.sub-container').height();
//      var ar2 = $(len[i]).children('.child-sub-menu-1').height();
//      var ar3 = $(len[i]).children('.child-sub-menu-1').children('.child-sub-li').children('.grandson-sub-menu-1').height();
//      var maxArray = [ar1, ar2, ar3]
//      var res = Math.max(...maxArray);
      
//       $(this).children('.sub-menu-1').height(res);
        
//      if(ar1 > ar2){
//       ar2 = 100 + '%';
//       $(len[i]).children('.child-sub-menu-1').height(ar2);
//      }
//      if(ar2 > ar3){
//       ar3 = 100 + '%';
//       $(len[i]).children('.child-sub-menu-1').children('.child-sub-li').children('.grandson-sub-menu-1').height(ar3);
//      }
//    }
// });

// $('.resp-active-arrow').click(function() {
//   $('.pos-abs').toggleClass('left-0');
// });

// $('.svvg').click(function(){
//   $(this).parents('.sp-001').toggleClass('active-accord-2').siblings().removeClass('active-accord-2');
  
// });

// $(document).ready(function () {
//   for (var c = $(".nav-li").children(".sub-menu-1").children(".sub-container").children(".sub-li").length, a = 0; a < c; a++) {
//       var b = $(".nav-li").children(".sub-menu-1").children(".sub-container").children(".sub-li");
//       if (0 < $(b[a]).children(".child-sub-menu-1").children().length) return $(b[a]).addClass("hover-active"), $(b[a]).children(".child-sub-menu-1").children(".child-sub-li:first-child").addClass("hover-active2"), !1
//   }
// });
// $(document).ready(function () {
//   0 < $(".hover-active2").children(".grandson-sub-menu-1").children(".grandson-li").length && $(".hover-active2").children(".grandson-sub-menu-1").children(".img-rp").addClass("remove-img");
//   $(".hover-active2").children(".grandson-sub-menu-1").children(".grandson-li:first-child").addClass("hover-active3")
// });
// $(".sub-li").hover(function () {
//   $(this).toggleClass("hover-active");
//   $(this).siblings().removeClass("hover-active");
//   $(this).children(".child-sub-menu-1").children(".child-sub-li").siblings().removeClass("hover-active2")
// });
// $(".child-sub-li").hover(function () {
//   $(this).toggleClass("hover-active2");
//   $(this).siblings().removeClass("hover-active2");
//   0 < $(this).children(".grandson-sub-menu-1").children(".grandson-li").length ? $(this).children(".grandson-sub-menu-1").children(".img-rp").addClass("remove-img") : $(this).children(".grandson-sub-menu-1").children(".img-rp").removeClass("remove-img")
// });
// $(".grandson-li").hover(function () {
//   $(this).toggleClass("hover-active3");
//   $(this).siblings().removeClass("hover-active3")
// });

// $(document).ready(function (c) {
//   var a = 2;
//   $(".video-item").slice(0, a).show();
//   $(document).on("click", ".load_more", function (b) {
//       a += 2;
//       b.preventDefault();
//       $(".video-item").slice(0, a).show()
//   })
// });
// $(document).ready(function () {
//   setTimeout(function () {
//       $(".alert ").addClass("hidden")
//   }, 1500)
// });
// $(function () {
//   var c = 0,
//       a = 4,
//       b = $(".publications-box").find("a.publication-item").length;
//   $(".listLength").text(b);
//   2 < b && $(".buttonToogle").show();
//   $(".publications-box a.publication-item").slice(c, a).addClass("shown");
//   $(".shownLength").text(a);
//   $(".publications-box a.publication-item").not(".shown").hide();
//   $(".see-all-01-2").on("click", function () {
//       b > a && (c += 4, a += 4, $(".publications-box a.publication-item").slice(c, a).not(".shown").addClass("shown").toggle(50), $(".shownLength").text(a > b ? b : a), b <= a && $(this).remove())
//   })
// });
// $(document).ready(function (c) {
//   var a = 2;
//   $(".question-item").slice(0, a).show();
//   $(document).on("click", ".see-all-01-2", function (b) {
//       a += 2;
//       b.preventDefault();
//       $(".question-item").slice(0, a).show()
//   })
// });
// $(function () {
//   var c = 0,
//       a = 4,
//       b = $(".loadService").find("a.service-item-2").length;
//   $(".listLength").text(b);
//   2 < b && $(".buttonToogle").show();
//   $(".loadService a.service-item-2").slice(c, a).addClass("shown");
//   $(".shownLength").text(a);
//   $(".loadService a.service-item-2").not(".shown").hide();
//   $(".see-all-01-2").on("click", function () {
//       b > a && (c += 4, a += 4, $(".loadService a.service-item-2").slice(c, a).not(".shown").addClass("shown").toggle(50), $(".shownLength").text(a > b ? b : a), b <= a && $(this).remove())
//   })
// });
// $(function () {
//   var c = 0,
//       a = 4,
//       b = $(".loadNews").find("a.news-more").length;
//   $(".listLength").text(b);
//   2 < b && $(".buttonToogle").show();
//   $(".loadNews a.news-more").slice(c, a).addClass("shown");
//   $(".shownLength").text(a);
//   $(".loadNews a.news-more").not(".shown").hide();
//   $(".see-all-01-2").on("click", function () {
//       b > a && (c += 4, a += 4, $(".loadNews a.news-more").slice(c, a).not(".shown").addClass("shown").toggle(50), $(".shownLength").text(a > b ? b : a), b <= a && $(this).remove())
//   })
// });
// $(function () {
//   var c = 0,
//       a = 2,
//       b = $(".question-ol").find(".question-li").length;
//   $(".listLength").text(b);
//   2 < b && $(".buttonToogle").show();
//   $(".question-ol .question-li").slice(c, a).addClass("shown");
//   $(".shownLength").text(a);
//   $(".question-ol .question-li").not(".shown").hide();
//   $(".see-all-01-2").on("click", function () {
//       b > a && (c += 2, a += 2, $(".question-ol .question-li").slice(c, a).not(".shown").addClass("shown").toggle(50), $(".shownLength").text(a > b ? b : a), b <= a && $(this).remove())
//   })
// });


// if($(window).width() >= 992){

//   ScrollReveal().reveal('.l-header', {
//       delay: 300,
//       duration: 800,
//       distance: '400px',
//       origin: 'left',
//       reset: false,
//   });
//   ScrollReveal().reveal('.r-header', {
//       delay: 300,
//       duration: 800,
//       distance: '400px',
//       origin: 'right',
//       reset: false,
//   });
//   ScrollReveal().reveal('.banner-slider', {
//       delay: 300,
//       duration: 900,
//       distance: '100px',
//       origin: 'bottom',
//       reset: false,
//   });

  
//   ScrollReveal().reveal('.cit-title-box', {
//       delay: 300,
//       duration: 900, 
//       reset: false,
//       distance: '400px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.row-slider .p-l:first-child', {
//       delay: 300,
//       duration: 900, 
//       distance: '150px',
//       origin: 'bottom',
//       reset: false,
//   });

//   ScrollReveal().reveal('.row-slider .p-l:nth-child(2)', {
//       delay: 300,
//       duration: 1000, 
//       distance: '200px',
//       origin: 'bottom',
//       reset: false,
//   });
//   ScrollReveal().reveal('.row-slider .p-l:last-child', {
//       delay: 300,
//       duration: 1050, 
//       distance: '250px',
//       origin: 'bottom',
//       reset: false,
//   });
//   ScrollReveal().reveal('.banner-2 .b-img-box', {
//       delay: 400,
//       duration: 1100, 
//       reset: false, 
//       distance: '400px',
//       origin: 'left',
//   });
  
//   ScrollReveal().reveal('.banner-2 .text-box', {
//       delay: 400,
//       duration: 1200, 
//       reset: false,
//       distance: '800px',
//       origin: 'right',
//   });
//   ScrollReveal().reveal('.service-box .service-item:first-child', {
//       delay: 400,
//       duration: 700, 
//       reset: false,
//       distance: '100px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.service-box .service-item:nth-child(2)', {
//       delay: 400,
//       duration: 800, 
//       reset: false,
//       distance: '150px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.service-box .service-item:nth-child(3)', {
//       delay: 400,
//       duration: 900, 
//       reset: false,
//       distance: '200px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.service-box .service-item:nth-child(4)', {
//       delay: 400,
//       duration: 800, 
//       reset: false,
//       distance: '200px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.service-box .service-item:nth-child(5)', {
//       delay: 400,
//       duration: 1000, 
//       reset: false,
//       distance: '250px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.news-title', {
//       delay: 400,
//       duration: 800,  
//       distance: '100px',
//       origin: 'top',
//   });
//   ScrollReveal().reveal('.news-boxes .news-item:first-child', {
//       delay: 400,
//       duration: 800,  
//       distance: '400px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.news-boxes .news-item:nth-child(2)', {
//       delay: 400,
//       duration: 800,  
//       distance: '400px',
//       origin: 'right',
//   });
//   ScrollReveal().reveal('.news-boxes .news-item:nth-child(3)', {
//       delay: 400,
//       duration: 1200,  
//       distance: '500px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.news-boxes .news-item:nth-child(4)', {
//       delay: 400,
//       duration: 1200,  
//       distance: '500px',
//       origin: 'right',
//   });
//   ScrollReveal().reveal('.footer-contact', {
//       delay: 400,
//       duration: 800,  
//       distance: '400px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.footer-social', {
//       delay: 400,
//       duration: 1200,  
//       distance: '400px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.footer-form  ', {
//       delay: 400,
//       duration: 1200,  
//       distance: '400px',
//       origin: 'right',
//   });
//   ScrollReveal().reveal('.row-2', {
//       delay: 400,
//       duration: 1200,  
//       distance: '200px',
//       origin: 'top',
//   });
//   ScrollReveal().reveal('.banner-img', {
//       delay: 400,
//       duration: 800,  
//       distance: '200px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.brc', {
//       delay: 400,
//       duration: 1200,  
//       distance: '300px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.about-left-box', {
//       delay: 400,
//       duration: 1000,  
//       distance: '300px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.right-accord', {
//       delay: 400,
//       duration: 1000,  
//       distance: '300px',
//       origin: 'right',
//   });
//   ScrollReveal().reveal('.contact-left-info', {
//       delay: 400,
//       duration: 1000,  
//       distance: '300px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.input-lab-box', {
//       delay: 400,
//       duration: 1000,  
//       distance: '300px',
//       origin: 'right',
//   });
//   ScrollReveal().reveal('.contact-left-form button', {
//       delay: 400,
//       duration: 1300,  
//       distance: '70px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.important-title', {
//       delay: 400,
//       duration: 1000,  
//       distance: '300px',
//       origin: 'left',
//   });
//   ScrollReveal().reveal('.publications-box', {
//       delay: 400,
//       duration: 1000,  
//       distance: '300px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.question-boxes', {
//       delay: 400,
//       duration: 1000,  
//       distance: '200px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.sub-boxes', {
//       delay: 400,
//       duration: 1000,  
//       distance: '300px',
//       origin: 'bottom',
//   });
//   ScrollReveal().reveal('.video-gallery', {
//       delay: 400,
//       duration: 1500,   
//   });
//   ScrollReveal().reveal('.see-all-01-2', {
//       delay: 400,
//       duration: 900,  
//       distance: '50px',
//       origin: 'bottom',
//   });
   
//   ScrollReveal().reveal('.r-img-box', {
//       delay: 400,
//       duration: 1000,  
//       distance: '500px',
//       origin: 'right', 
//   });
//   ScrollReveal().reveal('.about-gallery-box', {
//       delay: 400,
//       duration: 1000,  
//       distance: '200px',
//       origin: 'left', 
//   });
//   ScrollReveal().reveal('.search-form-box', {
//       delay: 400,
//       duration: 1000,  
//       distance: '100px',
//       origin: 'bottom', 
//   });
//   ScrollReveal().reveal('.search-result-box', {
//       delay: 400,
//       duration: 1000,  
//       distance: '200px',
//       origin: 'left', 
//   });

// }



$('.burger-lines').click(function() {
  $('.header-head').toggleClass('background');
  $('.burger-menu').toggleClass('active');
});

$('.burg-list-arrow').click(function(){
  $(this).parents('.burger-li-1').toggleClass('open-1').siblings().removeClass('open-1');
});
$('.burg-list-arrow-2').click(function(){
  $(this).parents('.burger-child-li-2').toggleClass('open-2').siblings().removeClass('open-2');
});
$('.burg-list-arrow-3').click(function(){
  $(this).parents('.burger-child-li-3').toggleClass('open-3').siblings().removeClass('open-3');
});