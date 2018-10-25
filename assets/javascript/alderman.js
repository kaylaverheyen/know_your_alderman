var aldermanInfo = [];
var map;
var labels;
var markers = [];

// FUNCTIN TO DYNAMICALLY DISPLAY ALDERMAN INFORMATION ON MARKER CLICKS
function displayAldermanInfo(alderman) {

    // $("#content-info").empty();

    //CAPTURE DATA IN VARIABLES

    var ward = $("#ward-info");
    ward.text(alderman.ward);

    var name = $("#name-info");
    name.text(alderman.alderman);

    var site = $("#site-info");
    var websiteText = alderman.website ? alderman.website : "Does not have a website";
    site.text(websiteText);

    var email = $("#email-info");
    email.text(alderman.email);

    var chAddress = $("#ch-address");
    chAddress.text(alderman.city_hall_address);

    var dAddress = $("#d-address");
    dAddress.text(alderman.address);

    var cityPhone = $("#ch-phone");
    cityPhone.text("City Hall Phone:  " + alderman.city_hall_phone);

    var wardPhone = $("#d-phone");
    wardPhone.text("Disctrict Office Phone:  " + alderman.ward_phone);

}

// AJAX CALL TO CITY OF CHICAGO WARD API + TOKEN
$.ajax({
    url: "https://data.cityofchicago.org/resource/7ia9-ayc2.json",
    type: "GET",
    data: {
        "$limit": 5000,
        "$$app_token": "K7i1lV0vqt5nRSZfFySmhy84t"
    }
}).done(function (data) {
    aldermanInfo = data;
    console.log(data);

});


//INITIALIZE MAP FUNCTION USING THE GOOGLE API + KEY
function initMap() {
    // SET MAP FOCUS - CHICAGO
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 41.881832, lng: -87.623177 }
    });


    // ADD MARKERS USING LOCATIONS.JS
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



    // MARKER CLUSTERS
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

};

// FUNCTION TO CREATE INFO WINDOW WITHIN MAP
function makeInfoWindow(alderman) {
    var contentString = alderman.ward + " : " + alderman.alderman;
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    return infowindow;
}



