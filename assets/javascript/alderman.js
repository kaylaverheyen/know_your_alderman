// $(document).ready(function () {

//     // Alderman Search API - database of alderman
//     $.ajax({
//         url: "https://data.cityofchicago.org/resource/7ia9-ayc2.json",
//         type: "GET",
//         data: {
//             "$limit": 5000,
//             "$$app_token": "K7i1lV0vqt5nRSZfFySmhy84t"
//         }
//     }).done(function (data) {
//         console.log(data);
//     });

// Ward Search API - allows you to search your address and outputs your alderman
$.ajax({
    url: "https://gisapps.cityofchicago.org/WardGeocode/wardoffice.json",
    type: "POST",
    data: {
        "ForwardGeocodeServiceInput3": {
            "systemId": "WARD_LOOKUP",
            "offsetFt": "20",
            "fullAddress": "2613 W Hirsch",
            "getGeos": { "geographyName": "WARD" }
        }
    }
}).then(function (response) {
    // console.log(response);

    var results = response.data;

})
// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyAXMuxXSkw-meUFq02228784tcd0dxo0DQ",
//     authDomain: "chi-aldrmn.firebaseapp.com",
//     databaseURL: "https://chi-aldrmn.firebaseio.com",
//     projectId: "chi-aldrmn",
//     storageBucket: "chi-aldrmn.appspot.com",
//     messagingSenderId: "177285712818"
// };
// firebase.initializeApp(config);


// Get a reference to the database service
// var database = firebase.database();
// console.log(database);


    // function findMyWard() {

    //     // Connect the button click to a search
    //     $("button").on("click", function () {
    //         var addySearch = $(this).attr("data-address");

    //         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=fuR6CscpNgfqH8BemuXHuAzAucb6xoo5&limit=5";
    //         // console.log(queryURL);

    //     })
    // }
