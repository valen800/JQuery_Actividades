$(document).ready(function() {
    objectCapas = $("div");
    nCapas = $("div").length;

    alert("Número de capas: " + nCapas)

    changeColor(objectCapas);
});

function changeColor(object) {
    console.log(object);
    object.css("color", "green")
}