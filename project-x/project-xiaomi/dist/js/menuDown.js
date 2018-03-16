define(["jquery"],function($){
    var menuDown = function(index){

        $.ajax({
            url:"../data/data.json",
            type:"GET",
            success: function(json){
                //拿到数据json已经是解析好的了
                var html = "";
                var arr = json[index];
                if(arr) {
                    for (var i = 0; i < arr.items.length; i++) {
                        html += `<li class="produs">
                                    <img src=${arr.items[i].img}>
                                    <div class="text">
                                        <a href="#">${arr.items[i].title}</a>
                                        <p class="price">${arr.items[i].price}</p>
                                    </div>
                                </li>`
                    }
                }
                $(".down_ul").find("ul").html(html);
            },
            error:function(err){
                console.log(err);
            }
        })





    }


    return {
        menuDown:menuDown
    }
})