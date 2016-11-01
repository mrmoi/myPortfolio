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
    $("nav").css("background-color", "black");
})




/*
 $(document).on( 'scroll', 'nav', function() {
    $("nav").css("background-color", "black");
     console.log('Event Fired');
 })
*/





});