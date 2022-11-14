    	//    MOBILE MENU
    	function mobilemenu() {
    	    $(".mobile-menu").toggleClass("add-class");
    	    $(".mobile-screen").toggleClass("addstyle");
    	}


    	// scrollToTop
    	var btn = $('#button');

    	btn.on('click', function (e) {
    	    e.preventDefault();
    	    $('html, body').animate({
    	        scrollTop: 0
    	    }, '300');
    	});
    	//end scrollToTop
