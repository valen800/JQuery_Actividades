$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        var formData = {
            'email'             : $('input[name=IEmail]').val(),
            'password'    : $('input[name=IPassword]').val()
        }

        $.ajax({
            type: 'GET',
            url: 'form.php',
            data: formData,
            dataType: 'json',
            encode: true
        }).done(function(data) {
            print(data);
            checkReturnCode(data);
        }).fail(function(data) {
            checkReturnCode(data);
        })
        event.preventDefault();
    })
})

function checkReturnCode(data) {
    console.log(data);
    if (data["success"]) {
        alert(data["message"])
    } else {
        alert(data["errors"]["error"])
    }
}
 
// https://www.digitalocean.com/community/tutorials/submitting-ajax-forms-with-jquery