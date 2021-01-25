$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            type: "GET",
            url: "xml/cd.xml",
            dataType: "xml",
            success: function (xml) {
        
                // Parse the xml file and get data
                $(xml).find("person").each(function() {
                    var name = $(this).find('name').text();
                    var age = $(this).find('age').text();
                    $("#content").append("Name: " + name + " Age: " + age +"<br />");
                })
            }
        });
    })
})