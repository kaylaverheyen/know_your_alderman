//INITIALIZE MAP
function initMap() {
    // SET MAP FOCUS - CHICAGO
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 41.881832, lng: -87.623177 }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
var locations = [
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 }, //10
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 }, //20
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 }, //30
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 }, //40
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.919350, lng: -87.687981 },
    { lat: 41.907080, lng: -87.667810 } //50

];

