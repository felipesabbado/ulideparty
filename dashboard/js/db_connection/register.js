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
//
//     $('#btnSubmit').on('click', function(event) {
//
//         // prevent form default behaviour
//         event.preventDefault();
//
//         // disabled the submit button
//         $("#btnSubmit").prop("disabled", true);
//
//         $.ajax({
//             url: "http://localhost:5000/api/users/creat",
//             type: "POST",
//             data: {
//                 us_email: jQuery('[name=us_email]').val(),
//                 us_password: jQuery('[name=us_password]').val()
//             },
//             dataType: 'json',
//             success: function(result) {
//                 console.log("SUCCESS : ", result);
//                 $("#output").text(JSON.stringify(result.user[0]));
//                 $("#btnSubmit").prop("disabled", false);
//             }
//         });
//
//     });
//
// });

function userRegister() {
    $.ajax({
        url: "http://localhost:5000/api/users/creat",
        type: "POST",
        data: {
            us_name: jQuery('[name=us_name]').val(),
            us_email: jQuery('[name=us_email]').val(),
            us_password: jQuery('[name=us_password]').val()
        },
        dataType: 'json',
        success: function(result) {
            console.log("batata")
            console.log("SUCCESS : ", result);
            $("#output").text(JSON.stringify(result.user[0]));
            $("#btnSubmit").prop("disabled", false);
        }
    });
}