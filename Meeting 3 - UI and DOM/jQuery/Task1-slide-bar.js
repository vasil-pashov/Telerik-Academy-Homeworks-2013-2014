(function (){
	var slides = [];
	var intervalId = setInterval(displayNextSlide, 3000);
	var slide = $("#current-slide");
	$(slide).attr("data-current", "none");
	function addSlide(content){
		if($(slide).attr("data-current") === "none"){
			$(slide).attr("data-current", 0);
			$(slide).html(content);
		}
		
		slides.push(content);
	}
	function displayPreviousSlide(){
		var pos = $(slide).attr("data-current") | 0;
		clearInterval(intervalId);
		intervalId = setInterval(displayNextSlide, 3000);
		if(pos > 0){
			$(slide).html(slides[pos-1]);
			$(slide).attr("data-current", pos-1);
		}
		else{
			$(slide).html(slides[slides.length - 1]);
			$(slide).attr("data-current", slides.length - 1);
		}
	}
	function displayNextSlide(){
		
		var pos = $(slide).attr("data-current") | 0;
		clearInterval(intervalId);
		intervalId = setInterval(displayNextSlide, 3000);
		if(pos !== slides.length - 1){
		
			$(slide).html(slides[pos+1]);
			$(slide).attr("data-current", pos+1);			
		}
		else{
			$(slide).html(slides[0]);
			$(slide).attr("data-current", 0);
		}
	}
	$("#previous-slide").click(displayPreviousSlide);
	$("#next-slide").click(displayNextSlide);
	addSlide("<h1>A heading</h1>");
	addSlide("<p>A paragraph</p>");
	
})();