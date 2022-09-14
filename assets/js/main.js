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
 