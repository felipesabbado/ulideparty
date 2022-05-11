$(document).ready(function() {
    let us_id = localStorage.getItem("user")

    $.ajax({
        url: `https://ulide-party-api.herokuapp.com/api/users/${us_id}`,
        type: "GET",
        dataType: 'json',
        success: function(response) {
            //alert(response.us_name)
            const userName = document.querySelectorAll(".us_name")
            for (let i = 0; i < userName.length; i++) {
                userName[i].innerHTML = response.us_name
            }
            document.querySelector(".email").innerHTML = response.us_email
        },
        error: function (response) {
            $("#btnSubmit").prop("disabled", false)
        }
    });

    $.ajax({
        url: `https://ulide-party-api.herokuapp.com/api/groups/user/${us_id}`,
        type: "GET",
        dataType: 'json',
        success: function(response) {
            let html = ""
            for (let i = 0; i < response.length; i++) {
                html += response[i].gr_name + "<br>"
            }
            document.querySelector("#groups").innerHTML = html
        },
        error: function (response) {
            $("#btnSubmit").prop("disabled", false)
        }
    });

    $.ajax({
        url: `https://ulide-party-api.herokuapp.com/api/groups/friends/users/${us_id}`,
        type: "GET",
        dataType: 'json',
        success: function(response) {
            let html = ""
            for (let i = 0; i < response.length; i++) {
                html += `<a href="perfil_utilizador.php">${response[i].us_name}</a><br>`
            }
            document.querySelector("#friends").innerHTML = html
        },
        error: function (response) {
            $("#btnSubmit").prop("disabled", false)
        }
    });

});