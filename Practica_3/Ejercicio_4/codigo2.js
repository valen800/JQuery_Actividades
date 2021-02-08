$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        var serializeData = $(this).serialize();
        console.log(serializeData)
        /* var formData = {
            'email'             : $('input[name=IEmail]').serialize(),
            'password'    : $('input[name=IPassword]').serialize()
        } */

        $.ajax({
            type: 'GET',
            url: 'form2.php',
            data: serializeData,
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
    alert(data);
}