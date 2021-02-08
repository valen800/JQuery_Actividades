$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: "file.js",
        }).done( function(result, textStatus, jqXHR) {
            $("#content").html("Codigo: " + eval(result))
            alert(textStatus + " - " + jqXHR.status + "" + jqXHR.responseText)
        }).fail(function(jqXHR, textStatus) {
            alert(textStatus + " - " + jqXHR.status + jqXHR.responseText)
        })
    })
})