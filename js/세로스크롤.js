$(function(){
    var n= 0 ; // 현재 보여지는 section page 인덱스 번호 0 1 2 3 4 
    var moving = false;


    $("html, body").on("mousewheel DOMMouseScroll", function(e){
        // console.log(e);

        var delta = e.originalEvent.wheelDelta;  //  mousewheel 크롬 엣지 오페라
        console.log(delta);  //-120(down)         +120(up)

        var detail =e.originalEvent.detail; //DOMMouseScroll  파이어폭스
        console.log(detail); //  3(down)  -3(up)


        if( moving == false){
            moving = true;

            var h = $(window).innerHeight();
        console.log("h : " , h);

        var con_top = $(".container").offset().top;
        console.log("con_top : " , con_top);

                    // -120           3 mouse down
        if( delta < 0 ||  detail >0 )  {

            if(n < 4){
                n++;
                con_top -= h;
            }// if(n < 4)           
            

        }else if(delta > 0 ||  detail < 0 ){
                //  + 120            -3   mouse up
                if(n>0){
                    n--;
                    con_top += h;
                }// if(n>0)
                

        }// if up down

        console.log("n : " , n)
        console.log("con_top 1 : " , con_top)
    
    }// moving false



    })//mousewheel DOMMouseScroll



})//jquery