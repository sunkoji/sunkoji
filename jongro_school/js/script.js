$(document).ready(function(){
    
    $('.topButton').click(function(){
        $('body, html').animate({scrollTop:0},250);
    });

  var currentIndex = 0;
  var headerNav = $('header nav').find('a');
  var contents = $('.contents section').hide();

  contents.eq(0).show();

  headerNav.each(function(i, el){
      $(el).click(function(e){
          e.preventDefault();
          changeIndex(i);
          activeLink(el);
      });
  });


  function activeLink(el){
      headerNav.parent('li').removeClass('active');
      $(el).parent('li').addClass('active');
  }

  function changeIndex(index){
      if(currentIndex === index){
          return;
      }
      currentIndex = index;
      contents.stop().hide();
      contents.eq(index).fadeIn(250);
  }

  $('#recitationE').find('.week').hide();
  $('#recitationE').find('.week').eq(0).show();
  $('#recitationE').find('nav').find('a').click(function(e){
      e.preventDefault();
      $('#recitationE').find('.week').hide();
      $(this.hash).fadeIn();
      $('#recitationE').find('nav').find('li').removeClass('on');
      $(this).parent('li').addClass('on');
  });

  $('#recitationY').find('.week').hide();
  $('#recitationY').find('.week').eq(0).show();
  $('#recitationY').find('nav').find('a').click(function(e){
      e.preventDefault();
      $('#recitationY').find('.week').hide();
      $(this.hash).fadeIn();
      $('#recitationY').find('nav').find('li').removeClass('on');
      $(this).parent('li').addClass('on');
  });


  $('#song').find('.bibleList').hide();
  $('#song').find('.bibleList').eq(1).show();

  $('#song').find('nav').find('a').click(function(e){
      e.preventDefault();
      $('#song').find('.bibleList').hide();
      $(this.hash).fadeIn();
      $('#song').find('nav').find('li').removeClass('on');
      $(this).parent('li').addClass('on');
  });

  $('#exercise').find('.bibleList').hide();
  $('#exercise').find('.bibleList').eq(0).show();

  $('#exercise').find('nav').find('a').click(function(e){
      e.preventDefault();
      $('#exercise').find('.bibleList').hide();
      $(this.hash).fadeIn();
      $('#exercise').find('nav').find('li').removeClass('on');
      $(this).parent('li').addClass('on');
  });

  $('.popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true
    }
  });

  // 찬양하세 117. 항상 기뻐해요
  var popup_video_01 = $('.popup-youtube').next('iframe').attr('src');
  $('.popup-youtube').magnificPopup({
    items: {
          src: popup_video_01
      },
    type: 'iframe',
    iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>', 
              patterns: {
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
              srcAction: 'iframe_src', 
            }
          }
  });
  // 찬양하세 9. 내마음에 사랑이
  var popup_video_02 = $('.popup-youtube2').next('iframe').attr('src');
  $('.popup-youtube2').magnificPopup({
    items: {
          src: popup_video_02
      },
    type: 'iframe',
    iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>', 
          patterns: {
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
              },
              srcAction: 'iframe_src', 
      }
  });

  // 체조(너는 축복의 씨앗)
  $('.popup-youtube3').magnificPopup({
    items: {
          src: "https://www.youtube.com/watch?v=n0sP2bVUH-0"
      },
    type: 'iframe',
    iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>', 
          patterns: {
              youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1' 
                  }
              },
              srcAction: 'iframe_src', 
      }
  });

  // 체조(예쁜 손 모아)
  $('.popup-youtube4').magnificPopup({
    items: {
            src: "https://www.youtube.com/watch?v=wX4ApP8TrhU"
      },
    type: 'iframe',
    iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>', 
          patterns: {
              youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1' 
                  }
              },
              srcAction: 'iframe_src', 
      }
  });

  // 체조(나의 발은 춤을 추며)
  $('.popup-youtube5').magnificPopup({
    items: {
            src: "https://www.youtube.com/watch?v=zzQkMPZrJog"
      },
    type: 'iframe',
    iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>', 
          patterns: {
              youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1' 
                  }
              },
              srcAction: 'iframe_src', 
      }
  });

  // 체조(왕의 자녀답게 살아요)
  $('.popup-youtube6').magnificPopup({
    items: {
            src: "https://www.youtube.com/watch?v=ZGOOh_DjzEA"
      },
    type: 'iframe',
    iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>', 
          patterns: {
              youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1' 
                  }
              },
              srcAction: 'iframe_src', 
      }
  });
    
});