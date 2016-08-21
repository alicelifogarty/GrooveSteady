jQuery(document).ready(function(){
	audiojs.events.ready(function() {
    	var as = audiojs.createAll();
  	});

	// Navbar

  	// hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

});