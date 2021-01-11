$(document).ready(function() {
    $("#btn1").click(function() {
      $("#img1").fadeOut(2000, function() {
        $("#img1").slideDown(3000);
        $("#img1").slideUp(3000);
      });
    });
});