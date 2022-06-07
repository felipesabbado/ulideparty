<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
    <body id="load">

    </body>

<script>
    let id = localStorage.getItem('sp_ph_id');
    window.onload = function (){
        let link = "http://ulide-party-api.herokuapp.com/api/image/save/spots/" + id;
        let elementLoad = document.getElementById('load');
        elementLoad.innerHTML = `<form action = ${link}   method="post" enctype="multipart/form-data">

            <input type="file" name="filetoupload"><br>
            <input type="submit" >
        </form>`
    }
</script>
</html>