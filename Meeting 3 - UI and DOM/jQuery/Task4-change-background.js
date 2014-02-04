(function(){
	$("#red-slider-value").val( $("#red-slider").val());
	$("#green-slider-value").val( $("#red-slider").val());
	$("#blue-slider-value").val( $("#red-slider").val());
	changeBackground();
	function changeBackground(){
		var color = "rgb(" + $("#red-slider-value").val() + ", " + $("#green-slider-value").val() + ", " + $("#blue-slider-value").val() + ")";
		$("body").css("background-color", color);
	}
	var sliders = $(".colorpick");
	function change(){
		if($(this).val() != $("#"+$(this).attr("id")+"-value").val()){
			$("#"+$(this).attr("id")+"-value").val($(this).val());
			changeBackground();
		}
	}
	function addMove(){
		$(this).on("mousemove",change);
	}
	for(var i = 0; i < sliders.length; i+=1){
		$(sliders[i]).on("mousedown", addMove);
	}
	var values = $(".value");
	for(var i = 0; i < values.length; i+=1){
		$(values[i]).change(function(){
			$("#" + $(this).attr("id").substring(0,$(this).attr("id").length - 6)).val($(this).val());
			changeBackground()
		})
	}
	
})();

