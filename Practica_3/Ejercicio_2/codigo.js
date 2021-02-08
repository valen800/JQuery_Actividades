$(document).ready(function() {
    $("button").click(function() {
        $("#loadingImage").show()
        $.ajax({
            url: "fil.php",
        }).done( function(result) {
            $("#loadingImage").hide()
            $("#content").html(result)
        }).fail(function(jqXHR, textStatus) {
            $("#loadingImage").hide()
            alert(textStatus + " - " + jqXHR.status + jqXHR.responseText)
        })
    })
})