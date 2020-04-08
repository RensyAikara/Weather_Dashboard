# Weather_Dashboard

* Pseudocode

* Get an API key for OpenWeathermap.org. Use 5 day / 3 hour forecast.
* Create index.html, script.js and style.css
* Create a navbar to show the heading "Weather Dashboard"

* Using an input and button, get the City name. Call a function which uses the OpenWeatherMap API link along with the API key and city name, for weather details.
* Once the response is recieved from the API (use AJAX), using the Object which is recieved as response, get current date, temperature value, humidity, wind speed and icon
* Display current day weather details.

* Create jumbatron for future five days and using the same response recieved from API, get date, temperature, humidity and icon for next 5 days.

* When user search for a city details, the particular city name should be saved in history, for this create  vertical button group for each city. When the button is pressed the corresponding weather details should appear. For this use local storage to store the extracted details from OpenWeathermap.org.

* For every search, get the details stored in the Local storage, so that it will be visible, even if user refreshes the page.