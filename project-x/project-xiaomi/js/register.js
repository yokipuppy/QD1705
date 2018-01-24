require.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"jquery-cookie":"jquery.cookie",
		"check":"check"
	},
	//处理依赖
	shim:{
		"jquery-cookie":["jquery"]
	}
})



require(["jquery","check"],function($,check){

	$(function(){
		$("btn_r").click(function(){
			alert(1);
			// check.check($("#username"),$("#notice"));
		
		});
	})

})