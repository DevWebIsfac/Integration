/* jQuery Validate Emails with Regex */
function validateEmail(Email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return $.trim(Email).match(pattern) ? true : false;
}


jQuery(document).ready(function($) {

	var $errorNom = $('<div class="error"></div>');
	var $errorPrenom = $('<div class="error"></div>');
	var $errorEmail = $('<div class="error"></div>');
	var $errorMessage = $('<div class="error"></div>');
	
	$('#form').submit(function(){

		var valid = true;
		
		var nom = $('#name').val();
		var prenom = $('#firstname').val();
		var email = $('#mail').val();
		var message = $('#message').val();

		// Vérification du nom
		if (nom.length < 3) {
			valid = false;

			if(nom.length == 0){
				$errorNom.text('Ce champ ne peut être vide');
			}
			else {
				$errorNom.text('Ce champ doit comporter au moins 3 caractères');
			}
			
			$('#name').after($errorNom);
		}
		else {
			$errorNom.remove();
		}

		// Vérification du prénom
		if (prenom.length < 3) {
			valid = false;

			if(prenom.length == 0){
				$errorPrenom.text('Ce champ ne peut être vide');
			}
			else {
				$errorPrenom.text('Ce champ doit comporter au moins 3 caractères');
			}

			$('#firstname').after($errorPrenom);
		}
		else {
			$errorPrenom.remove();
		}

		console.log(validateEmail(email));

		// Vérification de l'email
		if (email.length==0) {
			valid = false;
			$errorEmail.text('Ce champ est obligatoire');
			$('#mail').after($errorEmail);
		}
		else if( !validateEmail(email) ) {
			valid = false;
			$errorEmail.text('L\'adresse n\'est pas valide');
			$('#mail').after($errorEmail);
		}
		else {
			$errorEmail.remove();
		}

		// Vérification du message
		if (message.length < 10) {
			valid = false;

			if(message.length == 0){
				$errorMessage.text('Ce champ ne peut être vide');
			}
			else {
				$errorMessage.text('Ce champ doit comporter au moins 10 caractères');
			}

			$('#message').after($errorMessage);
		}
		else {
			$errorMessage.remove();
		}

		return valid;
	});

});