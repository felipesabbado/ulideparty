async function getTags(){

    const targetUrl = `https://ulide-party-api.herokuapp.com/api/tags`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function getGeocodingMsg(search) {
    const targetUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyDk31YFxoBBRi15FKVX3-9rF-Vr8vpGfSQ`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function addTagsOnPage(tags) {
    let elementForm = document.getElementById("tagsForm")
    let html = ""
    for (let i = 0; i < tags.length; i++) {
        html += `<input type="checkbox" id="${tags[i].tg_name}" name="tg_name" value="${tags[i].tg_id}">
                 <label for="${tags[i].tg_name}"> ${tags[i].tg_name}</label><br>`
    }

    elementForm.innerHTML += html

}

window.onload =  async function onload() {
    alert("Para criar um local, preencha os campos abaixo e clique em 'Criar Local'")
    let tags = await getTags()
    addTagsOnPage(tags)


    let elementBtnEnviar = document.getElementById("btnEnviar")

    elementBtnEnviar.addEventListener("click", async function(){
        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        let sp_name = document.getElementById('sp_name').value
        let sp_address = document.getElementById('sp_address').value
        let sp_description = document.getElementById('sp_description').value
        let sp_phone = document.getElementById('sp_phone').value
        let sp_email = document.getElementById('sp_email').value
        let sp_st_id = $("input[name='sp_st_id']:checked").val()
        let tg_name = document.getElementsByName('tg_name')



        let tg_names = []
        for (let i = 0; i < tg_name.length; i++) {
            if (tg_name[i].checked) {
                tg_names.push(tg_name[i].value)
            }
        }
        alert(sp_address)
        let latLong = await getGeocodingMsg(sp_address)
        let lat = latLong.results[0].geometry.location.lat
        let long = latLong.results[0].geometry.location.lng

        console.log(lat, long)
        console.log(sp_name, "sp_name")
        console.log(sp_address, "sp_address")
        console.log(sp_description, "sp_description")
        console.log(sp_phone, "sp_phone")
        console.log(sp_email, "sp_email")
        console.log(tg_names)
        console.log(sp_st_id)

        let data = {
            sp_name: sp_name,
            sp_location: `POINT(${lat} ${long})`,
            sp_description: sp_description,
            sp_tel: sp_phone,
            sp_bio: sp_description,
            sp_st_id: sp_st_id,
            sp_email: sp_email,
        }

        console.log(JSON.stringify(data))
        let result = await postData(`https://ulide-party-api.herokuapp.com/api/spots`, data)
        console.log(result, "result")
        location.href = "../../index.php"
    })
}