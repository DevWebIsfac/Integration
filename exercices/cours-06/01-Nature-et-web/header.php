<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Nature & Web</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
		<header>
			<div class="logo">
				<img src="img/logo-header.png" alt="Logo Nature & Web">
			</div>
			<nav>
				<ul>
					<li class="<?php if($page=="accueil"){ echo "active"; } ?>"><a href="index.php">Accueil</a></li>
					<li class="<?php if($page=="prestations"){ echo "active"; } ?>"><a href="prestations.php">Prestations</a></li>
					<li class="<?php if($page=="contact"){ echo "active"; } ?>"><a href="contact.php">Contact</a></li>
				</ul>
			</nav>
		</header>