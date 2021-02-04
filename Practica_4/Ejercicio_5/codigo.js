$(document).ready(function() {


    $("#initEfect").click(function() {
        var cube = $("#cube");
        Effectqueue(cube);
    })
})

function Effectqueue(cube) {

    cube.animate({height: "300"}, 1000)
    cube.delay(2000)
    cube.queue(function(cotinua) {
        cube.css("background-color", "blue")
        cotinua();
    })
    cube.delay(2000)
    cube.animate({width: "300"}, 1000)
}
// https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=80608