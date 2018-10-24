var aldermanInfo = [];
var map;
var labels;
var markers = [];

function displayAldermanInfo(alderman) {

    $("#content-info").empty();

    var info = $("<div>");
    info.addClass("info");

    var ward = $("<p>");
    ward.text("ward: " + alderman.ward);

    var name = $("<p>");
    name.text("Alderman Name: " + alderman.alderman);

    var site = $("<p>");
    var websiteText = alderman.website ? alderman.website : "Does not have a website";
    site.text("Website: " + websiteText);

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

    info.append(ward, name, site, email, chAddress, dAddress, cityPhone, wardPhone);
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
            var infowindow = makeInfoWindow(aldermanInfo[i]);
            infowindow.open(map, marker);
        });
        return marker;
    });



    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


    // // // FUNCTION TO POPULATE DATA
    google.maps.event.addListener(map, 'click', function (event) {
        console.log("click - page");

    });
};

// //INFO WINDOW
function makeInfoWindow(alderman) {
    var contentString = alderman.ward + " : " + alderman.alderman;
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    return infowindow;
}

var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
});
marker.addListener('click', function () {
    infowindow.open(map, marker);
});


