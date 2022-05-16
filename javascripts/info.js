let spot_id = localStorage.getItem("sp_id")

alert(spot_id)

async function getSpot(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/spots/${id}`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function getTags(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/tags/spot/${id}`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function getPhotos(id) {
    const targetUrl = `https://ulide-party-api.herokuapp.com/api/spots/type/${id}/listUse`;


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

async function getGeocoding(search) {
    const targetUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyDk31YFxoBBRi15FKVX3-9rF-Vr8vpGfSQ`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function updateOnload() {
    let spot = await getSpot(spot_id)
    let tags = await getTags(spot_id)
    let photos = await getPhotos(spot_id)

    let search = spot.sp_lat + " " + spot.sp_long
    console.log(search)
    let geocoding = await getGeocoding(search)

    let elementTags = document.getElementById("sp_tags")
    let elementPhotos = document.getElementById("sp_photo")
    let elementLocation = document.getElementById("sp_location")
    let elementStreet = document.getElementById("spot_street")
    let elementRate = document.getElementById("spot_rate")



    elementTags.innerText = getTagsFormatted(tags)
    let url = "https://res.cloudinary.com/ulide-party/image/upload/v1652352355/spots/" + photos[0].ph_photo_path

    elementPhotos.innerHTML = `<div class="u-active u-align-left u-carousel-item u-clearfix u-image u-shading u-section-1-1" src="" data-image-width="1280" data-image-height="960" style="background-image: url(${url})">
          <div class="u-clearfix u-sheet u-sheet-1">
            <h1 class="u-text u-text-default u-title u-text-1">${spot.sp_name}</h1>
          </div>
        </div>`


    console.log(geocoding.results[0].formatted_address)
    elementLocation.innerText = geocoding.results[0].formatted_address
    elementStreet.innerText = geocoding.results[0].formatted_address


}

window.onload = updateOnload

// document.addEventListener("load", async function () {
//     await updateOnload()
// })