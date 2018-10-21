// alert("Javascript for home page is linked!")

// $(document).ready(function () {
//     $('.carouselEducationalSlides').carousel({
//         interval: 5000,
//     });
// });

$(document).ready(function () {
    // Activate carousel
    $("#carouselEducationSlides").carousel();
    $(".card").hide();

    // $(".btn").on("click", function () {
    //     $(".card").show();

    // });

    $("#btn1").on("click", function () {
        $("#card1").show();
    });

    $("#btn2").on("click", function () {
        $("#card2").show();
    });

    $("#btn3").on("click", function () {
        $("#card3").show();
    });
    $("#btn4").on("click", function () {
        $("#card4").show();
    });



    // Enable carousel control
    // $(".left").click(function () {
    //     $("#carouselEducationalSlides").carousel('prev');
    // });
    // $(".right").click(function () {
    //     $("#carouselEducationalSlides").carousel('next');
    // });

    // // Enable carousel indicators
    // $(".slide-one").click(function () {
    //     $("#carouselEducationalSlides").carousel(0);
    // });
    // $(".slide-two").click(function () {
    //     $("#carouselEducationalSlides").carousel(1);
    // });
    // $(".slide-three").click(function () {
    //     $("#carouselEducationalSlides").carousel(2);
    // });
});



