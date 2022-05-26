let spot_id = localStorage.getItem("sp_id")

async function getSpot(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/spots/update/${id}`;


    const response = await fetch(targetUrl)
    return await response.json()
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
}

window.onload = updateOnload

// document.addEventListener("load", async function () {
//     await updateOnload()
// })


/**
 * elementTags.innerText = getTagsFormatted(tags)
 *     let url = "https://res.cloudinary.com/ulide-party/image/upload/v1652352355/spots/" + photos[0].ph_photo_path
 *
 *     elementPhotos.innerHTML = `<div class="u-active u-align-left u-carousel-item u-clearfix u-image u-shading u-section-1-1" src="" data-image-width="1280" data-image-height="960" style="background-image: url(${url})">
 *           <div class="u-clearfix u-sheet u-sheet-1">
 *             <h1 class="u-text u-text-default u-title u-text-1">${spot.sp_name}</h1>
 *           </div>
 *         </div>`
 *
 *
 *     console.log(geocoding.results[0].formatted_address)
 *     elementLocation.innerText = geocoding.results[0].formatted_address
 *     elementStreet.innerText = geocoding.results[0].formatted_address
 *
 *     console.log(photos)
 *     let avg = parseFloat(photos[0].avg).toFixed(2)
 *     console.log(avg)
 *     console.log(photos[0].count)
 *     elementRate.innerText = avg + " estrelas"
 *     elementCountRate.innerText = photos[0].count + " Avaliaçoes"
 */

/* Modal */
