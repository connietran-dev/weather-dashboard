function searchHistory() {

    console.log("hello");

    var searchedCity = $('#city-text').val().trim();

    // var searchItem = $('<li>');
    // searchItem.text(searchedCity);
    // var searchHistory = $('#search-history');
    // searchHistory.prepend(searchItem);

    $('#search-history').prepend(`
        <li>${searchedCity}</li>    
    `); 

};