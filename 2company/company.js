//첫번째 하단 버튼을 클릭하면 imgG의 첫번째 이미지만 보인다.
$(function(){


var $btn = $('.slide>.btnG>li');
var $imgG = $('.slide>.imgG');
var n = 0;

//$('.btnG>li').click();
$btn.click(function(){//각각의 버튼을 클릭하면
	n = $(this).index();
	//각각의 이미지가 인덱스 번호에 맞춰 움직임
	$imgG.animate({marginLeft:-100*n+'%'});

//먼저 모든 버튼의 스타일을 삭제 후 선택한 버튼에만 다시 스타일 값 부여
	$btn.removeClass('on');
	$(this).addClass('on');
});

//자동 실행 setInterval(실행값, 시간);
	var auto = setInterval(slide,2000);

	function slide(){//선언함수 - 호출할 때마다 실행
		n = (n+1)%4;//0,1,2,3
		$imgG.animate({marginLeft:-100*n+'%'});
	
		//.siblings() 기준 객체의 형제 관계의 요소
		//선택한 버튼에 스타일 값이 적용되고 선택된 버튼의 형제 관계에 있는 요소들의 스타일은 제거
		$btn.eq(n).addClass('on').siblings().removeClass('on');
	}
$('.btnR').click(slideImg);
	function slideImg(){//slideImg라는 이름을 가진 함수
		var pos = $('.imgG').css('margin-left');//.css()를 통해 얻은 값은 문자형 값
		pos= parseInt(pos);//문자열을 숫자로 바꿈
				//alert(pos);
	
		$('.imgG').stop().animate({marginLeft:pos-"100%"},function(){//pos-220에서 pos는 변수라 pos에 인용부호'' 못붙임
			//next 버튼 클릭시 다음 이미지로 계속 넘어가기 위해 작성
			$(this).css('margin-left','-100%');
			$('.imgG>li').first().appendTo('.imgG');
		});
	};	
	//왼쪽(prev) 버튼
	$('.btnL').click(function(){
		var pos = $('.imgG').css('margin-left');
		pos= parseInt(pos);

		$('.imgG').stop().animate({marginLeft:pos+"100%"},function(){
			//prev 버튼 클릭시 이전 이미지로 게속 넘어가기 위해 작성
			$(this).css('margin-left','-100%');
			$('.imgG>li').last().prependTo('.imgG');
		});
	});

//자동 실행 취소
//$btn.hover(function(){clearInterval(auto);},function(){auto = setInterval(slide,2000);});
$btn.mouseenter(function(){
	clearInterval(auto);
});
$btn.mouseleave(function(){
	auto = setInterval(slide, 2000);
});



});