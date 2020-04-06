// Main file for getting 5-day forecast

function getForecast() {

    console.log("Hello Forecast!");

    var searchedCity = $('#city-text').val();

    // Sample URL: http://api.openweathermap.org/data/2.5/forecast?q={city%20name}&appid={your%20api%20key}
    // http://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=4a56f566a02550ae1a4ca20559e1de75
    var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey + "&q=" + searchedCity + "&units=imperial";

    console.log("Forecast URL: " + forecastURL);

    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function (response) {

        // Log the resulting object
        console.log(response.list[2]);

    });

};