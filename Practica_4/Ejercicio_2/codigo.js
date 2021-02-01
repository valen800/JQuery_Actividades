$(document).ready(function() {
    $("#buttonGreet").click(function() {
        $(".content-p").css("opacity", 1)
    })

    $("#buttonFarewell").click(function() {
        $(".content-p").css("opacity", 0)
    })
})