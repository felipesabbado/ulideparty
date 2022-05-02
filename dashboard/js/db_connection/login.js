/*$(document).ready(function() {

    function getUsersList() {

        $.ajax({
            url: "https://ulide-party-api.herokuapp.com/api/users",
            type: "GET",
            dataType: 'json',
            success: function(response) {
                console.log(response);
            }
        });
    }

    getUsersList();
});*/

/*function userRegister() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = "https://ulide-party-api.herokuapp.com/api/users"
    $.ajax({
        url: "https://ulide-party-api.herokuapp.com/api/users",
        type: "POST",
        data: {
            us_name: jQuery('[name=us_name]').val(),
            us_email: jQuery('[name=us_email]').val(),
            us_password: jQuery('[name=us_password]').val()
        },
        dataType: 'json',
        success: function(result) {
            console.log("SUCCESS : ", result);
            $("#output").text(JSON.stringify(result.user[0]));
            $("#btnSubmit").prop("disabled", false);
        }
    });
}*/

async function getData(){
    
    // var targetUrl = 'https://ulide-party-api.herokuapp.com/api/spots'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://ulide-party-api.herokuapp.com/api/users/login?us_name=Leonardo&us_password=123456'

    const response = await fetch(
        proxyUrl + targetUrl)
    const data = await response.json()
    return data
}

async function validateLogin() {
    alert("qqcoisa")
    let json = await getData()
    if (typeof json.us_id == 'number') {
        alert("deu")
    } else {
        alert(json.us_id)
    }
}
