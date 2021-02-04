$(document).ready(function() {
    $('h1').click(function(){
        $("h1").animate({
            color: "red"
        }, 1500);
    });
    // Sirve solo para uno, que es el que pulsas.
    /* $('h1').click(function(){
        $(this).animate({
            color: "red"
        }, 1500);
    }); */
})