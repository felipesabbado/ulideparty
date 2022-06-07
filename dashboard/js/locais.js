$(document).ready(function () {
    $('#btnEdit').click(function () {
        window.location.href = 'editar_local.php';
    })

    $('#btnEnviar').click(function (event) {
        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        //$("#btnSubmit").prop("disabled", true);

        let sp_name = document.getElementById('sp_name').value
        let sp_address = document.getElementById('sp_address').value
        let sp_description = document.getElementById('sp_description').value
        let sp_phone = document.getElementById('sp_phone').value
        let sp_email = document.getElementById('sp_email').value
        let sp_st_id = $("input[name='sp_st_id']:checked").val()
        let tg_name = document.getElementsByName('tg_name')
        let tg_names = ""
        for (let i = 0; i < tg_name.length; i++) {
            if (tg_name[i].checked) {
                tg_names += tg_name[i].value + ","
            }
        }

        alert(tg_names)
    });

    $('#btnCriar').click(function () {
        window.location.href = 'criar_local.php';
    });

});