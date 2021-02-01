$(document).ready(function() {
    var countries = "";

    $.ajax({
        url: "https://restcountries.eu/rest/v2/region/europe",
        type: "GET",
    }).done(function(data) {
        Object.keys(data).map(function(key) {
            countries = countries + data[key]["name"] + "<br/>"
            console.log(countries);
           $("#content").html(countries);
        })
    })
})
