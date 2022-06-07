<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Title Page-->
    <title>Ulide Party - Dashboard</title>

    <!--JS-->
    <script src="js/messages.js"></script>
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
                                    <h2 id="group_name" class="title-1">Nome do Grupo</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row m-t-25">
                            <!-- Mensagens do Grupo -->
                            <div class="col-lg-12">
                                <div class="au-card au-card--no-pad m-b-40">
                                    <div class="au-card-title p-t-20 p-b-20" style="background-image:url('images/bg-title-02.jpg');">
                                        <div class="bg-overlay bg-overlay--blue"></div>
                                        <h3><i class="zmdi zmdi-comment-text"></i>Mensagens</h3>
                                    </div>
                                    <div class="au-inbox-wrap">
                                        <div class="au-chat au-chat--border">
                                            <div class="col-12 text" id="text">
                                                <ul class='message' id='message'></ul>
                                            </div>

                                            <!-- Caixa para enviar texto -->
                                            <div class="au-chat-textfield chatbox" id="chatbox">
                                                <form class="au-form-icon form-container" method="post" onsubmit="return postMessage()">
                                                    <input class="au-input au-input--full au-input--h65" type="text" placeholder="Digite uma mensagem" name="msg" id="msg" required="">
                                                    <!--<div class="chatbox" id="chatbox">
                                                        <h2>Message</h2>
                                                        <form class="form-container" onsubmit="postMessage()">
                                                            <textarea type="text" placeholder="Type Text.." name="msg" id="msg" required=""></textarea>
                                                            <button type="submit" class="btn btn-info btn-lg btn-send">Send</button>
                                                        </form>
                                                    </div>-->
                                                    <button id="btnSubmitMsg" class="au-input-icon" type="submit">
                                                        <i class="zmdi zmdi-mail-send"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Menu de opções do grupo -->
                            <div class="col-6">
                                <div class="au-card au-card--no-pad m-b-40">
                                    <div class="au-card-title p-t-20 p-b-20" style="background-image:url('images/bg-title-02.jpg');">
                                        <div class="bg-overlay bg-overlay--blue"></div>
                                        <h3><i class="zmdi zmdi-menu"></i>Opções</h3>
                                    </div>
                                    <div class="au-inbox-wrap">
                                        <div class="au-message">
                                            <div class="au-message__noti">
                                                <p>Notificação</p>
                                            </div>
                                            <div class="au-task-list">
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <p><i class="fa fa-check"></i> Criar votação</p>
                                                        <button type="button" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-star"></i>&nbsp; Botão</button>
                                                    </div>
                                                </div>
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <p><i class="fa fa-check"></i> Sugerir local</p>
                                                    </div>
                                                </div>
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <p><i class="fa fa-check"></i> Enviar fotos</p>
                                                    </div>
                                                </div>
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <p><i class="zmdi zmdi-battery"></i> Opção 4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Amigos/Membros do Grupo -->
                            <div class="col-6">
                                <div class="au-card au-card--no-pad m-b-40">
                                    <div class="au-card-title p-t-20 p-b-20" style="background-image:url('images/bg-title-02.jpg');">
                                        <div class="bg-overlay bg-overlay--blue"></div>
                                        <h3><i class="zmdi zmdi-accounts"></i>Membros</h3>
                                        <button class="au-btn-plus">
                                            <i class="zmdi zmdi-plus"></i>
                                        </button>
                                    </div>
                                    <div class="au-inbox-wrap">
                                        <div class="au-message">
                                            <div class="au-message__noti">
                                                <p>Você tem <span>2</span> novas solicitações</p>
                                            </div>
                                            <div class="au-task-list">
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <div class="au-message__item-text">
                                                            <div class="avatar-wrap">
                                                                <div class="avatar">
                                                                    <img src="images/icon/avatar-02.jpg" alt="John Smith">
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                                <h5 class="name">Michelle Sims</h5>
                                                                <p>Have sent a photo</p>
                                                            </div>
                                                        </div>
                                                        <div class="au-message__item-time">
                                                            <span>12 Min ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <div class="au-message__item-text">
                                                            <div class="avatar-wrap online">
                                                                <div class="avatar">
                                                                    <img src="images/icon/avatar-03.jpg" alt="Nicholas Martinez">
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                                <h5 class="name">Nicholas Martinez</h5>
                                                                <p>You are now connected on message</p>
                                                            </div>
                                                        </div>
                                                        <div class="au-message__item-time">
                                                            <span>11:00 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <div class="au-message__item-text">
                                                            <div class="avatar-wrap online">
                                                                <div class="avatar">
                                                                    <img src="images/icon/avatar-04.jpg" alt="Michelle Sims">
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                                <h5 class="name">John Smith</h5>
                                                                <p>Lorem ipsum dolor sit amet</p>
                                                            </div>
                                                        </div>
                                                        <div class="au-message__item-time">
                                                            <span>Yesterday</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="au-task__item">
                                                    <div class="au-message__item-inner">
                                                        <div class="au-message__item-text">
                                                            <div class="avatar-wrap">
                                                                <div class="avatar">
                                                                    <img src="images/icon/avatar-05.jpg" alt="Michelle Sims">
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                                <h5 class="name">John Dee</h5>
                                                                <p>Purus feugiat finibus</p>
                                                            </div>
                                                        </div>
                                                        <div class="au-message__item-time">
                                                            <span>Sunday</span>
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
                </div>
            </div>
            <!-- END MAIN CONTENT-->
        </div>
        <!-- END PAGE CONTAINER-->
    </div>
</body>

</html>
<!-- end document-->
