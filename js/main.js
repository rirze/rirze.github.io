/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {
    "use strict";

    // Init effect
    $('#scene').parallax();

    // Center and outline
    (function() {
	function centerInit(){
	    var hero            = $('#hero'),
		sphere          = $('.sphere'),
		sphereMargin    = ($(window).height() - sphere.height()) / 2,
		heroContent     = $('.hero-content'),
		contentMargin   = ($(window).height() - heroContent.height()) / 2;

	    hero.css ({
		height : $(window).height() + "px"
	    });

	    sphere.css({
		"margin-top" : sphereMargin + "px"
	    });

	    heroContent.css({
		"margin-top" : contentMargin + "px"
	    });
	}

	$(document).ready(centerInit);
	$(window).resize(centerInit);
    })();

    // Local scroll
    $('#hero').localScroll({
	duration:1000
    });

    // Light box init
    $('.lightbox').magnificPopup({
	type: 'image',
	 mainClass: 'mfp-with-zoom mfp-fade',

	zoom: {
	    enabled: true,

	    duration: 300,
	    easing: 'ease-in-out',

	    opener: function(openerElement) {
		return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	}
    });

};
/* END ------------------------------------------------------- */


/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

    initializeSite();

});
/* END ------------------------------------------------------- */


/* =Window Load Trigger
-------------------------------------------------------------- */
$(window).load(function(){

    //SKROLLR
    if (Modernizr.touch) {
	skrollr.init().destroy();
    } else {
	skrollr.init({
	    forceHeight: false
	});
    }

});
/* END ------------------------------------------------------- */
