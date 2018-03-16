require.config({

    paths:{
        "jquery":"jquery-1.11.1",

    }
})



require(['jquery'], function($) {
    //购物车按钮添加效果
    $("#shopBtn").hover(function () {
        $(".shopMenu").stop().slideDown("slow")
    }, function () {
        $(".shopMenu").stop().slideUp("slow")
    });
});