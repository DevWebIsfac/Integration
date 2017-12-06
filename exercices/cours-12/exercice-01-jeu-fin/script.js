jQuery(document).ready(function($) {

	// --------------------------------------------------------------------
	// Variables 

	var nbLignes = 12;
	var nbColonnes = 24;
	var gameover = false;
	var posX;
	var posY;
	var score = 0;
	var $gameover;
	var cible;

	// --------------------------------------------------------------------
	// Fonctions 

	function initGame(){
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
	}

	function gameOver(){
		gameover = true;
		cible.addClass('player gameover');
		
		score = $('.colored').length;
		console.log('Game over. Votre score est : '+score);

		$gameover = $('<div class="panel-gameover">GAME OVER<br/>Votre score est : '+score+'<br/><button id="bt">Rejouer</button></div>').appendTo($('body'));
	}

	function move(x,y){
		$('.player').removeClass('player');
		cible = $('tr').eq(y-1).find('td').eq(x-1);

		if ( cible.hasClass('colored') ){
			gameOver();
		}
		else {
			cible.addClass('player colored');
		}
	}

	function initPlayer(){
		posX = Math.round(nbColonnes/2);
		posY = Math.round(nbLignes/2);

		move(posX,posY);
	}

	function restart(){
		// On vide le jeu : Retirer les classes gameover, player et colored
		$('.colored, .gameover, .player').removeClass('colored gameover player');
		gameover = false;
		$gameover.remove();
		initPlayer();
	}

	// --------------------------------------------------------------------
	// Évènements

	// Celui-ci fonctionnera
	$(document).on('click', '#bt', function(){
		console.log("Restart");
		restart();
	});

	// Gestion du clavier (flèches)
	$(document).keydown(function(e) {
		console.log(e.which);
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
		else {
			// 32 : Espace
			// 13 : Entrée
			if ( (e.which == 32) || (e.which == 13) ) {
				restart();
			}
		}
	});

	// --------------------------------------------------------------------
	// Initialisation 

	// Initalise la table de jeu
	initGame();

	// Placer le joueur
	initPlayer();
	

});