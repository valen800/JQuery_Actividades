$(document).ready(function() {


    $("#initEfect").click(function() {
        var cube = $("#cube");
        Effectqueue().queue(Effectqueue());
    })
})

function Effectqueue(cube) {

    cube.animate({height: "300"}, 1000)
    cube.css("background-color", "blue")
    cube.animate({width: "300"}, 1000)
}
// https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=80608