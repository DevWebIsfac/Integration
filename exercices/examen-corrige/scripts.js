function validateEmail(Email) {
	var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return $.trim(Email).match(pattern) ? true : false;
}

jQuery(document).ready(function($) {
	
	// Vérification du formulaire

	$form = $('footer .form');

	$nom = $('#nom');
	$email = $('#email');
	$message = $('#message');

	$form.submit(function(){

		valid = false;
		nom_isValid = false;
		email_isValid = false;
		message_isValid = false;

		// Vérification du nom
		if ( $nom.val().length > 2 ) {
			nom_isValid = true;
			
			$nom.removeClass('input-error').addClass('input-success');
			$nom.next('.error').remove();
		}
		else {
			if ( $nom.val().length == 0 ) {
				$erreurNom = $('<div class="error">Ce champ ne peut être vide</div>');
			}
			else {
				$erreurNom = $('<div class="error">Ce champ doit être plus long</div>');
			}
			$nom.next('.error').remove();
			$nom.parent().append($erreurNom);
			$nom.addClass('input-error');
		}

		// Vérification de l'email
		if ( validateEmail($email.val()) ) {
			email_isValid = true;
			
			$email.removeClass('input-error').addClass('input-success');
			$email.next('.error').remove();
		}
		else {
			$erreurEmail = $('<div class="error">Ce champ n\'est pas valide</div>');
			
			$email.next('.error').remove();
			$email.parent().append($erreurEmail);
			$email.addClass('input-error');
		}

		// Vérification du message
		if ( $message.val().length > 2 ) {
			message_isValid = true;
			
			$message.removeClass('input-error').addClass('input-success');
			$message.next('.error').remove();
		}
		else {
			if ( $message.val().length == 0 ) {
				$erreurMessage = $('<div class="error">Ce champ ne peut être vide</div>');
			}
			else {
				$erreurMessage = $('<div class="error">Ce champ doit être plus long</div>');
			}
			$message.next('.error').remove();
			$message.parent().append($erreurMessage);
			$message.addClass('input-error');
		}
		
		return nom_isValid && email_isValid && message_isValid;

	});

	// Menu mobile

	$('body').on('click', '.toggle-menu', function() {
		$('.header-nav').toggleClass('is-open');
		$('.overlay').toggleClass('is-visible toggle-menu');
	});

});