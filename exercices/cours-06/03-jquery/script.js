// on attend que le document soit prêt
jQuery(document).ready(function($) {
	
	// Votre code JavaScript avec jQuery
	var titre = $("h1");
	console.log(titre);

	// Changer le code CSS avec jQuery
	// utiliser une syntaxe camelCase

	// SET : Changer une propriété CSS (2 paramètres)
	$("body").css("backgroundColor","#f00");

	// GET : recupère la valeur d'une propriété CSS (1 paramètre)
	var color = $("body").css("backgroundColor");
	console.log(color);

	// Masquer un élément
	titre.hide(1500);

	// Afficher un élément
	$("p").show(2000);


});