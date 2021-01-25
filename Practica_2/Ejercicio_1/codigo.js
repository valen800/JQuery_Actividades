$(document).ready(function() {
    $("button").click(function() {
        $.get("file.txt", function( data ) {
            $("#content").html(data);
        }).done(function() {
            alert("Done")
        }).fail(function() {
            alert("Fail")
        }).always(function() {
            alert("Always")
        })
    })
})