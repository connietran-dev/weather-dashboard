// This JS file will be the main file that drives the city search
console.log("Hello Weather!");

// This is our API key
var APIKey = "4a56f566a02550ae1a4ca20559e1de75";

// Main functions: When city search is submitted
$(document).ready(function () {

    $('#city-search').submit(function () {

        event.preventDefault();
        currentWeather();
        getUVIndex();
        getForecast();

    })

});


function currentWeather(event) {

    var searchedCity = $('#city-text').val().trim();

    // Here we are building the URL we need to query the database
    // Sample URL: https://api.openweathermap.org/data/2.5/weather?appid=4a56f566a02550ae1a4ca20559e1de75&q=Atlanta&units=imperial;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + searchedCity + "&units=imperial";

    console.log("queryURL: " + queryURL);

    console.log("City searched: " + $('#city-text').val());


    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Transfer content to HTML
        $(".city").html(response.name);

        var temp = Math.round(response.main.temp);
        $(".temp").html(`${temp} &#176;F`);

        var wind = Math.round(response.wind.speed);
        $(".wind").html(`${wind} mph`);


        $(".humidity").html(`${response.main.humidity} %`);

    });
};


function getUVIndex() {

// Lat / long are needed for the UV

    // First, get lat/long of city from main weather call
    var searchedCity = $('#city-text').val().trim();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + searchedCity;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var cityLong = response.coord.lon;
        var cityLat = response.coord.lat;

        var UVqueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLong;

        console.log("UVqueryURL: " + UVqueryURL);

        $.ajax({
            url: UVqueryURL,
            method: "GET"
        }).then(function (response) {

            $('.UV').html(`${response.value}`);

        });

    });

};