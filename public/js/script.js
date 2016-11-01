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


$(window).scroll(function () {
    $("nav").css("background-color", "#A0A0A0");
    $("nav").css("border-bottom", "2px solid black");
    $("#bg").css("opacity", "0.9");
})

});