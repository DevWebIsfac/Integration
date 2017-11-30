jQuery(document).ready(function($) {
	
	var nbLignes = 12;
	var nbColonnes = 24;
	var gameover = false;

	// on s'assure que le plateau aura un centre (les dimensions doivent être impaires)
	if (nbLignes % 2 == 0) { nbLignes++; }
	if (nbColonnes % 2 == 0) { nbColonnes++; }

	// Création de la table de jeu

		// - créer un tableau et l'ajouter dans le body
		var $table = $('<table></table>').appendTo($('body'));

		// - créer 12 lignes
		for(var i=0; i<parseInt(nbLignes); i++){ // for(var i=1; i<=nbLignes; i++){
			var $ligne = $('<tr></tr>').appendTo($table);
			
			// - créer 24 cellules dans chaque lignes
			for(var j=0; j<parseInt(nbColonnes); j++){
				var $cellule = $('<td></td>').appendTo($ligne);
			}
		}

	var posY = Math.round(nbLignes/2);
	var posX = Math.round(nbColonnes/2);

	function move(x,y){
		$('.player').removeClass('player');
		var cible = $('tr').eq(y-1).find('td').eq(x-1);

		if ( cible.hasClass('colored') ){
			gameover = true;
			cible.addClass('player gameover');
			
			var score = $('.colored').length;
			console.log('Game over. Votre score est : '+score);

			var $gameover = $('<div class="panel-gameover">Game over. Votre score est : '+score+'<button id="#bt">Rejouer</button></div>').appendTo($('body'));
		}
		else {
			cible.addClass('player colored');
		}
	}

	$('#bt').click(function(){
		
	});

	// Placer le joueur
	move(posX,posY);

	$(document).keydown(function(e) {
		if (!gameover) { // ou if (gameover == false)

			var playerHasMove= false;

			switch(e.which) {
				case 37: // left
					if (posX>1) { posX--; playerHasMove=true; }
					break;
				case 38: // top
					if (posY>1) { posY--; playerHasMove=true; }
					break;
				case 39: //right
					if(posX<nbColonnes){ posX++; playerHasMove=true; }
					break;
				case 40: // bottom
					if(posY<nbLignes){ posY++; playerHasMove=true; }
					break;
				default:
			}

			if (playerHasMove) {
				move(posX,posY);
			}
		}
	});


});