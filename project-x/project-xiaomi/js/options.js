define(['jquery'],function($){

	var options = function(){
		$("#option_wrap").on("mouseenter","li",function(){
		    var index = $(this).index();

			$(".little_ul").css("display","block")
			//动态加载数据
            getInfo(index);
		});
        $("#option_wrap").on("mouseleave","li",function(){
            $(".little_ul").css("display","none");
        })

        function getInfo(index){
            $.ajax({
                url:"../data/options.json",
                type:"GET",
                success: function(json){
                    // console.log(json);
                    var html = "";
                    var arr = json[index].items;
                    if(arr) {
                        for (var i = 0; i < arr.length; i++) {
                            html += `<li>
                                    <img src=${arr[i].img}>
                                    <a href="#">${arr[i].title}</a>
                                </li>`
                        }
                    }
                    $(".little_ul").find("ul").html(html);

                },
                error:function(err){
                    console.log(err);
                }
            })
        }
	}



	return {
		options: options
	}


})