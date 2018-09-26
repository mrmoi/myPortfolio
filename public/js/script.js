$(document).ready(function(){

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();

        $('.aboutContainer').each(function() {
            var topDistance = $(this).offset().top;

            if ( (topDistance) < scrollTop ) {
                $("nav").css("background-color", "black");
            } else {
                $("nav").css("background-color", "rgba(0, 0, 0, 0.5)");
            }
        });
    });




});