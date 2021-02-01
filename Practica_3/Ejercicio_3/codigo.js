$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: "file.js",
        }).done( function(result) {
            $("#content").html("Codigo: " + result)
        }).fail(function() {
            alert("Error file.php")
        })
    })
})