let latUser
let longUser

function initMap() {
    latUser = localStorage.getItem("user_latitude")
    longUser = localStorage.getItem("user_longitude")
    let myOptions = {
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {
            lat: parseFloat(latUser),
            lng: parseFloat(longUser)
        }
    };
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    let start = {lat: parseFloat(latUser), lng: parseFloat(longUser)};
    let end = { lat: 38.7160369, lng: -9.1370057};
    let method = document.getElementById("mode").value;;
    directionsRenderer.setMap(map);
    drawRoute(start, end, method,animate = true ,color = '#2196F3', directionsService, directionsRenderer) // if color variable not passed, defaults to preset color

}


function drawRoute(start, end, method, animate = true,color = '#e53935',directionsService, directionsRenderer ) {
    // const directionsService = new google.maps.DirectionsService();
    // const directionsRenderer = new google.maps.DirectionsRenderer();

    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode[method]
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            var lineSymbol = {
                // path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                path: google.maps.SymbolPath.CIRCLE,

                fillOpacity: 1,
                scale: 3
            };

            var routePath = new google.maps.Polyline({
                path: response.routes[0].overview_path,
                geodesic: true,
                strokeColor: color,
                strokeOpacity: 0,
                fillOpacity: 0,
                icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '10px'
                }],
            });
            if (animate) {
                animateLine(routePath);
            }
            routePath.setMap(map);

            var marker = new google.maps.Marker({
                position: response.routes[0].overview_path[0],
                map: map,
                title: 'Hello World!'


            });

            var marker = new google.maps.Marker({
                position: response.routes[0].overview_path[response.routes[0].overview_path.length - 1],
                map: map,
                title: 'Hello World!'
            });
        }
    });
}

function animateLine(line) {

    var count = 0;
    var zoomLevel;
    var markSpeed;
    var multiPointer = 10;

    window.setInterval(function() {


        count = (count + 1) % 200;
        var icons = line.get('icons');
        icons[0].offset = (count / markSpeed ) + '%';
        line.set('icons', icons);


        var getZoom0 = line.get('map');
        var getZoom1 = getZoom0.getZoom();

        zoomLevel = getZoom1;

        if (zoomLevel >= 21)
        {
            // markSpeed = 120;
            markSpeed = multiPointer * zoomLevel / 0.2;
        }
        else if(zoomLevel >= 19)
        {
            // markSpeed = 120;
            markSpeed = multiPointer * zoomLevel / 0.5;
        }
        else if (zoomLevel >= 16)
        {
            // markSpeed = 60;
            markSpeed = multiPointer * zoomLevel / 2;

        }
        else
        {
            // markSpeed = 10;
            markSpeed = multiPointer * zoomLevel / 20;

        }

        console.log("Zoom Level :" + zoomLevel);
        console.log("Mark Speed :" + markSpeed);


    }, 100);

}

window.onload = initMap


