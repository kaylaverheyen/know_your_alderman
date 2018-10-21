// What happens when page loads
$(document).ready(function () {
    // Activate carousel
    $("#carouselEducationSlides").carousel();
    $(".card").hide();

    // On click event that displays info card for each star button pressed
    $("#btn1").on("click", function () {
        $("#card1").toggle();
        $("#card1").addClass("animated flipInX");
    });

    $("#btn2").on("click", function () {
        $("#card2").toggle();
        $("#card2").addClass("animated flipInX");
    });

    $("#btn3").on("click", function () {
        $("#card3").toggle();
        $("#card3").addClass("animated flipInX");
    });

    $("#btn4").on("click", function () {
        $("#card4").toggle();
        $("#card4").addClass("animated flipInX");
    });
});



