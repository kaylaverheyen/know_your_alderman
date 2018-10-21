//alert("Javascript for analytics is linked!")

$(document).ready(function () {
    //Bootstrap jQuery function for dropdown functionality:
    $('.dropdown-toggle').dropdown()


});

function getSelectedValue() {
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
}
getSelectedValue();
//firebase for database

//Survey Questions
var questions = [
    {
        text: "Overall how do you feel your Alderman is doing?",
        options: ["Unsatisfactory", "Improvement Needed", "Meets Expectations", "Exceeds Expectations", "Exceptional"],
    },
    {
        text: "My Alderman's projects to improve my Ward are relevant and important.",
        options: ["Unsatisfactory", "Improvement Needed", "Meets Expectations", "Exceeds Expectations", "Exceptional"],
    },
    {
        text: "Do you feel your Alderman cares about your Ward and the community?",
        options: ["Unsatisfactory", "Improvement Needed", "Meets Expectations", "Exceeds Expectations", "Exceptional"],

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
    // Display the tweet on the screen
    // using jQuery
    $("#tweets").prepend(`
        <div class="card tweet">
            <div class="card-body">
                ${tweet.message}
            </div>
        </div>
    `);
});

$(".btn-info").on("click", function () {
    var message = $("textarea").val();
    $("textarea").val("");

    database.ref().push({
        message: message
    });
});

var chart = document.getElementById("lineChart");
console.log(chart);
var myPieChart = new Chart(chart, {
    type: 'pie',
    data: {
        labels: ["Community Outreach", "likability", "environmentally friendly"],
        datasets: [{
            backgroundColor: ["#16a085", "#f1c40f", "#e67e22"],
            data: [10, 20, 30]

        }],



    }

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

