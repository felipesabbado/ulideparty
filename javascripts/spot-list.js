let categoria = localStorage.getItem("categoria")

console.log(categoria)

async function getData(){

    const targetUrl = `https://ulide-party-api.herokuapp.com/api/spots/type/${categoria}/listUse`;


    const response = await fetch(targetUrl)
    return await response.json()
}

async function loadSpots() {


    let element = document.getElementById("lista_spots")

    let spots = await getData()

    console.log(spots)

    let html = ""
    let url
    let avg

    for (let i = 0; i < Object.keys(spots).length; i++) {

        url = "https://res.cloudinary.com/ulide-party/image/upload/v1652352355/spots/" + spots[i].ph_photo_path
        avg = parseFloat(spots[i].avg).toFixed(2)

        console.log(avg)
        html += `<div class="col-12 col-lg-4" onclick="goToInfo(${spots[i].sp_id})" data-href="info.php">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h3>${spots[i].sp_name}</h3>
                        </div>
                        <div class="card-img">
                            <img src="img/rest01.webp">
                        </div>
                        <div class="spot-info">
                            <h4>Tags do local</h4> <h4>${avg} <i class="fi-sr-star"></i></h4>
                        </div>
                        <p>Localização e outras infos</p>
                    </div>
                </div>
            </div>`
    }

    element.innerHTML += html
    for (let i = 0; i < Object.keys(spots).length; i++) {

    }
}

function goToInfo(id) {
    console.log(id)
    localStorage.setItem("sp_id", id)
    //document.location.replace("info.php")
}

window.addEventListener("load", function () {
    if (categoria == 1){
        document.querySelector("#title_category").innerText = "Bares"
    }else if (categoria == 2){
        document.querySelector("#title_category").innerText = "Restaurantes"
    }else if (categoria == 3){
        document.querySelector("#title_category").innerText = "Discotecas"
    }

}, true)


window.onload = loadSpots
