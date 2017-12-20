jQuery(document).ready(function($){

  $('.chat-form textarea').focus(function(){
    $(this).addClass('is-typing');
  });

  $('.chat-form textarea').blur(function(){
    $(this).removeClass('is-typing');
  });

});
