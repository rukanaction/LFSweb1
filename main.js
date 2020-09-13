$(function(){
//ここにjQueryのコードを書きます
});
$(window).on("load resize",function(){
 
    var wH01 = $(window).height();
    //ウィンドウの高さを取得
 
  $('.slides img').css('height',wH01+'px');
  //上記をスライダーの画像の高さに設定
 
  $('.slides img').css('width','auto');
  //スライダーの画像の幅は高さに従う
 
  var imgwidth = $('.slides img').width() / 2;
  $('#maininner').css('margin-left','-'+imgwidth+'px');
  //幅を超えた場合のための画像センター寄せ
 
});
 
$(function() {
 
// slider
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: false,
    animationLoop: true,
    pauseOnAction: false,
    start: function(){
      //コールバックが利用できる場合はスライダー開始時にも設定
      var wH01 = $(window).height();
      $('.slides img').css('height',wH01+'px');
      $('.slides img').css('width','auto');
      var imgwidth = $('.slides img').width() / 2;
      $('#maininner').css('margin-left','-'+imgwidth+'px');
    }
  });
});