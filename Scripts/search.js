function searchHistory() {

    $('#searchHistory').prepend(`
        <li class="searchItem">${searchedCity}</li>
    `); 

    $('.searchItem').on('click', function(event) {

        console.log('hello');

        var itemText = event.target.innerText;

        $('#city-text').val(itemText);

        currentWeather(itemText);
        getForecast(itemText);

    });

};