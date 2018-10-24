var aldermanInfo = [];
var map;
var labels;
var markers = [];

function displayAldermanInfo(alderman) {


    var info = $("<div>");
    info.addClass("info");

    var ward = $("<p>");
    ward.text("ward: " + alderman.ward);

    var name = $("<p>");
    name.text("Alderman Name: " + alderman.alderman);

    var site = $("<p>");
    site.text("Website: " + alderman.website);

    var email = $("<p>");
    email.text("Email Address: " + alderman.email);

    var chAddress = $("<p>");
    chAddress.text("City Hall Address: " + alderman.city_hall_address);

    var dAddress = $("<p>");
    dAddress.text("Distric Office Address: " + alderman.address);

    var cityPhone = $("<p>");
    cityPhone.text("City Hall Phone: " + alderman.city_hall_phone);

    var wardPhone = $("<p>");
    wardPhone.text("Disctrict Office Phone: " + alderman.ward_phone);

    info.append(ward, alderman, site, email, chAddress, dAddress, cityPhone, wardPhone);
    $("#content-info").append(info);
}

$.ajax({
    url: "https://data.cityofchicago.org/resource/7ia9-ayc2.json",
    type: "GET",
    data: {
        "$limit": 5000,
        "$$app_token": "K7i1lV0vqt5nRSZfFySmhy84t"
    }
}).done(function (data) {
    console.log("data is loaded");
    aldermanInfo = data;


});


//INITIALIZE MAP FUNCTION
function initMap() {
    // SET MAP FOCUS - CHICAGO
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 41.881832, lng: -87.623177 }
    });


    // Add some markers to the map.
    var markers = wardOffices.map(function (location, i) {
        var marker = new google.maps.Marker({
            position: location,
            title: "" + (i + 1)
        });
        marker.addListener("click", function () {
            displayAldermanInfo(aldermanInfo[i]);
            // console.log(this.title);

        });
        return marker;
    });
    // console.log(markers);



    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


    // // // FUNCTION TO POPULATE DATA
    google.maps.event.addListener(map, 'click', function (event) {
        console.log("click - page");

    });
};




// var content = 

// //INFO WINDOW
// var infowindow = new google.maps.InfoWindow({
//     content: content
// });


// infoBubble = new InfoBubble({
//     maxWidth: 300
// });

// infoBubble2 = new InfoBubble({
//     map: map,
//     content: '<div class="phoneytext">Some label</div>',
//     position: new google.maps.LatLng(wardOffices),
//     shadowStyle: 1,
//     padding: 0,
//     backgroundColor: 'rgb(57,57,57)',
//     borderRadius: 4,
//     arrowSize: 10,
//     borderWidth: 1,
//     borderColor: '#2c2c2c',
//     disableAutoPan: true,
//     hideCloseButton: true,
//     arrowPosition: 30,
//     backgroundClassName: 'phoney',
//     arrowStyle: 2
// });

// infoBubble.open(map, marker);
// infoBubble2.open();

// var div = document.createElement('DIV');
// div.innerHTML = 'Hello';

// infoBubble.addTab('A Tab', div);
// infoBubble.addTab('Uluru', contentString);

// google.maps.event.addListener(marker, 'click', function () {
//     if (!infoBubble.isOpen()) {
//         infoBubble.open(map, marker);
//     }
// });
