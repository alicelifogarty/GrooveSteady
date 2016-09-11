jQuery(document).ready(function(){
	// audiojs.events.ready(function() {
 //    	var as = audiojs.createAll();
 //  	});

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

      jQuery('#toggler').on('click', function(){
    if (jQuery(this).hasClass("yellow")) {
      jQuery('.mobileNav').slideUp('slow');
      jQuery(this).removeClass('yellow');
    } else {
      jQuery('.mobileNav').slideDown('slow');
      jQuery(this).addClass('yellow');
    }
  });

    $( function() { $( 'audio' ).audioPlayer(); } );

});