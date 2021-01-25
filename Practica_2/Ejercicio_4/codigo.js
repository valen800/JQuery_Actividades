$(document).ready(function() {
    $("button").click(function() {
        $.post("result.php", { coche: "Ford", modelo: "Focus", color: "rojo"}, function(htmlexterno) {
            $("#content").html(htmlexterno);
        })
    })
})