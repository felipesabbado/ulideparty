<!DOCTYPE html>
<html>
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
    <link href="fonts/fontawesome-6.1.1/css/all.css" rel="stylesheet" media="all">
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
    <link rel="stylesheet" type="text/css" href="css/maps.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

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

    <!-- Main and DB JS-->
    <script src="js/main.js"></script>
    <script src="js/db_connection/user.js"></script>

    <!-- Map JS-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCWAaYbbg4yfxd4e-hOxMO-pPAYn0D4asM&callback=initMap&v=weekly" defer></script>
    <script type="module" src="js/db_connection/maps.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
</head>
<body>
<?php
$user = 2;
// Menu side bar
echo "<aside class='menu-sidebar d-none d-lg-block'>
            <div class='logo'>
                <a href='#'>
                    <img src='images/icon/BrancoPreto.png' alt='Logo Mono' height='179' width='52'/>
                </a>
            </div>
            <div class='menu-sidebar__content js-scrollbar1'>
                <nav class='navbar-sidebar'>
                    <ul class='list-unstyled navbar__list'>
                        <li>
                            <a href='index.php'>
                                <i class='fas fa-tachometer-alt'></i>Dashboard</a>
                        </li>";

if ($user == 1){
    echo "<li class='has-sub'>
                            <a class='js-arrow' href='#'>
                                <i class='fas fa-desktop'></i>Comunidade</a>
                            <ul class='list-unstyled navbar__sub-list js-sub-list'>
                                <li>
                                    <a href='empresario.php'>Empresários</a>
                                </li>
                                <li>
                                    <a href='utilizador.php'>Utilizadores</a>
                                </li>
                            </ul>
                        </li>
</ul></nav></div></aside>";
}

if ($user == 2 || $user == 3){
echo "<li class='has-sub'>
                            <a class='js-arrow' href='#'>
                                <i class='fas fa-check'></i>Meus Locais</a>
                            <ul class='list-unstyled navbar__sub-list js-sub-list'>
                                <li>
                                    <a href='local01.php'>Local 1</a>
                                </li>
                                <li>
                                    <a href='local02.html'>Local 2</a>
                                </li>
                                <li>
                                    <a href='local03.html'>Local 3</a>
                                </li>
                            </ul>
                        </li>";
}

if ($user == 2) {
    echo "<li class='has-sub'>
                            <a class='js-arrow' href='#'>
                                <i class='fas fa-user'></i>Grupos</a>
                            <ul class='list-unstyled navbar__sub-list js-sub-list'>
                                <li>
                                    <a href='grupo01.php'>Grupo 1</a>
                                </li>
                                <li>
                                    <a href='grupo02.html'>Grupo 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='favorito.php'>
                                <i class='fas fa-user'></i>Favoritos</a>
                        </li>";
}

if ($user == 2 || $user == 3) {
    echo "<li>
              <a href='mensagem.php'><i class='fas fa-check'></i>Mensagem</a>
          </li>";
}

if ($user == 2) {
    echo "<li>
              <a href='avaliacao.php'><i class='fas fa-user'></i>Avaliações</a>
          </li>";
}

if ($user == 2 || $user == 3) {
    echo "                        <li class='has-sub'>
                            <a class='js-arrow' href='#'>
                                <i class='fas fa-check'></i>Perfil</a>
                            <ul class='navbar-mobile-sub__list list-unstyled js-sub-list'>
                                <li>
                                    <a href='perfil_utilizador.php'>Utilizador</a>
                                </li>
                                <li>
                                    <a href='perfil_local.php'>Local</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>";
}
?>
</body>
</html>

