//alert("Javascript for analytics is linked!")

$(document).ready(function () {
    var Q1, Q2, Q3 = 0;
    //Bootstrap jQuery function for dropdown functionality:
    $('.dropdown-toggle').dropdown()

});
//display the value (ie alderman name) selected to the right of the drop down button

// $(".dropdown-toggle").on("click", function () {
$(document).on("click", "a", function () {
    // var pickAlderman = $("#list").val();
    var pickAlderman = $(this).attr("data-val");
    $("#a_name").text(pickAlderman);
    //$("#aldermanChoice").append("<span>" + pickAlderman);
    console.log(pickAlderman);
});





//Survey Questions
var questions = [
    {
        text: "How would you rate your Alderman's overall job performance?",
        options: ["Unsatisfactory", "Improvement Needed", "Meets Expectations", "Exceeds Expectations", "Exceptional"],
    },
    {
        text: "My Alderman's projects to better my Ward are relevant and important.",
        options: ["Unsatisfactory", "Improvement Needed", "Meets Expectations", "Exceeds Expectations", "Exceptional"],
    },
    {
        text: "My Alderman is environmentally conscious and working to improve our Ward.",
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
                    `<label style="margin-right:10px;">
                    <br>
                    <input type="radio" name="text${questionNum}" value="${value}" >
        
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

//add submit button
$(".btn-primary").on("click", function () {
    //$(".questions").hide();
    Q1 = $("input[name='text0']:checked").val();
    Q2 = $("input[name='text1']:checked").val();
    Q3 = $("input[name='text2']:checked").val();
    console.log(Q1 + " " + Q2 + " " + Q3);
    $('input[type=radio]').prop('checked', false);

    var chart = document.getElementById("pieChart");
    console.log(chart);
    var myPieChart = new Chart(chart, {
        type: 'pie',
        data: {
            labels: ["Job Proficiency", "Community Outreach", "Environmentally Friendly"],
            datasets: [{
                backgroundColor: ["#16a085", "#f1c40f", "#e67e22"],
                data: [Q1, Q2, Q3]

            }],
        }

    });

    Q1, Q2, Q3 = 0;
    //store options[value] to firebase database 
    //push array of values for the pie chart 
    // var surveySubmit = $()

});

//us the chart to call back on the value and display on the pie chart. 


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

//write a message about your alderman here: 
$(".btn-info").on("click", function () {
    var message = $("textarea").val();
    var username = $("input").val();
    console.log(username);
    $("input").val("");
    $("textarea").val("");

    database.ref().push({
        message: message,
        username: username
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

