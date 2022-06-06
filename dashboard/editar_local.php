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

    <!-- MENU SIDEBAR-->
    <?php include 'menu.php'?>
    <!-- END MENU SIDEBAR-->

    <!-- PAGE CONTAINER-->
    <div class="page-container">

        <!-- MAIN CONTENT-->
        <div class="main-content">
            <div class="section__content section__content--p30">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="overview-wrap">
                                <h2 id="sp_name" class="title-1">Sugerir edição</h2><span class="verificado" hidden><i class="fa fa-check"></i> verificado</span>
                            </div>
                        </div>
                    </div>
                    <div id="info-spots" class="row m-t-25">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12 m-b-10">
                                            <h3>Informações gerais</h3>
                                        </div>
                                        <div class="col-6">
                                            <label for="sp_name">Nome do local</label>
                                            <input id="sp_name" type="text" class="form-control" placeholder="Nome do local">
                                            <label for="sp_address">Endereço</label>
                                            <input id="sp_address" type="text" class="form-control" placeholder="Endereço">
                                            <label for="sp_bio">Tags</label>
                                            <input id="sp_bio" type="checkbox" class="form-control">

                                            <label for="sp_st_id">Tipo do local</label><br>
                                            <input class="sp_st_id" type="radio" id="bares" name="fav_language" value="1">
                                            <label for="html">Bares</label><br>
                                            <input class="sp_st_id" type="radio" id="rest" name="fav_language" value="2">
                                            <label for="css">Restaurantes</label><br>
                                            <input class="sp_st_id" type="radio" id="disco" name="fav_language" value="3">
                                            <label for="javascript">Discotecas</label><br>


                                            <label for="sp_phone">Telefone</label>
                                            <input id="sp_phone" type="tel" class="form-control">
                                            <label for="sp_email">Email</label>
                                            <input id="sp_email" type="email" class="form-control">
                                        </div>
                                        <div class="col-6">
                                            <label>Descrição</label>
                                            <textarea id="sp_description" class="form-control" rows="5" placeholder="Descrição do local"></textarea>
                                        </div>
                                        <div class="col-6">
                                            <form action="http://ulide-party-api.herokuapp.com/api/image/save/spots" method="post" enctype="multipart/form-data">
                                                <label for="sp_image">Enviar Imagem</label>
                                                <input id="sp_image" type="file" name="filetoupload"><br>
                                                <input type="submit">
                                            </form>
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