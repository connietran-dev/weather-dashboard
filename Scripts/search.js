// On page load
// Retrieve array from localStorage. 
// If empty, then create list items. Then save to local storage
var cityList = [];

if (localStorage.getItem('Cities') === null) {

    cityList = ["San Francisco", "Beijing", "Seoul", "London", "Seoul", "Buenos Aires"];

    localStorage.setItem('Cities', JSON.stringify(cityList));

    cityList.forEach(element => {
        $('#searchHistory').prepend(`
            <li class="searchItem">${element}</li>
        `);
    });

} else {

    cityList = JSON.parse(localStorage.getItem('Cities'));

    cityList.forEach(element => {

        $('#searchHistory').prepend(`
            <li class="searchItem">${element}</li>
        `);
    });

}



$('.searchItem').on('click', function (event) {

    var itemText = event.target.innerText;

    $('#city-text').val(itemText);

    currentWeather(itemText);
    getUVIndex(itemText);
    getForecast(itemText);

});


// If a new city is added, add to the array of cities.
// Save the cities array to localStorage again.
function addHistory() {

    $('#searchHistory').prepend(`
        <li class="searchItem">${searchedCity}</li>
    `);

    cityList.push(searchedCity);

    localStorage.setItem('Cities', JSON.stringify(cityList));

};
