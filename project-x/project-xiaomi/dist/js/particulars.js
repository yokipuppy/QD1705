require.config({
	paths:{
		"jquery":"jquery-1.11.1",
        "jquery-cookie": "jquery.cookie"
	},
    shim:{
        "parabola": {
            exports: "_"
        },
        //设置依赖关系
        "jquery-cookie": ["jquery"]
    }
})



require(["jquery","jquery-cookie"], function($){
    countCart();
    // 购物车按钮添加效果
    $("#shopBtn").hover(function(){
        var str = eval($.cookie('goods'));
        if(str){
            //动态加载 购物车中的商品
            getInfo();


            $(".shop_pros").stop().slideDown("slow");

        }else{
            $(".shopMenu").stop().slideDown("slow");
        }
    },function(){
        $(".shop_pros").stop().slideUp("slow");
        $(".shopMenu").stop().slideUp("slow");
    });



    function getInfo(){
        var str = eval($.cookie('goods'));
        if(!str){
            $(".cart_list").html("");
            return;
        }
        //cookie中商品id 根据id加载商品
        //加载数据
        $.ajax({
            url:"../data/shopList.json",
            type:"GET",
            success:function(json){
                //修改总价
                var totalP=0;
                var totalCount = 0;
                var html = "";
                //循环cookie
                for(var j = 0; j < str.length; j++){
                    totalCount += str[j].count;
                    for(var i = 0; i < json.length;i++){

                        if(str[j].id == json[i].id){
                            totalP += str[j].count * json[i].price;
                            html += `<li>
                                        <div class="cart_item">
                                            <img src=${json[i].img}>
                                            <div class="text">
                                                <a href="#" class="desc">${json[i].desc}</a>
                                                <span class="price">${json[i].price}元 x<i class="pro_num">${str[j].count}</i></span>
                                            </div>
                                        </div>
                                    </li>`
                        }
                    }
                }

                $(".cart_list").html(html);
                $(".total").find("em").html(totalCount);
                $(".price").find("em").html(totalP);

                    countCart();


            },
            error:function(err){
                console.log(err);
            }

        })
    }
    //计算购物车数字
    function countCart(){
        var str = eval($.cookie('goods'));
        var totalCount = 0;
        if(str){
            for(var i = 0;i<str.length;i++){
                totalCount += str[i].count;
            }
            $(".shopCart1").addClass("active");
            $(".shopCart1").html(`<i class='iconfont icon-gouwucheman'></i>购物车(${totalCount})`);
        }




    }




	//点击事件  选中商品的种类
	$("#step-list").find("li").click(function(){
		$(this).siblings().attr("class","");
		$(this).attr("class","active");
		return false;
	})


    //加入购物车按钮
    $(".shop-btn").find("a").click(function(){
        //将该产品添加到购物车
        //伪造一个id
        var id = 1;
        // var price = 999;
        alert($.cookie("goods"));
        //判断购物车中有没有商品 是不是空的购物车
        var first = $.cookie("goods") == null ? true:false;
        if(first){
            //如果是第一次也就是之前没有
            //cookie内容格式 [{id:id,price:price,count:1}]
            $.cookie("goods","[{id:"+ id +",count:1}]",{
                expires:7
            })
        }else{
            //购物车不为空 进一步判断有没有这个商品
            var proList = eval("("+ $.cookie('goods')+ ")");
            // var proList = JSON.parse($.cookie('goods'));
            // console.log(proList);
            var same = false;
            for(var i in proList){
                if(proList[i].id == id){
                    //有该商品 数量加1

                    proList[i].count++;
                    var newProList = JSON.stringify(proList);
                    $.cookie("goods",newProList,{
                        expires:7
                    })
                    same = true;
                    break;
                }
            }
            if(!same){
                // console.log(3);
                //如果没有这个商品
                $.cookie("goods","[{id:"+ id + ",count:1}]",{
                    expires:7
                })
            }
        }

    })




})