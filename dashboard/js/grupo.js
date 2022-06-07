function group() {
    let queryString = window.location.search;
    let type = queryString.substring(1,queryString.length)
    let group = JSON.parse(sessionStorage.getItem("group"))
    console.log(group[type])

    let elementGroupName = document.querySelector("#group_name")
    elementGroupName.innerHTML = group[type].gr_name
}

window.onload = group
