<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Title Page -->
    <title>Ulide Party</title>
</head>
<body>
<header>
    <?php include "menu.php"?>
</header>
<main>
    <section>
        <!-- Slider (Carousel) -->
        <div class="container-fluid slider">
            <div id="mainSlider" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#mainSlider" data-slide-to="0" class="active"></li>
                    <li data-target="#mainSlider" data-slide-to="1"></li>
                    <li data-target="#mainSlider" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner overlay">
                    <div class="carousel-item active">
                        <img src="img/rest01.webp" class="d-block w-100" alt="Descrição 01">
                        <div class="carousel-caption d-md-block">
                            <h2>Local 01</h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/rest02.webp" class="d-block w-100" alt="Descrição 02">
                        <div class="carousel-caption d-md-block">
                            <h2>Local 02</h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/rest03.webp" class="d-block w-100" alt="Descrição 03">
                        <div class="carousel-caption d-md-block">
                            <h2>Local 03</h2>
                        </div>
                    </div>
                </div>
                <a href="#mainSlider" class="carousel-control-prev" role="button" data-slide="prev">
                    <i class="fi-br-angle-left" aria-hidden="true"></i>
                    <span class="sr-only">Previous</span>
                </a>
                <a href="#mainSlider" class="carousel-control-next" role="button" data-slide="next">
                    <i class="fi-br-angle-right" aria-hidden="true"></i>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <!-- End Slider (Carousel) -->
    </section>
    <div id="info-spots" class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-10 p-0">
                        <h2>Endereço</h2>
                        <h3>Outras informações</h3>
                    </div>
                    <div class="col-2 p-0 align-self-center text-center">
                        <span class="b-style">Nota <i class="fi-sr-star"></i></span> <h6>2,548 Avaliações</h6>
                    </div>
                </div>
                <div class="row">
                    <div id="info-buttons" class="col"><button class="b-style"><i class="fi fi-sr-heart"></i> Favorito</button> <button class="b-style-off"><i class="fi fi-sr-comment"></i> Avaliar</button> <button class="b-style-off"><i class="fi fi-br-link"></i> Compartilhar</button> <button class="b-style-off"><i class="fi fi-br-edit"></i> Editar local</button></div>
                </div>
                <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-eval-tab" data-toggle="pill" href="#pills-eval" role="tab" aria-controls="pills-eval" aria-selected="false">Avaliações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-menu-tab" data-toggle="pill" href="#pills-menu" role="tab" aria-controls="pills-menu" aria-selected="false">Ementa</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="row">
                            <div class="col-6">
                                <h4>Sobre</h4>
                                <p>Informações sobre o local</p>
                                <h4>Localização e Contacto</h4>
                                <p>Endereço</p>
                                <p>Telefone</p>
                                <p>Email</p>
                            </div>
                            <div class="col-6 p-0 card-body">
                                <?php include "map.php" ?>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-eval" role="tabpanel" aria-labelledby="pills-eval-tab">
                        <div class="row">
                            <div class="col-7">
                                <h4>Todas as opiniões</h4>
                                <div class="card">
                                    <div class="card-header">
                                        imagem e nome e avalição individual
                                    </div>
                                    <div class="card-body">
                                        comentário
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <h4>Todas as avaliações</h4>
                                <div class="card">
                                    <div class="card-header">
                                        avaliação total
                                    </div>
                                    <div class="card-body">
                                        tabela com as classificações das estrelas e quantidade
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-menu" role="tabpanel" aria-labelledby="pills-menu-tab">
                        <div class="row justify-content-center">
                            <!-- Ementas Carousel -->
                            <div id="ementasCarousel" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="img/rest04.webp" alt="Primeiro Slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/rest05.webp" alt="Segundo Slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/rest06.webp" alt="Terceiro Slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#ementasCarousel" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Anterior</span>
                                </a>
                                <a class="carousel-control-next" href="#ementasCarousel" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Próximo</span>
                                </a>
                            </div>
                            <!-- End Ementas Carousel-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Footer -->
<div class="footer-curve-divider"><div></div></div>
<footer>
    <div class="container">
        <div class="row ">
            <div class="col-12 text-center">
                <img src="img/logos/logo-icon-75x75.png" alt="Ulide Party Logo">
            </div>
            <div class="col-12 text-center">
                <h2>Ulide Party</br>O seu portal de diversão noturna.</h2>
            </div>
            <div class="col-12 text-center">
                <p><i class="fi-br-envelope"></i> <strong>support@ulideparty.pt</strong>
                    <br>&#169 2022 Ulide Party. Todos os direitos reservados.</p>
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->
</body>
</html>
