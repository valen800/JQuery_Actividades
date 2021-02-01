$(document).ready(function() {
    $("button").click(function() {
        $("#loadingImage").show()
        $.ajax({
            url: "file.php",
        }).done( function(result) {
            $("#loadingImage").hide()
            $("#content").html(result)
        }).fail(function() {
            $("#loadingImage").hide()
            alert("Error file.php")
        })
    })
})