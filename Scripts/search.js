// On page load
var cityList = ["Buenos Aires", "London", "Seoul", "Paris", "San Francisco", "Beijing"];

cityList.forEach(element => {

    $('#searchHistory').append(`
        <li class="searchItem">${element}</li>
    `);
});

$('.searchItem').on('click', function(event) {

    var itemText = event.target.innerText;
    $('#city-text').val(itemText);
    currentWeather(itemText);
    getUVIndex(itemText);
    getForecast(itemText);

});


function searchHistory() {

    $('#searchHistory').prepend(`
        <li class="searchItem">${searchedCity}</li>
    `);

};
