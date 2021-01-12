$(document).ready(function() {
    $("input[type=radio]").click(function() {
        let color = $(this).val();
        $('p').css("color", color);
    })  
})