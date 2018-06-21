
$(function(){
 
		$("#art1").fadeIn(2000).slideDown(1000);
		$("#menu").fadeIn(500);

		$(".mini").fadeIn(1000).slideDown(1000);
		$("h2").fadeIn(2000);
		$(".txt2").fadeIn(2000);

    $('.p1').backstretch([
    "images/p1.jpg",
      "images/p11.jpg",
      "images/p21.jpg"
      ], {
       duration: 3000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 0, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p2').backstretch([
    "images/p2.jpg",
      "images/p22.jpg",
      "images/p22.jpg"
      ], {
       duration: 4500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
    $('.p3').backstretch([
    "images/p3.jpg",
      "images/p13.jpg",
      "images/p23.jpg"
      ], {
       duration: 6000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p4').backstretch([
    "images/p4.jpg",
      "images/p14.jpg",
      "images/p24.jpg"
      ], {
       duration: 7500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p5').backstretch([
    "images/p5.jpg",
      "images/p15.jpg",
      "images/p25.jpg"
      ], {
       duration: 9500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p6').backstretch([
    "images/p6.jpg",
      "images/p16.jpg",
      "images/p26.jpg"
      ], {
       duration: 10500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
 $('.p7').backstretch([
    "images/p7.jpg",
      "images/p17.jpg",
      "images/p27.jpg"
      ], {
       duration: 12000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p8').backstretch([
    "images/p8.jpg",
      "images/p18.jpg",
      "images/p28.jpg"
      ], {
       duration: 13500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
   $('.p9').backstretch([
    "images/p9.jpg",
      "images/p19.jpg",
      "images/p29.jpg"
      ], {
       duration: 15000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
    $('.p10').backstretch([
    "images/p10.jpg",
      "images/p20.jpg",
      "images/p30.jpg"
      ], {
       duration: 16500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });

	//엔드존 - 페이지 상단에서부터 광고창이 나타날 영역까지의 높이
	var endZone = $('header').offset().top + 800;
	var endZone2 = $('header').offset().top + 1600;
	var endZone3 = $('header').offset().top + 1600;
	var endZone4 = $('header').offset().top + 1600;

	$(window).on('scroll', function(){
		//조건식을 이용하여 현재 스크롤된 위치와 엔드존의 시작점을 비교
		if(endZone < $(window).scrollTop()) {
			$('.img1').animate({opacity:1},250);

			 $(".img1").vegas({
      slides: [
          { src: "images/icec.jpg",transition: 'slideLeft' },
            ],
  },1000);
		} 
	});

	$(window).on('scroll', function(){
		if(endZone2 < $(window).scrollTop()) {
			$('.img2').animate({opacity:1},250);

			 $(".img2").vegas({
      slides: [
          { src: "images/choco.jpg",transition: 'slideRight' },
            ],
  },1000);
		} 
	});
	
	$(window).on('scroll', function(){
		if(endZone3 < $(window).scrollTop()) {
			$('.img3').animate({opacity:1},250);

			 $(".img3").vegas({
      slides: [
          { src: "images/orange.jpg",transition: 'slideUp' },
        
            ],
  },1000);
		} 
	});

	$(window).on('scroll', function(){
		if(endZone4 < $(window).scrollTop()) {
			$('.img6').animate({opacity:1},250);

			 $(".img6").vegas({
      slides: [
          { src: "images/gelato2.jpg",transition: 'slideUp' },
        
            ],
  },1000);
		} 
	});
// $(".wrap").mousewheel(function(event, delta){
// 			if(delta>0) {//마우스 휠을 올렸을 때
// 				var prev = $(this).prev().offset().top;
// 				$("html,body").stop().animate({"scrollTop":prev},1000,"easeOutBounce");
			
// 				}else if(delta < 0){//마우스 휠을 내렸을 때
// 				var next = $(this).next().offset().top;
// 				$("html,body").stop().animate({"scrollTop":next},1000,"easeOutBounce");
// 			}
// 		});

	// $("li.one two").click(function(){
	// 	var target = $(this).attr("href");
	// 	$("html, body").animate({
	// 		scrollTop:#(target).offset().top - $("#art6").offset().top
	// 	},300);
	// });

});