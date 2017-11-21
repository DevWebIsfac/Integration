jQuery(document).ready(function($) {

	// Diaporama avec slick-slider
	if ( $('.diapo').length ) {
		$('.diapo').slick({
			autoplay: true,
			fade: true
		});
	}

	// Réglages des hauteurs avec matchHeight
	$('.card').matchHeight({
		byRow: true,
	});

	// Gestion du menu mobile
	$('.toggle-menu').click(function(){
		$('body').toggleClass('menu-is-open');
	});

});