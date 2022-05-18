function lista(id) {
    localStorage.setItem("categoria", id)
}

async function getText(file) {
    let menuHTML = await fetch(file);
    document.getElementById("menu").innerHTML = await menuHTML.text();
}

window.onload = getText('menu.php')
