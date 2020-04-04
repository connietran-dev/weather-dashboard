// This JS file will be the main file that drives the city search
console.log("Hello Weather!");

// This is our API key
var APIKey = "4a56f566a02550ae1a4ca20559e1de75";

console.log("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=4a56f566a02550ae1a4ca20559e1de75");

$('#city-search').submit(function(event) {

    event.preventDefault();

    var searchedCity = $('#city-search').val();

    // Here we are building the URL we need to query the database
    // Sample URL: https://api.openweathermap.org/data/2.5/weather?appid=4a56f566a02550ae1a4ca20559e1de75&q=Atlanta;
    // Sample URL: https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=4a56f566a02550ae1a4ca20559e1de75;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + APIKey

    console.log(queryURL);

    console.log("City searched is: " + $('#city-text').val());


    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").text(response.name);

            // Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;

            // add temp content to html
            $(".temp").text("Temperature (K) " + response.main.temp);
            $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);



            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + tempF);
        });


});