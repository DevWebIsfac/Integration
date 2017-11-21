jQuery(document).ready(function($) {
	
	$('.item-title').click(function(event){
		var item = $(event.currentTarget).parent();
		
		// Enlever la classe tabs-active actuelle
		$('.tabs-item').removeClass('tabs-active');

		// Mettre la classe tabs-active sur le item-content corresponsdant
		item.addClass('tabs-active');
	});

	var nb_items = $('.tabs-item').length;
	var maxWidth = (100 / nb_items)+'%';
	
	$('.tabs-item').css("max-width", maxWidth);
});