async  function link() {
    const script = document.body.appendChild(document.createElement('script'));
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
    script.id="googleApiKey"
}
link()