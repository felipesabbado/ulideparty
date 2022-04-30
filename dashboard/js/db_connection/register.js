// $(document).ready(function() {
//
//     function getUsersList() {
//
//         $.ajax({
//             url: "http://localhost:5000/api/users",
//             type: "GET",
//             dataType: 'json',
//             success: function(result) {
//                 console.log(result);
//             }
//         });
//     }
//
//     getUsersList();
// });

// function userRegister() {
//     var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//         targetUrl = "https://ulide-party-api.herokuapp.com/api/users"
//     $.ajax({
//         url: "https://ulide-party-api.herokuapp.com/api/users",
//         type: "POST",
//         data: {
//             us_name: jQuery('[name=us_name]').val(),
//             us_email: jQuery('[name=us_email]').val(),
//             us_password: jQuery('[name=us_password]').val()
//         },
//         dataType: 'json',
//         success: function(result) {
//             console.log("SUCCESS : ", result);
//             $("#output").text(JSON.stringify(result.user[0]));
//             $("#btnSubmit").prop("disabled", false);
//         }
//     });
// }


function userRegister1() {
    const formData = {
        us_name: jQuery('[name=us_name]').val(),
        us_email: jQuery('[name=us_email]').val(),
        us_password: jQuery('[name=us_password]').val()
    }; //Array

    $.ajax({
        url : "https://ulide-party-api.herokuapp.com/api/users", // Url of backend (can be python, php, etc..)
        type: "POST", // data type (can be get, post, put, delete)
        data : formData, // data in json format
        async : false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
        success: function(response, textStatus, jqXHR) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}

