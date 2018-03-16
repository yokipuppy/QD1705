require.config({

	paths:{
		"jquery":"jquery-1.11.1",
		"fadeInOut":"fade-in-out"

	},
    shim:{
        "parabola": {
            exports: "_"
        },
        //设置依赖关系
        "jquery-cookie": ["jquery"]
    }
})


require(['jquery','menuDown'], function($,menuDown){
    //购物车按钮添加效果
    $("#shopBtn").hover(function(){
        $(".shopMenu").stop().slideDown("slow")
    },function(){
        $(".shopMenu").stop().slideUp("slow")
    });



    // 导航栏效果 大下拉菜单
	$(".nav").on("mouseenter","li",function(){
	    //获取li的下标
        var index = $(this).index();
        if(index == 5 || index >=8){
            return;
        }
        //动态加载数据
        menuDown.menuDown(index);
	    $(".down_ul").stop().slideDown();

    });

        $(".nav").on("mouseleave", "li", function () {

            $(".down_ul").hover(function () {
                $(".down_ul").css("display", "block");
            }, function () {
                $(".down_ul").stop().slideUp();
            })
        });
    $(".nav").on("mouseleave", "li", function () {
        $(".down_ul").css("display","none")
    })







	//定义一个函数对jsonP返回的数据进行处理
	

	$(function(){
		//给搜索框添加事件
		$("#search").keyup(function(){
			if($(this).val() != ""){
				var oScript = document.createElement("script");
				oScript.src = `http://suggestion.baidu.com/su?wd=${this.value}&cb=fu`;
				document.body.appendChild(oScript);
			}else{
				$("#search_ul").css("display","none");
			}
		})
	})
})

//轮播图
require(["slide"],function(slide){

	slide.slide();

})

require(["options"],function(options){

	options.options();

})
require(["slideToggle"],function(slideToggle){

    slideToggle.slideToggle();

})
require(["home-brick-box"],function(homeBrickBox){

    homeBrickBox.homeBrickBox();

})


