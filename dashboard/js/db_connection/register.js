$(document).ready(function() {

    function getUsersList() {

        $.ajax({
            url: "http://localhost:5000/api/users",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });
    }

    getUsersList();

    $('#btnSubmit').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        $.ajax({
            url: "http://localhost:5000/api/users",
            type: "POST",
            data: {
                email: jQuery('[name=us_email]').val(),
                password: jQuery('[name=us_password]').val()
            },
            dataType: 'json',
            success: function(result) {
                console.log("SUCCESS : ", result);
                $("#output").text(JSON.stringify(result.user[0]));
                $("#btnSubmit").prop("disabled", false);
            }
        });

    });

});