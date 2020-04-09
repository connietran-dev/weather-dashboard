// This JS file will be the main file that drives the city search

$("#currentDate").text(moment().format('ddd Do'));


for (let i = 0; i < 5; i++) {

    var startForecast = i + 1;

    var forecastCard = $(`div[data-card|="${i}"]`);

    forecastCard.html(`<h4> ${moment().add(startForecast, 'days').format('ddd')} </h4>`);

};



var APIKey = "4a56f566a02550ae1a4ca20559e1de75";

var searchedCity;


// Main functions: When city search is submitted
$(document).ready(function () {

    $('#city-search').submit(function () {
        event.preventDefault();
        searchedCity = $('#city-text').val().trim();
        currentWeather(searchedCity);
        getUVIndex(searchedCity);
        getForecast(searchedCity);
        addHistory(searchedCity);

    })

});
