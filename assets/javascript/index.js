// What happens when page loads
$(document).ready(function () {
    // Activate carousel
    $("#carouselEducationSlides").carousel();
    $(".card").hide();

    // On click event that displays info card for each star button pressed
    $("#btn1").on("click", function () {
        $("#btn1").addClass("animated pulse");
        $("#card1").toggle();
        $("#card1").addClass("animated flipInX");

    });

    $("#btn2").on("click", function () {
        $("#btn2").addClass("animated pulse");
        $("#card2").toggle();
        $("#card2").addClass("animated flipInX");
    });

    $("#btn3").on("click", function () {
        $("#btn3").addClass("animated pulse");
        $("#card3").toggle();
        $("#card3").addClass("animated flipInX");
    });

    $("#btn4").on("click", function () {
        $("#btn4").addClass("animated pulse");
        $("#card4").toggle();
        $("#card4").addClass("animated flipInX");
    });
});

$(this).on("click", function () {
    $(".instructions").hide();
})



