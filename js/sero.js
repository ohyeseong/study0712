$(document).ready(function(){

    var n = 0; // 현재 보여지는 인덱스번호의 순서
    var moving = false;

    // 마우스 휠시 이벤트 발생(1)
    $("html, body").on("mousewheel DOMMouseScroll", function(e){
        console.log(e);
        // mosuewheel은 크롬 엣지 오페라에서 지원
        // DOMMouseScroll은 파이어폭스에서 지원
        
        var delta = e.originalEvent.wheelDelta
        console.log(delta);
        // 마우스 휠하면 콘솔창에서 
        // 양수, 음수값을 확인할수 있다

        var detail = e.originalEvent.detail
        console.log(detail)

        if(moving == false){
            moving = true;
            
            var h = $(window).innerHeight()
            console.log(h);// 높이값 945

            var con_top = $(".container").offset().top;
            console.log(con_top);

        if(delta < 0 || detail > 0){
            // ||는 또는
            // 스크롤 다운의 경우
            if(n < 4){
                n++ ;
                con_top -= h;
            }// n < 4되는데까지만 내려가게 한계값 설정

        }else if(delta > 0 || detail < 0){
            // 스크롤 업의 경우
            // con_top += h;
            // console.log("con_top2", con_top);

            if(n > 0){
                n-- ;
                con_top += h;
            }
        }//

        console.log("n :", n);
        console.log("con_top :", con_top);
        }// false  

        $(".container").animate({"top": con_top}, 500, function(){
            moving = false;
            // 스크롤이 한번만 되도록(2번이상 되지 않게)

            // 버튼과 연결(스크롤시)
            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");

            // 스크롤되면 fix_nav로 바뀌게
            if(n != 0){
                $(".fix_nav").addClass("on");
                $(".nav").addClass("on");
            }else{
                $(".fix_nav").removeClass("on");
                $(".nav").removeClass("on");
            }
            
        });// .container.animate
    })// mousewheel DOMMouseScroll

    $(".nav a, .fix_nav a, .btn_group a").click(function(){
        n = $(this).parent("li").index();
        
        // 클릭시 fix_nav로도 바뀌게
        if(n != 0){
            $(".fix_nav").addClass("on")
        }else{
            $(".fix_nav").removeClass("on")
        }
        
        // 메뉴와 버튼 클릭시 해당위치로 이동
        $(".btn_group li").removeClass("on");
        $(".btn_group li").eq(n).addClass("on");

        var con_top = -n * $(window).innerHeight();
        $(".container").animate({"top": con_top}, 500);
    })// .nav a, .fix_nav a, .btn_group a.click

    // 반응형으로 윈도우창의 크기가 달라져도 
    // 크기를 자동으로 인지해서 보여줌▼
    $(window).resize(function(){
        resize();
    })

    function resize(){
        var con_top = -n * $(window).innerHeight();
        $(".container").css({"top":con_top});
        $(".container .page").css({"width":window.innerWidth, "height":window.innerHeight})
    }
})// 제이커리 끝