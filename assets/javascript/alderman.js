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
    { lat: 41.919350, lng: -87.687981 }, //Ward 1
    { lat: 41.907080, lng: -87.667810 },
    { lat: 41.801880, lng: -87.652230 },
    { lat: 41.831030, lng: -87.831030 },
    { lat: 41.764340, lng: -87.681670 },
    { lat: 41.748880, lng: -87.614410 },
    { lat: 41.722100, lng: -87.568160 },
    { lat: 41.765760, lng: -87.605570 },
    { lat: 41.704460, lng: -87.535650 },
    { lat: 41.690100, lng: -87.621600 }, // Ward 10
    { lat: 41.827490, lng: -87.645880 },
    { lat: 41.830900, lng: -87.677230 },
    { lat: 41.774559, lng: -87.722832 },
    { lat: 41.801140, lng: -87.691150 },
    { lat: 41.779541, lng: -87.666222 },
    { lat: 41.778648, lng: -87.699959 },
    { lat: 441.760990, lng: -87.663292 },
    { lat: 41.691110, lng: -87.720400 },
    { lat: 41.704460, lng: -87.681840 },
    { lat: 41.765760, lng: -87.605570 }, //Ward 20
    { lat: 41.729860, lng: -87.662380 },
    { lat: 41.845960, lng: -87.712640 },
    { lat: 41.793160, lng: -87.776380 },
    { lat: 41.734780, lng: -87.726280 },
    { lat: 41.856910, lng: -87.662160 },
    { lat: 41.902740, lng: -87.690000 },
    { lat: 41.896830, lng: -87.628400 },
    { lat: 41.859570, lng: -87.691010 },
    { lat: 41.909470, lng: -87.782840 },
    { lat: 41.945480, lng: -87.733750 },// Ward 30
    { lat: 41.945480, lng: -87.733750 },
    { lat: 41.930050, lng: -87.675080 },
    { lat: 41.953810, lng: -87.703300 },
    { lat: 41.692150, lng: -87.635450 },
    { lat: 41.895550, lng: -87.707800 },
    { lat: 41.932110, lng: -87.698820 },
    { lat: 41.895220, lng: -87.749240 },
    { lat: 41.949580, lng: -87.806800 },
    { lat: 41.968390, lng: -87.738170 },
    { lat: 41.987620, lng: -87.703330 }, // Ward 40
    { lat: 41.016670, lng: -87.806940 },
    { lat: 41.894530, lng: -87.636670 },
    { lat: 41.928010, lng: -87.648560 },
    { lat: 41.940500, lng: -87.653970 },
    { lat: 41.966700, lng: -87.760170 },
    { lat: 41.964401, lng: -87.656822 },
    { lat: 41.958960, lng: -87.681820 },
    { lat: 41.964400, lng: -87.656820 },
    { lat: 41.896110, lng: -87.664910 },
    { lat: 41.997150, lng: -87.728930 } //Ward 50

];

