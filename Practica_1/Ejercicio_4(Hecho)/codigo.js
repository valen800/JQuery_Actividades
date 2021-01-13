$(document).ready(function() {

    $("input[type=checkbox]").change(function(event) {
        var firstInput = parseInt($("#inputNumber1Id").val());
        var SecondInput = parseInt($("#inputNumber2Id").val());

        if ($(this).is(':checked')) {
            checkForm(firstInput, SecondInput, event);
        } else {
            $('#inputResultId').remove();
        }
    })
});

function checkForm(firstInput, SecondInput, event) {
    
    if (firstInput != "" || SecondInput != "") {
        if (!isNaN(firstInput) || !isNan(SecondInput)) {
            let result = firstInput + SecondInput;
            console.log(result);

            let input = $("<input/>", {
                type: 'text',
                id: 'inputResultId',
                value: result,
                disabled: true,
            });

            /* input.prop('disabled', true); */
                    
            $("#myFormId").append(input);
        } else {
            if (event.preventDefault) {
                event.preventDefault();
            }
        }
    } else {
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
}