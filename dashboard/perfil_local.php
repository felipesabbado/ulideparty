<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Title Page-->
    <title>Ulide Party - Dashboard</title>

    <!-- Fontfaces CSS-->
    <link href="css/font-face.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all">
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">

    <!-- Bootstrap CSS-->
    <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all">

    <!-- Vendor CSS-->
    <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
    <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
    <link href="vendor/wow/animate.css" rel="stylesheet" media="all">
    <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
    <link href="vendor/slick/slick.css" rel="stylesheet" media="all">
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="css/theme.css" rel="stylesheet" media="all">

</head>

<body class="animsition">
<div class="page-wrapper">
    <!-- HEADER MOBILE-->
    <header class="header-mobile d-block d-lg-none">
        <div class="header-mobile__bar">
            <div class="container-fluid">
                <div class="header-mobile-inner">
                    <a class="logo" href="index.php">
                        <img src="images/icon/logo.png" alt="CoolAdmin" />
                    </a>
                    <button class="hamburger hamburger--slider" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
                    </button>
                </div>
            </div>
        </div>
        <nav class="navbar-mobile">
            <div class="container-fluid">
                <ul class="navbar-mobile__list list-unstyled">
                    <li>
                        <a href="index.php">
                            <i class="fas fa-tachometer-alt"></i>Dashboard</a>
                    </li>
                    <li class="has-sub">
                        <a class="js-arrow" href="#">
                            <i class="fas fa-desktop"></i>Comunidade</a>
                        <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                            <li>
                                <a href="empresario.php">Empresários</a>
                            </li>
                            <li>
                                <a href="utilizador.php">Utilizadores</a>
                            </li>
                        </ul>
                    </li>
                    <li class="has-sub">
                        <a class="js-arrow" href="#">
                            <i class="fas fa-check"></i>Meus Locais</a>
                        <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                            <li>
                                <a href="local01.php">Local 1</a>
                            </li>
                            <li>
                                <a href="local02.html">Local 2</a>
                            </li>
                            <li>
                                <a href="local03.html">Local 3</a>
                            </li>
                        </ul>
                    </li>
                    <li class="has-sub">
                        <a class="js-arrow" href="#">
                            <i class="fas fa-user"></i>Grupos</a>
                        <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                            <li>
                                <a href="grupo01.php">Grupo 1</a>
                            </li>
                            <li>
                                <a href="grupo02.html">Grupo 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="favorito.php">
                            <i class="fas fa-user"></i>Favoritos</a>
                    </li>
                    <li>
                        <a href="mensagem.php">
                            <i class="fas fa-check"></i>Mensagem</a>
                    </li>
                    <li>
                        <a href="avaliacao.php">
                            <i class="fas fa-user"></i>Avaliações</a>
                    </li>
                    <li class="has-sub">
                        <a class="js-arrow" href="#">
                            <i class="fas fa-check"></i>Perfil</a>
                        <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                            <li>
                                <a href="perfil_utilizador.php">Utilizador</a>
                            </li>
                            <li>
                                <a href="perfil_local.php">Local</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- END HEADER MOBILE-->

    <!-- MENU SIDEBAR-->
    <?php include 'menu.php'?>
    <!-- END MENU SIDEBAR-->

    <!-- PAGE CONTAINER-->
    <div class="page-container">
        <!-- HEADER DESKTOP-->
        <?php include 'header-desktop.php' ?>
        <!-- HEADER DESKTOP-->

        <!-- MAIN CONTENT-->
        <div class="main-content">
            <div class="section__content section__content--p30">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="overview-wrap">
                                <h2 class="title-1">Nome do Local</h2><span class="verificado"><i class="fa fa-check"></i> verificado</span>
                            </div>
                        </div>
                    </div>
                    <div class="row m-t-25">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <button type="button" class="btn btn-primary btn-sm">Avaliar</button>
                                    <button type="button" class="btn btn-outline-primary btn-sm">Favorito</button>
                                    <button type="button" class="btn btn-outline-primary btn-sm">Compartilhar</button>
                                    <a href="editarLocal.php"><button type="button" class="btn btn-outline-danger btn-sm">Editar Local</button></a>
                                </div>
                                <div class="card-body row">
                                    <div class="col-6 p-0">
                                        <img class="img-fluid rounded p-1" src="images/bg-title-01.jpg" alt="Card image cap">
                                    </div>
                                    <div class="col-3 p-0">
                                        <img class="img-fluid rounded p-1" src="images/bg-title-01.jpg" alt="Card image cap">
                                        <img class="img-fluid rounded p-1" src="images/bg-title-01.jpg" alt="Card image cap">
                                    </div>
                                    <div class="col-3 p-0">
                                        <img class="img-fluid rounded p-1" src="images/bg-title-01.jpg" alt="Card image cap">
                                        <img class="img-fluid rounded p-1" src="images/bg-title-01.jpg" alt="Card image cap">
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="custom-tab">
                                        <nav>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                                                   aria-selected="true">Sobre</a>
                                                <a class="nav-item nav-link" id="nav-avaliacao-tab" data-toggle="tab" href="#nav-avaliacao" role="tab" aria-controls="nav-avaliacao"
                                                   aria-selected="false">Avaliações</a>
                                                <a class="nav-item nav-link" id="nav-fotos-tab" data-toggle="tab" href="#nav-fotos" role="tab" aria-controls="nav-fotos"
                                                   aria-selected="false">Fotos</a>
                                                <a class="nav-item nav-link" id="nav-ementa-tab" data-toggle="tab" href="#nav-ementa" role="tab" aria-controls="nav-ementa"
                                                   aria-selected="false">Ementa</a>
                                            </div>
                                        </nav>
                                        <div class="tab-content pl-3 pt-2" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                                                    master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                                    dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone.
                                                    Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                            </div>
                                            <div class="tab-pane fade" id="nav-avaliacao" role="tabpanel" aria-labelledby="nav-avaliacao-tab">
                                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                                                    master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                                    dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone.
                                                    Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                            </div>
                                            <div class="tab-pane fade" id="nav-fotos" role="tabpanel" aria-labelledby="nav-fotos-tab">
                                                <div class="col">
                                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                                        <ol class="carousel-indicators">
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                        </ol>
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active">
                                                                <img class="d-block w-100" src="./images/img/photo1.png?auto=yes&bg=777&fg=555&text=Primeiro Slide" alt="Primeiro Slide">
                                                            </div>
                                                            <div class="carousel-item">
                                                                <img class="d-block w-100" src="./images/img/photo2.png?auto=yes&bg=666&fg=444&text=Segundo Slide" alt="Segundo Slide">
                                                            </div>
                                                            <div class="carousel-item">
                                                                <img class="d-block w-100" src="./images/img/photo3.jpg?auto=yes&bg=555&fg=333&text=Terceiro Slide" alt="Terceiro Slide">
                                                            </div>
                                                        </div>
                                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="sr-only">Anterior</span>
                                                        </a>
                                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="sr-only">Próximo</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="nav-ementa" role="tabpanel" aria-labelledby="nav-ementa-tab">
                                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                                                    master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                                    dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone.
                                                    Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END MAIN CONTENT-->

    </div>
    <!-- END PAGE CONTAINER-->

</div>

<!-- Jquery JS-->
<script src="vendor/jquery-3.2.1.min.js"></script>
<!-- Bootstrap JS-->
<script src="vendor/bootstrap-4.1/popper.min.js"></script>
<script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
<!-- Vendor JS-->
<script src="vendor/slick/slick.min.js"></script>
<script src="vendor/wow/wow.min.js"></script>
<script src="vendor/animsition/animsition.min.js"></script>
<script src="vendor/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
<script src="vendor/counter-up/jquery.waypoints.min.js"></script>
<script src="vendor/counter-up/jquery.counterup.min.js"></script>
<script src="vendor/circle-progress/circle-progress.min.js"></script>
<script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
<script src="vendor/chartjs/Chart.bundle.min.js"></script>
<script src="vendor/select2/select2.min.js"></script>

<!-- Main JS-->
<script src="js/main.js"></script>
</body>

</html>
<!-- end document-->
