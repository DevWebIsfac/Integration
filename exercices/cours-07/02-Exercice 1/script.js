jQuery(document).ready(function($){

	$("#changeColor").click(function(e){
		$(".element").css("color", "#f00");
	});

	$("#changeBg").click(function(e){
		$(".element").css("backgroundColor", "#0F0");
	});

	$("#changeFont").click(function(e){
		$(".element").css("fontFamily", "sans-serif");
	});

	$("#reset").click(function(e){
		
		// Méthode 1 : méthode css x3
		// $(".element").css("color", "#000");
		// $(".element").css("backgroundColor", "#FFF");
		// $(".element").css("fontFamily", "serif");

		// // Méthode 2 : méthode css multiple
		// $(".element").css({
		// 	"color": "#000",
		// 	"backgroundColor" : "#fff",
		// 	"fontFamily": "serif"
		// });

		// Méthode 3
		// avec la méthode .attr(), on vide la valeur de l'attribut style
		$(".element").attr("style", "");
	});

});