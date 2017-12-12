jQuery(document).ready(function($) {
	
	$('footer a').click(function(e){
		var idCible = $(e.currentTarget).index();

		$('.active').removeClass('active');
		$('.panel').eq(idCible).addClass('active');
		$('footer a').eq(idCible).addClass('active');
	});

});