// let latUser
// let longUser
//
// async function initMap() {
//     latUser = localStorage.getItem("user_latitude")
//     longUser = localStorage.getItem("user_longitude")
//     console.log(latUser, longUser)
//     const directionsRenderer = new google.maps.DirectionsRenderer();
//     const directionsService = new google.maps.DirectionsService();
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 14,
//         center: { lat: latUser, lng: longUser },
//     });
//
//     directionsRenderer.setMap(map);
//
//     calculateAndDisplayRoute(directionsService, directionsRenderer);
//     document.getElementById("mode").addEventListener("change", () => {
//         calculateAndDisplayRoute(directionsService, directionsRenderer);
//     });
//
//     map.addListener("click", function () {
//
//     })
// }
//
// function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//     latUser = localStorage.getItem("user_latitude")
//     longUser = localStorage.getItem("user_longitude")
//     const selectedMode = document.getElementById("mode").value;
//     /*
//     * { lat: 38.7160369, lng: -9.1370057}
//     * { lat: 41.14961, lng: -8.61099}
//     * */
//     directionsService
//         .route({
//             origin: { lat: parseFloat(latUser), lng: parseFloat(longUser) },
//             destination: { lat: 38.7160369, lng: -9.1370057},
//             // Note that Javascript allows us to access the constant
//             // using square brackets and a string value as its
//             // "property."
//             travelMode: google.maps.TravelMode[selectedMode],
//         })
//         .then((response) => {
//             directionsRenderer.setDirections(response);
//             console.log(JSON.stringify(response))
//         })
//         .catch((e) => window.alert("Directions request failed due to " + status));
//
//
// }
//
// function animateCircle(line) {
//     var count = 0;
//     window.setInterval(function() {
//         count = (count + 1) % 200;
//         var icons = line.get('icons');
//         icons[0].offset = (count / 5) + '%';
//         line.set('icons', icons);
//     }, 20);
// }
//
//
// window.initMap = initMap;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // let url = window.location.href
// // const citymap = {
// //     lisboa: {
// //         center: { lat: 38.736946, lng: -9.142685 },
// //         population: 504718,
// //     },
// //     Porto: {
// //         center: { lat: 41.15, lng: -8.61024 },
// //         population: 214349,
// //     },
// // };
// //
// // const styles_map = [
// //     { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
// //     { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
// //     { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
// //     {
// //         featureType: "administrative.locality",
// //         elementType: "labels.text.fill",
// //         stylers: [{ color: "#d59563" }],
// //     },
// //     {
// //         featureType: "poi",
// //         elementType: "labels.text.fill",
// //         stylers: [{ color: "#d59563" }],
// //     },
// //     {
// //         featureType: "poi.park",
// //         elementType: "geometry",
// //         stylers: [{ color: "#263c3f" }],
// //     },
// //     {
// //         featureType: "poi.park",
// //         elementType: "labels.text.fill",
// //         stylers: [{ color: "#6b9a76" }],
// //     },
// //     {
// //         featureType: "road",
// //         elementType: "geometry",
// //         stylers: [{ color: "#38414e" }],
// //     },
// //     {
// //         featureType: "road",
// //         elementType: "geometry.stroke",
// //         stylers: [{ color: "#212a37" }],
// //     },
// //     {
// //         featureType: "road",
// //         elementType: "labels.text.fill",
// //         stylers: [{ color: "#9ca5b3" }],
// //     },
// //     {
// //         featureType: "road.highway",
// //         elementType: "geometry",
// //         stylers: [{ color: "#746855" }],
// //     },
// //     {
// //         featureType: "road.highway",
// //         elementType: "geometry.stroke",
// //         stylers: [{ color: "#1f2835" }],
// //     },
// //     {
// //         featureType: "road.highway",
// //         elementType: "labels.text.fill",
// //         stylers: [{ color: "#f3d19c" }],
// //     },
// //     {
// //         featureType: "transit",
// //         elementType: "geometry",
// //         stylers: [{ color: "#2f3948" }],
// //     },
// //     {
// //         featureType: "transit.station",
// //         elementType: "labels.text.fill",
// //         stylers: [{ color: "#d59563" }],
// //     },
// //     {
// //         featureType: "water",
// //         elementType: "geometry",
// //         stylers: [{ color: "#17263c" }],
// //     },
// //     {
// //         featureType: "water",
// //         elementType: "labels.text.fill",
// //         stylers: [{ color: "#515c6d" }],
// //     },
// //     {
// //         featureType: "water",
// //         elementType: "labels.text.stroke",
// //         stylers: [{ color: "#17263c" }],
// //     },
// //     {
// //         "featureType": "poi",
// //         "stylers": [
// //             { "visibility": "off" }
// //         ]
// //     },
// //     {
// //         "featureType": "transit",
// //         "stylers": [
// //             { "visibility": "off" }
// //         ]
// //     },
// //     {
// //         "featureType": "landscape",
// //         "stylers": [
// //             { "visibility": "true" }
// //         ]
// //     }
// //
// // ]
// //
// // const icons = {
// //     bar: {
// //         url: "images/map-markers/bar.png",
// //     },
// //     rest: {
// //         url: "images/map-markers/rest.png",
// //     },
// //     disco: {
// //         url: "images/map-markers/disco.png",
// //     },
// //
// //
// // };
// //
// // async function initMap() {
// //     let json
// //     if (url.search("localhost")) {
// //         json = await getDataOFF()
// //     } else {
// //         json = await getDataON()
// //     }
// //     var myLatlng = new google.maps.LatLng(parseFloat(json[0].sp_lat), parseFloat(json[0].sp_long));
// //
// //     var mapOptions = {
// //         zoom: 12.5,
// //         center: myLatlng,
// //         styles: styles_map,
// //         // hide: [
// //         //     {
// //         //         featureType: "all",
// //         //         stylers: [{ visibility: "off" }],
// //         //     },
// //         // ],
// //     }
// //     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// //
// //
// //     let url_icon = "";
// //     for (let i = 0; i < json.length; i++) {
// //
// //         console.log(json[i].sp_st_id)
// //         if(json[i].sp_st_id === 1){
// //             url_icon = icons.bar.url
// //         } else if (json[i].sp_st_id === 2) {
// //             url_icon = icons.rest.url
// //         } else{
// //             url_icon = icons.disco.url
// //         }
// //         var marker = new google.maps.Marker({
// //             icon: url_icon,
// //             position: new google.maps.LatLng(parseFloat(json[i].sp_lat), parseFloat(json[i].sp_long)),
// //             title:json[i].sp_name,
// //             animation: google.maps.Animation.DROP,
// //
// //         });
// //
// //         marker.setMap(map);
// //     }
// //
// // }
// //
// // async function getDataON(){
// //     /** online version **/
// //
// //     var targetUrl = 'https://ulide-party-api.herokuapp.com/api/spots'
// //
// //
// //     const response = await fetch(targetUrl)
// //     const data = await response.json()
// //     console.log(data)
// //     return data
// // }
// //
// // async function getDataOFF(){
// //     /** offline version **/
// //
// //     var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
// //         targetUrl = 'https://ulide-party-api.herokuapp.com/api/spots'
// //
// //
// //     const response = await fetch(
// //         proxyUrl + targetUrl)
// //     const data = await response.json()
// //     console.log(data)
// //     return data
// // }
// //
// // window.initMap = initMap;
