var t = 0;

$(document).ready(function() {
    $("#initEfect").click(function() {
        moveit();
    })

    $("#stopEfect").click(function() {
        $(".content").stop();
    })
})

function moveit() {
    t += 0.05;

    var r = 100;         // radius
    var xcenter = 100;   // center X position
    var ycenter = 100;   // center Y position

    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));

    $(".content").animate({
        top: newTop,
        left: newLeft,    
    }, 1, function() {
        moveit()
    })
}