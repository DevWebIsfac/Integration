<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title>Accueil</title>

        <!-- Meta viewport pour permettre le responsive -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <?php if ($page=='home') { ?>
            <link rel="stylesheet" href="js/slick/slick.css">
            <link rel="stylesheet" href="js/slick/slick-theme.css">
        <?php } ?>
        <link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
    	<header class="crop">
			<div class="header-logo">
    			<h1>JAMES <span>CONSULTING</span></h1>
    		</div>
    		<nav class="header-nav">
                <button class="toggle-menu">Menu <i class="fa fa-bars"></i></button>
    			<?php include('menu.php'); ?>
    		</nav>
    	</header>