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


require(["jquery","jquery-cookie"], function($) {
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
})