// This JS file will be the main file that drives the city search
console.log("Hello Weather!");

// This is our API key
var APIKey = "4a56f566a02550ae1a4ca20559e1de75";


$(document).ready(function () {

    $('#city-search').submit(currentWeather)

});


function currentWeather(event) {

    event.preventDefault();

    var searchedCity = $('#city-text').val();

    // Here we are building the URL we need to query the database
    // Sample URL: https://api.openweathermap.org/data/2.5/weather?appid=4a56f566a02550ae1a4ca20559e1de75&q=Atlanta;
    // Sample URL: https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=4a56f566a02550ae1a4ca20559e1de75;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + searchedCity;

    console.log(queryURL);

    console.log("City searched is: " + $('#city-text').val());


    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").text(response.name);

        // Convert the temp to fahrenheit
        var tempF = Math.round((response.main.temp - 273.15) * 1.80 + 32);
        // add temp content to html
        $(".temp").text(tempF);

        $(".wind").text(response.wind.speed);
        $(".humidity").text(response.main.humidity);


        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
    });
};