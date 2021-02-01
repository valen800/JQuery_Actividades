$(document).ready(function() {
    $("#buttonShow").click(function() {
        $("#imgId").show()
    })
    $("#buttonHide").click(function() {
        $("#imgId").hide()
    })
    $("#buttonFadeIn").click(function() {
        $("#imgId").fadeIn()
    })
    $("#buttonFadeOut").click(function() {
        $("#imgId").fadeOut()
    })
    $("#buttonSlideDown").click(function() {
        $("#imgId").slideDown()
    })
    $("#buttonSlideUp").click(function() {
        $("#imgId").slideUp()
    })
    $("#buttonSlideToggle").click(function() {
        $("#imgId").slideToggle()
    })
})