require.config({

    paths:{
        "jquery":"jquery-1.11.1",

    }
});

require(["jquery"],function($){

    $(function() {
        //加号按钮
        $(".plusNum").click(function () {
            var uniPrice = $(this).parents(".col-num").siblings(".col-price").html();
            var num = $(this).parent().find("input").val();
            //数量增加
            num++;
            $(this).parent().find("input").val(num);
            countMoney.call($(this), num, uniPrice);
            //合计总价的修改
            if ($(this).parents(".item-row").find(".icon-checkbox1")
                    .css("background-color") == "rgb(255, 103, 0)") {

                showTotalPrice($(this), num);
            }
        })
        $(".sNum").click(function () {
            var uniPrice = $(this).parents(".col-num").siblings(".col-price").html();
            var num = $(this).parent().find("input").val();
            if (num == 1) {
                return;
            }
            num--;
            $(this).parent().find("input").val(num);
            countMoney.call($(this), num, uniPrice);
            //合计总价的修改
            if ($(this).parents(".item-row").find(".icon-checkbox1")
                    .css("background-color") == "rgb(255, 103, 0)") {

                showTotalPrice($(this), num);
            }
        })


        //计算价格用的
        var shopProducts = [];//[{id:id,price:price}]


        //给checkbox单选框添加点击事件
        $(".item-row").find(".icon-checkbox1").click(function () {
            var tPrice = parseInt($(this).parents(".item-row").find(".col-total").html());
            //该商品的数量
            var count = $(this).parents(".item-row").find("input").val();
            //如果被选择了 取消选择
            if ($(this).css("background-color") == "rgb(255, 103, 0)") {
                $(this).css({
                    "background-color": "#fff"
                })
                //从总价数组中删除
                shopProducts.splice($.inArray("id", shopProducts), 1);
                showTotalPrice($(this), count);
                //<3>去接算按钮修改
                $("#goCheckout").css({
                    background: "#e0e0e0",
                    borderColor: "#b0b0b0",
                    color: "#b0b0b0"
                })
                $("#J_noSelectTip").show();
            } else {
                $(this).css({
                    //选框涂红
                    "background-color": "#ff6700"
                })
                //将该产品的总价格添加到数组


                console.log(count);
                var data = {
                    id: "id",
                    price: tPrice,
                    count: count
                }
                shopProducts.push(data);

                //<1>已选择几件
                //<2>合计价格计算与显示
                showTotalPrice($(this), count);
                //<3>去结算按钮修改
                $("#goCheckout").css({
                    background: "#ff6700",
                    borderColor: "#ff6700",
                    color: "#fff"
                })
                $("#J_noSelectTip").hide();
            }

        })


        //商品删除按钮添加点击事件
        $(".icon-del").click(function () {
            if (confirm("确定要删除该商品吗？")) {
                //将总价格更新 这个地方要对加个进行减少 需要对showTotalPrice函数进行调整 不是全部都是累加
                var count = $(this).parents(".item-row").find("input").val();
                // showTotalPrice($(this),count);
                $(this).parents(".item-row").remove();


            } else {
                return;
            }

        })


        //计算钱的总数
        function countMoney(num, uniPrice) {
            //钱数减少
            var totalM = num * parseInt(uniPrice);
            // console.log($(this)); //window

            $(this).parents(".col-num").siblings(".col-total").html(totalM + "元");
        }


        //合计价格计算与显示
        function showTotalPrice(obj, num) {
            //先判断这个数组中有没有这个产品的id
            var tPrice = parseInt(obj.parents(".item-row").find(".col-total").html());
            //价格总和
            var Tp = 0;
            //统计数组中元素的count和
            var totalCount = 0;
            for (var i in shopProducts) {
                if (shopProducts[i].id == "id") {
                    // console.log(shopProducts);
                    //如果有 更新
                    shopProducts[i].price = tPrice;
                    shopProducts[i].count = num;
                }
                Tp += shopProducts[i].price;
                totalCount += shopProducts[i].count;
            }
            $("#J_cartTotalPrice").html(Tp);
            $("#totalNum2").html(totalCount);
        }
    })
})