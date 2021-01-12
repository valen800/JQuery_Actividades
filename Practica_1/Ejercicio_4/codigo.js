$(document).ready(function() {
    var firstInput = parseInt($("#inputNumber1Id").val());
    var SecondInput = parseInt($("#inputNumber2Id").val());

    $("input[type=checkbox]").click(function() {
        /* if ($("input[type=checkbox]:checked")) */
        checkForm(firstInput, SecondInput);
    })
});

function checkForm(firstInput, SecondInput) {
    if (firstInput != "" || SecondInput != "") {
        if (!isNaN(firstInput) || !isNan(SecondInput)) {
            let result = firstInput + SecondInput;

            let input = $("<input/>", {
                type: 'text',
                id: 'inputResultId',
                value: result,
            });
            
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