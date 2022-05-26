<!DOCTYPE html>
<html>
<head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
        /* Always set the map height explicitly to define the size of the div
         * element that contains the map. */
        #map {
            height: 100%;
        }
        /* Optional: Makes the sample page fill the window. */
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
<div id="map"></div>
<script src="javascripts/mapMarker.js" charset="utf-8"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDk31YFxoBBRi15FKVX3-9rF-Vr8vpGfSQ&callback=initMap"
        async defer></script>
<script>
    async function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(await senPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    async function senPosition(position) {
        console.log(position.coords.latitude.toString(), position.coords.longitude.toString())
        await localStorage.setItem('user_latitude', position.coords.latitude.toString());
        await localStorage.setItem('user_longitude', position.coords.longitude.toString());
    }

    getLocation()
</script>
</body>
</html>
