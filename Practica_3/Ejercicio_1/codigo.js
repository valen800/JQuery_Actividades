$(document).ready(function() {
    $("button").click(function() {
        $.ajax(
            /* url: "file.txt",
            success: function(result) {
                $("#content").html(result)
            } */
            "file.txt"
        ).done(function(result) {
            $("#content").html(result)
        }).fail(function() {
            alert("Error file.txt")
        })
    })
})