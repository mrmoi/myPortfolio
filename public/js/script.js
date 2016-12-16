$(document).ready(function(){

/*document.write("Hello, World!");*/

/*    $("#mydiv").scroll(function(){
        if($(this)[0].scrollHeight - $(this).scrollTop() <= $(this).outerHeight())
        {
            alert(1);
        }

        if($(this).scrollTop() == 0)
        {
            alert(2);
        }
    });
*/
/*$("p").css("background-color", "yellow");*/

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


//$(window).scroll(function () {
//    $("nav").css("background-color", "#A0A0A0");
//    $("nav").css("border-bottom", "2px solid black");
//    $("#bg").css("opacity", "0.9");
//})

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();

        $('.aboutContainer').each(function() {
            var topDistance = $(this).offset().top;

            if ( (topDistance) < scrollTop ) {
                //alert( $(this).text() + ' was scrolled to the top' );
                $("nav").css("background-color", "black");
                //$("#bg").css("opacity", "0.6");
                //$(".aboutContainer").css("opacity", "0.9");
            } else {
                $("nav").css("background-color", "rgba(0, 0, 0, 0.5)");
                $(".menuHeading:hover").css("color", "yellow");
                //$("#bg").css("opacity", "0.9");
            }
        });
    });




});