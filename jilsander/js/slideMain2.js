$(document).ready(function(){
	
    $('.visual').each(function(){
        
        var i = 1;
        var bgs = ['imgs/jilSander-01.JPG','imgs/jilSander-12.JPG','imgs/jilSander-03.JPG'];
    
        setInterval(function(){
            $('.visual').fadeOut(1500,function(){
                $(this).css('background-image','url('+ bgs[i++] +')').fadeIn(1500);
            });
            if(i == bgs.length){i = 0;}
        },3000);
    });
    
    
    
    $('.clickSlider').each(function(){
       
        var timer;
        var anchor = $(this).find('a');
        
        startTimer();
        anchor.parent().hover(stopTimer,startTimer);
        
        function clickSlider(){
            anchor.find('img').eq(0).fadeOut(700,function(){
                anchor.find('img').eq(0).appendTo(anchor);
            });
            anchor.find('img').eq(1).fadeIn(700);
        }
        function startTimer(){
            timer = setInterval(clickSlider,2000);
        }
        function stopTimer(){
            clearInterval(timer);
        }
        
    });
    
    
    
    
    // slick
    $('.autoplay').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
	  responsive: [
		{
		  breakpoint: 1279,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2
		  }
		}
	 ]
    });
    
	
	// nav
	
	$('.navButton').click(function(){
		if($('nav').hasClass('on')){
			$('nav').css('right','-70%').removeClass('on');
			$('.navButton').find('span').eq(1).fadeIn(200);
		}else{
			$('nav').css('right','0').addClass('on');
			$('.navButton').find('span').eq(1).fadeOut(200);
		}
	});
    
	
    
});