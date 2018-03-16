define(["jquery"],function ($) {
    var slideToggle = function(){
        //自己滚动
        var timer = null;

        timer = setInterval(move,5000);

        //添加hover事件
        $(".rainbow_list").hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(move,5000);
        })

        //添加按钮点击事件
        $("#pre").click(function(){
            clearInterval(timer);
            move();
            timer = setInterval(move,5000);
        });
        $("#next").click(function(){
            clearInterval(timer);
            move();
            timer = setInterval(move,5000);

        })

        function move(){
            var left = $(".rainbow_list").css("left");
            if(left == "-1240px"){
                // console.log("b");
                $(".rainbow_list").stop().animate({
                    left: "0"
                },500)
                //按钮跟随
                $(".btns").find("a").eq(0).attr("class","");
                $(".btns").find("a").eq(1).attr("class","active");

            }else{
                // console.log("a");
                $(".rainbow_list").stop().animate({
                    left: "-1240px"
                },500)
                //按钮跟随
                $(".btns").find("a").eq(0).attr("class","active");
                $(".btns").find("a").eq(1).attr("class","");

            }
        }
    }

    return {
        slideToggle:slideToggle
    }
})