jQuery(document).ready(function($) {
	
	// On créé un tableau vide
	var arr = [];

	// On sélectionne les deuxième td de chaque ligne
	var notes = $('td:nth-child(2)');
	//console.log(notes);

		// Ne pas confondre avec la méthdode .eq()
		// Exemple : var test = $('td').eq(1); 
		// Ici on ne récupère que la première note => on prend toutes les cellules et on ne récupère qua la deuxième (avec 1 car cela commence à 0)

	// On parcours les notes sélectionnées et on stocke la valeur dans le tableau
	notes.each(function(){

	 	// on récupère le texte de la cellule, on remplace les virgules par des points et on convertit en nombre
	 	var nb = parseFloat( $(this).text().replace(',','.') );

	 	// On le stocke dans le tableau
	 	arr.push(nb);
	});

	console.log(arr);

	var somme = 0;

	for ( var i=0; i<arr.length; i++) {
		somme += arr[i];
		// OU somme = somme + arr[i]
	}
	console.log('Somme = ' + somme);

	// on calcul la moyenne
	var moyenne = somme / arr.length;
	console.log('Moyenne = ' + moyenne);

	// on arrondi 2 chiffres après la virgule
	var moyenne = Math.round( moyenne * 100 ) / 100;
	console.log('Moyenne arrondie = ' + moyenne);

	// Création d'un élément div

	// var div $('<div class="moyenne"></div>');
	// div.text('Moyenne : '+moyenne);
	// ou :
	var div = $('<div></div>').text('Moyenne : '+moyenne).addClass('moyenne');

	

	$('#bt').click(function(){

		if ( $('body').hasClass('show') ) {
			// on masque les éléments et on enlève la class
			$('body').removeClass('show');
			$('#bt').text('Afficher les infos');
			div.remove();
			$('td').attr('style','');
		}
		else {
			// on fait nos modifs et on ajoute la class
			$('body').addClass('show');
			$('#bt').text('Masquer les infos');
			
			// on ajoute cet élément à la fin du body
			// prepend() l'ajouterai au début
			$('body').append(div); // ou en inversé : div.appendTo($('body'));

			// On change la couleur des notes
			notes.each(function(){
			 	var note = parseFloat( $(this).text().replace(',','.') );

			 	if ( note < moyenne ) {
		 			$(this).css('color','orange');
			 	}
			 	else {
			 		$(this).css('color','green');
			 	}
			 	if ( note < 10 ) {
		 			$(this).css('color','red');
			 	}

			});
		}




	});



});