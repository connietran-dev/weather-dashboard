function currentWeather(cityToSearch) {

    // Sample URL: https://api.openweathermap.org/data/2.5/weather?appid=4a56f566a02550ae1a4ca20559e1de75&q=Atlanta&units=imperial;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + cityToSearch + "&units=imperial";

    // console.log("queryURL: " + queryURL);

    // console.log("City searched: " + $('#city-text').val());

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $(".city").html(response.name);

        $("#currentDate").text(moment(response.dt).format('ddd Do'));

        var currentIcon = response.weather.icon;
        console.log(currentIcon);

        var temp = Math.round(response.main.temp);
        $(".temp").html(`${temp}`);
        $(".temp").append(`<span class="units">&#176;F</span>`);

        $(".humidity").html(`${response.main.humidity} `);
        $(".humidity").append(`<span class="units">%</span>`);

        var wind = Math.round(response.wind.speed);
        $(".wind").html(`${wind}`);
        $(".wind").append(`<span class="units">mph</span>`);


    });
};


function getUVIndex(cityToSearch) {

    // Lat / long are needed for the UV

    // First, get lat/long of city from main weather call

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + cityToSearch;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var cityLong = response.coord.lon;
        var cityLat = response.coord.lat;

        var UVqueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLong;

        // console.log("UVqueryURL: " + UVqueryURL);

        $.ajax({
            url: UVqueryURL,
            method: "GET"
        }).then(function (response) {

            $('.UV').html(`${response.value}`);

        });

    });

};