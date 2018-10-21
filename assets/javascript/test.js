//alert("Javascript for analytics is linked!")

$(document).ready(function () {
    //Bootstrap jQuery function for dropdown functionality:
    $('.dropdown-toggle').dropdown()

});

//firebase for database

//Survey Questions
var questions = [
    {
        text: "Do you feel your Alderman does a(n)",
        options: ["poor job", "adequate job", "excellent job"],
    },
    {
        text: "How do you feel~environmentally friendly",
        options: ["poor job", "adequate job", "excellent job"],
    },
    {
        text: "Do you feel your Alderman cares about your Ward",
        options: ["yes", "no", "not sure"],

    }
];

var questionIndex = 0;
var submitButton = document.getElementById("submit");
var quizContainer = document.getElementById("questions");


//to display questions via jquery
function displayQuestions() {

    $(".results").hide();
    $(".questions").show();
    var output = [];
    questions.forEach(
        (currentQ, questionNum) => {
            var options = [];
            for (value in currentQ.options) {
                options.push(
                    `<label>
                    <input type="radio" name="text${questionNum}" value="${value}">
                    ${value} :
                    ${currentQ.options[value]}
                  </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQ.text} </div>
                <div class="options"> ${options.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join("");
}
//call function

displayQuestions();

//Initialize Firebase
var config = {
    apiKey: "AIzaSyAZGHJvHqHkNuljfss-s0sSvoIxt9rIaLk",
    authDomain: "aldermanproject1.firebaseapp.com",
    databaseURL: "https://aldermanproject1.firebaseio.com",
    projectId: "aldermanproject1",
    storageBucket: "aldermanproject1.appspot.com",
    messagingSenderId: "78345956497"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function (snapshot) {
    var tweet = snapshot.val();
    var displayTime = moment.unix(tweet.time);
    // Display the tweet on the screen
    // using jQuery
    $("#tweets").prepend(`
        <div class="card tweet">
            <div class="card-body">
                ${tweet.message}
                <p>${displayTime.format("YYYY-MM-DD HH:m")}</p>
            </div>
        </div>
    `);
});

$(".btn-info").on("click", function () {
    var message = $("textarea").val();
    $("textarea").val("");

    database.ref().push({
        message: message,
        time: firebase.database.ServerValue.TIMESTAMP
    });
});
// database.ref().on("value", function (snapshot) {
//     //todo: add code to display tweets
//     var username = snapshot.val().username;
//     var message = snapshot.val().message;


//     console.log(snapshot);
//     $("#commentsAlderman").append(`<p> "${message}" - ${username}</p>`)
// });
// //event listener for click
// $("button").on("click", function () {
//     //send to firebase
//     var username = $("input").val();
//     var message = $("textarea").val();
//     database.ref().set({
//         username,
//         message
//     })
// });

