var wardOffices = [
    {
        lat: 41.919350,
        lon: -87.687980,
        title: 'Title A1',
        html: '<h3>Content A1</h3>',
        icon: 'http://maps.google.com/mapfiles/markerA.png',
        // animation: google.maps.Animation.DROP
    }];

$.ajax({
    url: "https://data.cityofchicago.org/resource/7ia9-ayc2.json",
    type: "GET",
    data: {
        "$limit": 5000,
        "$$app_token": "K7i1lV0vqt5nRSZfFySmhy84t"
    }
}).done(function (data) {
    console.log("data loaded");

});

// Initialize and add the map
function initMap() {
    // The location of Chicago
    var chicago = { lat: 41.881832, lng: -87.623177 };
    // The map, centered at Chicago
    var map = new google.maps.Map(
        document.getElementById('gmap'), { zoom: 11, center: chicago });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: chicago, map: map });
}

//dropdown example
new Maplace({
    locations: wardOffices,
    map_div: '#map-dropdown',
    controls_title: 'Choose a location:',
    listeners: {
        click: function (map, event) {
            alert('That was a click!');
        }
    }
}).Load();

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(entry.location_1.latitude,
        entry.location_1.longitude),
    map: map,
    title: location.name
});