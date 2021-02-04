$(document).ready(function() {

    $("#addNumbers").click(function() {
        $(this).add(2, 3);
    })
    
})

jQuery.fn.add = function(x,y) {
    z = x + y;
    alert(z);
}
