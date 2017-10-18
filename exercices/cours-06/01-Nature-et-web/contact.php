<?php
    $page="contact";
    include('header.php');
?>

<div class="container">

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87748.05763899224!2d0.3014290853819988!3d46.58473061167415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdbe72439eb3ab%3A0x97de2319c5e09093!2s86000+Poitiers!5e0!3m2!1sfr!2sfr!4v1508329848014" width="960" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

    <h1>Contact</h1>

    <form action="traitement-formulaire.php" method="post">
        
        <div class="form-input">
            <label for="nom">Nom</label>
            <input type="text" name="nom" id="nom">
        </div>
        <div class="form-input">
            <label for="prenom">Prénom</label>
            <input type="text" name="prenom" id="prenom">
        </div>
        <div class="form-input">
            <label for="mail">Email</label>
            <input type="email" name="mail" id="mail">
        </div>
        <div class="form-input">
            <label for="adresse1">Adresse</label>
            <input type="text" name="adresse1" id="adresse1">
        </div>
        <div class="form-input">
            <label for="adresse2">Adresse (suite)</label>
            <input type="text" name="adresse2" id="adresse2">
        </div>
        <div class="form-input">
            <label for="cp">Code postal</label>
            <input type="text" name="cp" id="cp">
        </div>
        <div class="form-input">
            <label for="ville">Ville</label>
            <input type="text" name="ville" id="ville">
        </div>
        <div class="form-input">
            <label for="message">Votre message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div class="form-input no-label">
            <input name="news" id="news" type="checkbox" checked="checked" />
            <label for="news">Recevoir la newsletter</label>
        </div>
        <div class="form-input no-label">
            <input type="submit" value="Envoyer le message" />
        </div>
    </form>
</div>

<?php include('footer.php'); ?>