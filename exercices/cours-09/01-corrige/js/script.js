jQuery(document).ready(function($) {

	// Diaporama avec slick-slider
	$('.diapo').slick({
		autoplay: true,
		fade: true
	});

	// Réglages des hauteurs avec matchHeight
	$('.card').matchHeight({
		byRow: true,
	});
});