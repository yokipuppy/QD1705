define(["jquery"],function($){

	var slide = function(){
	/*
		循环广告窗口实现方法：

		1、将第一张图片添加在最后一张图片的后面

	*/
		var iNow = 0;
		var oBtns = $(".banner ol").find("li");
		var oUl = $(".banner").find("ul")
		var isAnimate = false;

		//添加小圆点点击事件
		oBtns.click(function(){
			//当点击小圆点  切换到相应下标的图片
			iNow = $(this).index();
			tab(-1226);
		})

        //给箭头按钮添加事件
        //下一张
		$(".arrows").find("a").eq(1).click(function(){
			//点击按钮可以切换 但是 定时器不会暂停
			iNow++;
			if(!isAnimate){
                clearInterval(timer);
                tab(-1226);
            }
                clearInterval(timer);
             timer = setInterval(function(){
                if(!isAnimate){
                    timerInner();
                }
            }, 2000);

			
		})
        //上一张
		$(".arrows").find("a").eq(0).click(function(){
		    if(iNow == 0){
		        iNow = 4;
                oBtns.eq(4).attr("class", "active");

            }
			iNow--;
            if(!isAnimate){
                clearInterval(timer);
                tab(1226);
            }
            clearInterval(timer);
            timer = setInterval(function(){
                if(!isAnimate){
                    timerInner();
                }
            }, 2000);
			//切换图标的时候让定时器暂停
			//判断是否在运行动画
		})

		//e:添加移入移出事件
		oUl.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 2000);
		})


		//<1>定义一个函数 进行图片切换
		function tab(speed){
			isAnimate = true;
			oBtns.attr("class", "");
			//圆点动
			oBtns.eq(iNow).attr("class","active");
			//②图片动
			oUl.stop().animate({
				left: speed * iNow
			}, 500, function(){
				//console.log(oBtns.size());//5 也就是第六张图
				//重置
				 if(iNow >= oBtns.size()){
				 	$(".banner").find("ul").css("left",0);
				 	iNow = 0;
				 	oBtns.eq(0).attr("class", "active");
				 }
                // if(iNow <= oBtns.size() && speed < 0 ){
                //     $(".banner").find("ul").css("left",0);
                //     iNow = 0;
                //     oBtns.eq(0).attr("class", "active");
                // }

				 isAnimate = false;
			})
		}
		// <2>
		function timerInner(){
		    document.title = iNow;
			iNow++;
			tab(-1226);
		}

		//<3>声明一个定时器
		var timer = setInterval(function(){
			if(!isAnimate){
				timerInner();
			}
		}, 2000);









	}

	return {
		slide:slide
	}
})