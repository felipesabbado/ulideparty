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

    let html = ``
    let url
    let avg

    for (let i = 0; i < Object.keys(spots).length; i++) {

        url = "https://res.cloudinary.com/ulide-party/image/upload/v1652352355/spots/" + spots[i].ph_photo_path
        avg = parseFloat(spots[i].avg).toFixed(2)

        console.log(avg)
        html += `<div class="u-container-style u-hover-feature u-list-item u-repeater-item u-video-cover u-white u-list-item-1" data-href="info.php" data-page-id="170745537">
              <div class="u-container-layout u-similar-container u-valign-bottom-lg u-container-layout-1">
                <h3 class="u-text u-text-default-xl u-text-1"> ${spots[i].sp_name} </h3>
                <div class="u-border-4 u-border-palette-3-base u-expanded-width u-line u-line-horizontal u-line-1"></div>
                <img alt="" class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-1" data-image-width="675" data-image-height="450" src= ${url} >
                <h6 class="u-text u-text-2"> ${avg}&nbsp;<span class="u-file-icon u-icon"><img src="images/1828884.png" alt=""></span>
                </h6>
                <p class="u-text u-text-3">Sobremesas, sumos, ...</p>
                <h6 class="u-text u-text-4">Campo de ourique, lisboa</h6>
                <h6 class="u-custom-item u-text u-text-custom-color-2 u-text-5">Abre em 20 minutos</h6>
              </div>
            </div>`

    }

    element.innerHTML += html
    for (let i = 0; i < Object.keys(spots).length; i++) {

    }
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
