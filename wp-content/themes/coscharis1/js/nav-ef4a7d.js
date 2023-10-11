$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".themain").addClass("scrolling");
		$('.themain.original').css('opacity', '0');
		$('.themain.navbar-fixed-top').css('opacity', '1');
    } else {
        $(".themain").removeClass("scrolling");
		$('.themain.original').css('opacity', '1');
		$('.themain.navbar-fixed-top').css('opacity', '0');
    }

	
	
	
});




