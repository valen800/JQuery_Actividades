$(document).ready(function() {

    var object1 = {
        apple: 0,
        banana: { weight: 52, price: 100 },
        cherry: 97
    };
    var object2 = {
        banana: { price: 200 },
        durian: 100
    };

    $("#mergeButton").click(function() {
        $("#content").merge(object1, object2);
    })
    
})


jQuery.fn.merge = function(object1, object2) {
    this.each(function() {
        element = $(this);
        $.extend( object1, object2 );
        element.append(JSON.stringify(object1))
    })
    return this;
}
