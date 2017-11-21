<?php
    $page = 'home';
    include('header.php');
?>

<div class="container crop">
	<div class="diapo">
        <div class="diapo-item">
            <img src="img/diapo-01.jpg" alt="intro" />
            <div class="legend">
                <div class="legend-title">SERVICES</div>
                <div class="legend-subtitle">Some people dream of success. We make it happen.</div>
            </div>
        </div>
        <div class="diapo-item">
            <img src="img/diapo-02.jpg" alt="intro" />
            <div class="legend">
                <div class="legend-title">PROJETS</div>
                <div class="legend-subtitle">Some people dream of success. We make it happen.</div>
            </div>
        </div>
        <div class="diapo-item">
            <img src="img/diapo-03.jpg" alt="intro" />
            <div class="legend">
                <div class="legend-title">CLIENTS</div>
                <div class="legend-subtitle">Some people dream of success. We make it happen.</div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col col-4-12">
           <div class="card">
                <h2>Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea impedit nesciunt esse odio dicta aliquid voluptates repellat </p>
                <a href="#" class="btn">En savoir +</a>
            </div> 
        </div>
        <div class="col col-4-12">
            <div class="card">
                <h2>Projets</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum autem incidunt fuga ut vero optio possimus doloremque nesciunt impedit. Delectus incidunt dolores modi ducimus placeat odio maxime, praesentium iusto architecto!</p>
                <a href="#" class="btn">En savoir +</a>
            </div>
        </div>
        <div class="col col-4-12">
            <div class="card">
                <h2>Clients</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate enim facilis distinctio obcaecati fugiat quis in ex, iste aperiam! Expedita moles ullam temporibus? Ullam fugit, libero.</p>
                <a href="#" class="btn">En savoir +</a>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col col-8-12">
            <div class="edito">
                <h2 class="edito-title">Edito</h2>

                <div class="row">
                    <div class="col col-6-12">
                        <img src="img/edito.jpg" alt="" class="edito-img">
                    </div>
                    <div class="col col-6-12">
                        <div class="edito-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore veritatis rem blanditiis dolores ea laboriosam, possimus voluptatibus. Voluptatum perspiciatis ex fugiat ea nihil nam, impedit consectetur laboriosam non, a explicabo.</p>
                            <a href="#">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col col-4-12">
            <div class="temoignages">
                <h2 class="temoignages-title">Temoignages</h2>
                <blockquote>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium esse porro, ea accusamus error expedita, numquam voluptatum sint tempore blanditiis at, reiciendis vel quis ab, perferendis qui ut dicta a?</div>
                    <cite>Samantha Jones, Project Manager</cite>
                </blockquote>
            </div>
        </div>
    </div>
</div>

<?php include('footer.php'); ?>