$(document).ready(function () {


    //handles the button click event
    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        console.log("woot woot!")
        var userInput = $("#user-input").val().trim();
        console.log(userInput);

    })

    // MAP API TAKEN FROM HERE.COM https://developer.here.com/projects/PROD-a7af1fdc-2566-4de4-8401-7dde444d89de
    // Instantiate a map and platform object:
    var platform = new H.service.Platform({
        'app_id': 'F7jbcRA63MfRnEIXkSi0',
        'app_code': 'hNqemGmwhISHm7R_3XAZhg'
    });
    // Retrieve the target element for the map:
    var targetElement = document.getElementById('mapContainer');

    // Get default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate the map:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.normal.map,
        {
            zoom: 10,
            center: { lat: 41.881832, lng: -87.623177 }
        });

    // Create the parameters for the geocoding request:
    var geocodingParams = {
        searchText: '2312 W Berwyn, Chicago IL'
    };

    // Define a callback function to process the geocoding response:
    var onResult = function (result) {
        var locations = result.Response.View[0].Result,
            position,
            marker;
        // Add a marker for each location found
        for (i = 0; i < locations.length; i++) {
            position = {
                lat: locations[i].Location.DisplayPosition.Latitude,
                lng: locations[i].Location.DisplayPosition.Longitude
            };
            marker = new H.map.Marker(position);
            map.addObject(marker);
        }
    };

    // Get an instance of the geocoding service:
    var geocoder = platform.getGeocodingService();

    // Call the geocode method with the geocoding parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    geocoder.geocode(geocodingParams, onResult, function (e) {
        alert(e);
    });








    //AJAX CALL


    // function userInput() {
    //     $("button").on("click", function () {
    //         var input = $(this).attr("data-name");
    //         // console.log(movie);

    //         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=fuR6CscpNgfqH8BemuXHuAzAucb6xoo5&limit=5";
    //         // console.log(queryURL);

    //         $.ajax({
    //             url: queryURL,
    //             method: "GET"
    //         })
    //             .then(function (response) {
    //                 // console.log(response);

    //                 var results = response.data;
    //                 for (var i = 0; i < results.length; i++) {
    //                     var movieDiv = $("<div>");

    //                 }
    //             })
    //     })
    // }

});