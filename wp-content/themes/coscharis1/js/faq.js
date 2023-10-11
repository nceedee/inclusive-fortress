$(function(){
	
	$("dd.answer")
		.hide();

	$("dd.answer2")
		.hide();

	$("dd.answer3")
		.hide();
		
	$("dd.answer4")
		.hide();
		
	$("dd.answer5")
		.hide();
		
	$("dd.answer6")
		.hide();								
							
		
	$(".answer-tab")
		.click(function(){
			$("dd.answer2").hide();
			$("dd.answer3").hide();
			$("dd.answer4").hide();
			$("dd.answer5").hide();
			$("dd.answer6").hide();
			
			$(this)
				.parent().parent()
				.find("dd.answer")
				.slideToggle();
            return false;
			
			
		});
		

		
	$(".answer-tab2")
		.click(function(){
			$("dd.answer").hide();
			$("dd.answer3").hide();
			$("dd.answer4").hide();
			$("dd.answer5").hide();
			$("dd.answer6").hide();			
			$(this)
				
				.parent().parent()
				.find("dd.answer2")
				.slideToggle();
            return false;
		});

	$(".answer-tab3")
		.click(function(){
			$("dd.answer").hide();
			$("dd.answer2").hide();
			$("dd.answer4").hide();
			$("dd.answer5").hide();
			$("dd.answer6").hide();	
			$(this)
				
				.parent().parent()
				.find("dd.answer3")
				.slideToggle();
            return false;
		});
		
	$(".answer-tab4")
		.click(function(){
			$("dd.answer").hide();
			$("dd.answer2").hide();
			$("dd.answer3").hide();
			$("dd.answer5").hide();
			$("dd.answer6").hide();	
			$(this)
				
				.parent().parent()
				.find("dd.answer4")
				.slideToggle();
            return false;
		});
		
	$(".answer-tab5")
		.click(function(){
			$("dd.answer").hide();
			$("dd.answer2").hide();
			$("dd.answer3").hide();
			$("dd.answer4").hide();
			$("dd.answer6").hide();	
			$(this)
				
				.parent().parent()
				.find("dd.answer5")
				.slideToggle();
            return false;
		});
		
	$(".answer-tab6")
		.click(function(){
			$("dd.answer").hide();
			$("dd.answer2").hide();
			$("dd.answer3").hide();
			$("dd.answer4").hide();
			$("dd.answer5").hide();	
			$(this)
				
				.parent().parent()
				.find("dd.answer6")
				.slideToggle();
            return false;
		});								
		
				
});
