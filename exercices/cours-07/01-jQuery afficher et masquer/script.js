jQuery(document).ready(function($){
	
	// Click est une méthode jQuery (c'est une fonction) :
	// 	- elle prend comme paramètre une fonction anonyme

	// Afficher / Masquer

	$("#afficher").click(function(e){
		$(".rectangle").show();
	});

	$("#masquer").click(function(e){
		$(".rectangle").hide();
	});

	$("#toggle").click(function(e){
		$(".rectangle").toggle();
	});


	// Afficher / Masquer avec des fondus

	$("#bt4").click(function(e) {
		$(".carre").fadeOut();
	});

	$("#bt5").click(function(e) {
		$(".carre").fadeIn();
	});

	$("#bt6").click(function(e) {
		$(".carre").fadeToggle();
	});


	// Afficher / Masquer avec des pliages/dépliages

	$("#bt7").click(function(e) {
		$(".container").slideUp();
	});

	$("#bt8").click(function(e) {
		$(".container").slideDown();
	});

	$("#bt9").click(function(e) {
		$(".container").slideToggle();
	});

	// Clique sur tous les boutons

	$("button").click(function(e){
		console.log(e);
	});

});