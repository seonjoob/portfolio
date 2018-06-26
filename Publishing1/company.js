	var liw =  parseInt($('.imgG').children('li').css('width'));

	$('.imgG').css('margin-left', -liw + 'px');
	$('.imgG>li:first').appendTo($('.imgG'));

	$('.btnL').click(function(){
		var marginL = parseInt($('.imgG').css('margin-left'));
		$('.imgG').animate({marginLeft:marginL+liw}, function(){
			$('.imgG').css('margin-left', -liw + 'px');
			$('.imgG>li:last').prependTo($('.imgG'));
		});
	});
	
	$('.btnR').click(slide);
	function slide(){
		var marginL = parseInt($('.imgG').css('margin-left'));
		$('.imgG').animate({marginLeft:marginL-liw},function(){
			$('.imgG').css('margin-left', -liw + 'px');
			$('.imgG>li:first').appendTo($('.imgG'));
		});
	}
	
	var auto = setInterval(slide, 2000);

	$('.btn').hover(function(){
		clearInterval(auto);
	}, function(){
		auto = setInterval(slide, 2000);
	});

	$('.slide').mouseenter(function(){
		$(".btn").css({"opacity":"1"});
	})
	$('.slide').mouseleave(function(){
		$(".btn").css({"opacity":"0.6"});
	})
//header
$(window).scroll(function(){
	if(100>$(window).scrollTop()/*<400*/) {
		$('.nav').css({'background-color':'rgba(0,0,0,0)','transition':'.5s'});
		$('button').css('display','none');
	} else {
		$('.nav').css('background-color','rgba(0,0,0,1)');
		$('button').css('display','block');
	}
});
