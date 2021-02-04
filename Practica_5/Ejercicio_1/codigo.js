$(document).ready(function() {

    $("#disapearButton").click(function() {
        $("p").hideParagraphs();
    })
    
})


jQuery.fn.hideParagraphs = function() {
    this.each(function() {
        element = $(this);
        element.css("display", "none");
    })
    return this;
}
