$(document).ready(function() {

    $('#btnSubmit').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        let name = document.getElementById('us_name').value
        let password = document.getElementById('us_password').value
        let sound = new Audio('../sounds/faustao-errou.mp3')

        $.ajax({
            url: `https://ulide-party-api.herokuapp.com/api/users/login?us_name=${name}&us_password=${password}`,
            type: "GET",
            dataType: 'json',
            success: function(response) {
                alert("Login Efetuado com Sucesso!")
                localStorage.setItem("user", response.us_id)
                window.location = "index.php"
                //document.location.replace('index.php')
            },
            error: function (response) {
                sound.play()
                alert("ERROU!!!")
                $("#btnSubmit").prop("disabled", false)
            }
        });

    });

});

/*async function getData(){

    // var targetUrl = 'https://ulide-party-api.herokuapp.com/api/spots'
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
}*/
