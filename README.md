# Server-Side APIs: Weather Dashboard

### Overview
This weather dashboard runs in the browser and features dynamically updated HTML and CSS. The dashboard also features data from a third-party server-side API.

The live page can be viewed here thanks to GitHub Pages here: https://connietran-dev.github.io/weather-dashboard/

----

### Technologies

Weather data for cities from the [OpenWeather API](https://openweathermap.org/api) is retrieved using JQuery Ajax calls. User data, such as the city search, is stored in `localStorage` to persist data when the page is refreshed. The site is also built with Bootstrap and includes JQuery and Moment.js.

----

### Funtionality

When a city is searched, the city's current weather conditions as well as 5-day forecast are retrieved from [OpenWeather](https://openweathermap.org/api). 

The searched city is added to the search history and to `localStorage` so that if you open the weather dashboard again, you are presented with the last searched city's forecast. If you click on one of the cities in the search history, you are presented with the weather conditions for that city.

The weather icons and weather descriptions are also retrieved from [OpenWeather](https://openweathermap.org/api). And the UV index is colored to indicate its severity.

The following comp was initially provided to demonstrate the desired functionality for the dashboard. The front-end is built with Bootstrap and features custom CSS. The site has also been customized for mobile devices using Bootstrap utilities and classes for a responsive, mobile-friendly layout.

![weather dashboard demo](Assets/images/06-server-side-apis-homework-demo.png)

----

### Future Enhancements

Time permitting, I would love to enhance this dashboard with the following functionality:

* Display of images of the searched city
* A rotating search of default cities from the search history (ie, a new city is searched every second or so)
* Form validations and formatting of user inputs into the search so that cities are correctly capitalized, cities cannot be searched that are incorrectly spelled, and cities are not duplicated in the search history
* Additional styling updates to optimize for mobile
