let spot_id = localStorage.getItem("sp_id")

let user
if (localStorage.getItem("user") !== 'undefined') {
    user = JSON.parse(localStorage.getItem("user"))
} else {
    user = null
}

let first = true

async function getSpot(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/spots/update/${id}`;


    const response = await fetch(targetUrl)
    return await response.json()

}

async function deleteFavSpot(us_id, sp_id) {
     const targetUrl = `https://ulide-party-api.herokuapp.com/api/favSpots/us_id/${us_id}/sp_id/${sp_id}`;
    //
    //
    // const response = await fetch(targetUrl, {
    //     method: 'DELETE'
    // })
    // return await response.json()

    let result = await fetch(targetUrl, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
}

async function getEvaluations(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/spotEvaluations/${id}`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function getTags(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/tags/spot/${id}`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function getFavSpotsByUsIdAndSpId(us_id, sp_id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/favSpots/us_id/${us_id}/sp_id/${sp_id}`;

    const response = await fetch(targetUrl)
    console.log(response)
    return await response.json()
}

async function getPhotos(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/spots/${id}/photo/avg`;


    const response = await fetch(targetUrl)
    return await response.json()
}

function getTagsFormatted(tagsJson) {
    console.log(tagsJson)
    let strTags = ""
    if (Object.keys(tagsJson).length > 0){

        for (let i = 0; i < Object.keys(tagsJson).length; i++) {
            strTags += tagsJson[i].tg_name + ", "
        }
        strTags = strTags.substring(0, strTags.length - 2)
    }
    return strTags
}

/* Modal */
function eval() {
    let modalbody = document.querySelectorAll("#bodyModalEval")

    modalbody.innerHTML = `<h6>Classifique a sua experiência</h6>
                <span><i class="fi fi-br-star"></span>`
}


async function getGeocoding(search) {
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


function userDoentLogin(elementBtnFavorite) {
    let elementTopPage = document.getElementById("topPage")
    elementBtnFavorite.innerHTML = `<i class="fi fi-br-heart"></i> Favoritar`
    elementTopPage.innerHTML += `<div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <strong>Danger!</strong> Tens de fazer o login ou resgistar para poder favoritar.
                                            </div>`
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

async function updateOnload() {
    let spot = await getSpot(spot_id)
    console.log(spot)
    let tags = await getTags(spot_id)
    let photos = await getPhotos(spot_id)

    let search = spot.sp_lat + " " + spot.sp_long
    console.log(search)
    let geocoding = await getGeocoding(search)

    let elementTags = document.getElementById("sp_tags")
    let elementPhotos = document.getElementById("sp_photo")
    let elementLocation = document.getElementById("sp_location")
    let elementRate = document.getElementById("sp_rate")
    let elementCountRate = document.getElementById("sp_countRate")
    let elementTel = document.getElementById("sp_tel")
    let elementEmail = document.getElementById("sp_email")
    let elementDescription = document.getElementById("sp_description")
    let elementBodyModalEval = document.getElementById("bodyModalEval")


    elementLocation.innerText = geocoding.results[0].formatted_address

    let avg = parseFloat(photos[0].avg).toFixed(1)
    console.log(avg)
    elementRate.innerHTML = avg + ' <i class="fi-sr-star"></i>'
    elementCountRate.innerText = photos[0].count + " Avaliaçoes"

    let tagsStr = getTagsFormatted(tags);

    if (tagsStr.length > null){
        elementTags.innerText = tagsStr
    } else {
        elementTags.innerText = "Não há tags"
    }

    elementEmail.innerText = spot.sp_email
    elementTel.innerText = spot.sp_tel
    elementDescription.innerText = spot.sp_description
    elementBodyModalEval.innerHTML += `<h1>Hola</h1>`


    /********************** AVALIAÇOES ********************/

    let elementEvaluations = document.getElementById("sp_evaluations")
    let evaluationJson = await getEvaluations(spot_id)

    for (let i = 0; i < Object.keys(evaluationJson).length; i++) {
        elementEvaluations.innerHTML += `<div class="card">
                                    <div class="card-header">
                                        <img src="img/logos/logo-icon-75x75.png" alt="User Image">
                                        <h5 class="d-inline"> ${evaluationJson[i].us_name}, ${evaluationJson[i].se_rate} <i class="fi-sr-star">, ${evaluationJson[i].to_char}</i> </h5>
                                    </div>
                                    <div class="card-body">
                                        <p>${evaluationJson[i].se_comment}</p>
                                    </div>
                                </div>`
    }

    /************************** Favoritar *******************************/

    let elementBtnFavorite = document.getElementById("btnFav") // Botão de favoritar
    if (localStorage.getItem("user") !== 'undefined') {
        await favFunction(elementBtnFavorite)
    }else {
        elementBtnFavorite.innerHTML = `<i class="fi fi-br-heart"></i> Favoritar`
    }
    elementBtnFavorite.addEventListener("click", async function () {
        if (user === null) {
            userDoentLogin(elementBtnFavorite)
        } else {
            await favFunction(elementBtnFavorite)
        }
    })
}

async function favFunction(elementBtnFavorite) {
    let favSpots = await getFavSpotsByUsIdAndSpId(user.us_id, spot_id)
    if (Object.keys(favSpots).length < 1) {
        let data = {
            us_id: user.us_id,
            sp_id: spot_id
        }
        if (!first) {
            elementBtnFavorite.innerHTML = `<i class="fi fi-sr-heart"></i> Desfavoritar`
            await postData("https://ulide-party-api.herokuapp.com/api/favSpots", data)
        } else {
            elementBtnFavorite.innerHTML = `<i class="fi fi-br-heart"></i> Favoritar`
            first = false
        }
    } else {

        if (!first) {
            elementBtnFavorite.innerHTML = `<i class="fi fi-br-heart"></i> Favoritar`
            await deleteFavSpot(user.us_id, spot_id)
        } else {
            elementBtnFavorite.innerHTML = `<i class="fi fi-sr-heart"></i> Desfavoritar`
            first = false
        }
    }

}

window.onload = updateOnload
