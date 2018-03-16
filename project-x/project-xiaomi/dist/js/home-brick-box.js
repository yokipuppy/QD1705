define(['jquery'],function($){
    var homeBrickBox = function(){
            getInfo(0);

        //添加hover事件
        $(".brickNav_list").on("mouseenter","a",function(){
            var index = $(this).parent().index();
            //按钮颜色
            $(this).attr("class","active");
            $(this).parent().siblings().find("a").attr("class","");
            getInfo(index);

        })



        function getInfo(index){
            var html = "";

            $.ajax({
                url:"../data/home-brick-box.json",
                type:"GET",
                success: function(json){
                    var arr = json[index].items;
                    for(var i = 0;i < arr.length;i++){
                        html += `<li><img src=${arr[i].img}>
                                    <div class="text">
                                        <a href="#">${arr[i].title}</a>
                                        <p class="desc">${arr[i].desc}</p>
                                        <p class="price">${arr[i].price}</p>
                                    </div>
                                  </li>`
                    }
                    $(".ul_1").html(html);
                },
                error:function(err){
                    console.log(err);
                }
            })
        }
    }

    return {
        homeBrickBox:homeBrickBox
    }
})