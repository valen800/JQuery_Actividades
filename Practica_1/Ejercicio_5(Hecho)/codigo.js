$("p").mouseover(function() {
    $("p").removeClass("bigSize");
    $("p").addClass("smallSize");
})

$("p").mouseout(function() {
    $("p").removeClass("smallSize");
    $("p").addClass("bigSize");
})