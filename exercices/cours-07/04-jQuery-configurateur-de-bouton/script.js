jQuery(document).ready(function($) {
	
	// Fonctions

	var updateTextBtn = function(){
		$(".button").text( $("#btn-text").val() );
	};

	var updateCode = function(){
		$(".code code").text( $(".button").prop("outerHTML") );
	};



	// Évènements click sur les boutons

	$("#changePad").click(function(e) {
		$(".button").toggleClass('button-pad');
		updateCode();
	});

	$("#changeSize").click(function(e) {
		$(".button").toggleClass('button-large');
		updateCode();
	});

	$("#changeBorder").click(function(e) {
		$(".button").toggleClass('button-round');
		updateCode();
	});

	$("#changeColor").click(function(e) {
		$(".button").toggleClass('button-color');
		updateCode();
	});

	$("#reset").click(function(e) {
		$(".button").removeClass('button-pad button-large button-round button-color');
		updateCode();
	});


	// Initialisation
	
	updateTextBtn();
	updateCode();

	

	$("#btn-text").keyup(function(e) {
		updateTextBtn();
	});


});