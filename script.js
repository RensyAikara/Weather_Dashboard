$(document).ready(function () {
    var listHeader = $("<ul>");
    $("#history").append(listHeader);

// button for search
    $("#button-addon2").on("click", function () {
        var cityName = $("#inputdetails").val();
        var listName = $("<li>");
        listName.text(cityName);
        listHeader.append(listName);
        console.log(listName);
        // adding city names to history
        var newHistory = $("<button>");
        newHistory.text(cityName);
        newHistory.attr("class","historybutton");
        $(".history").prepend(newHistory);
        // calling apicalfunction() to extract details for current day
        apicallFunction(cityName);
    })
    // apicalfunction()
    function apicallFunction(cityName) {
        // URL
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=c4054486704fd93a795570310c9ddbb7";
        //AJAX
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // call formatDate function to get date in proper format
            var today = formatDate(response.list[0].dt_txt);
            //Display city name with current date
            $("#cityname").text(cityName + "(" + today +")");
            // get temperature value and display the same
            var tempC = response.list[0].main.temp;
            var tempF = (((tempC- 273.15) * 1.80) + 32).toFixed(2);
            console.log(tempF);
            $("#temp").text("Temperature: " + tempF + "F");
            // get humidity and display the same
            var humidity = response.list[0].main.humidity;
            console.log(humidity);
            $("#humidity").text("Humidity: " + humidity + "%");
            // get wind speed and display the same
            var windSpeed = response.list[0].wind.speed;
            console.log(windSpeed);
            $("#wind").text("Wind Speed: " + windSpeed);

            // var uvIndex = response.list[0].weather[0].icon;
            // // console.log(uvIndex);
            // $("#uv").attr("src", "http://openweathermap.org/img/wn/" + uvIndex + "@2x.png");

            //call futureweather function to get future weather values 
            futureweather(response);

        });
    }

    // futureweather function
    function futureweather(response){
        // get first days weather details and display
        $("#dateone").text(formatDate(response.list[7].dt_txt));
        var iconOne = response.list[7].weather[0].icon;
        $("#iconone").attr("src", "http://openweathermap.org/img/wn/" + iconOne + "@2x.png");
        var tempOne = ((((response.list[7].main.temp)- 273.15) * 1.80) + 32).toFixed(2);
        $("#tempone").text("Temp: " + tempOne + "F");
        $("#humidityfutureone").text("Humidity: " + response.list[7].main.humidity + "%");
        // get second days weather details and display
        $("#datetwo").text(formatDate(response.list[14].dt_txt));
        var iconTwo = response.list[14].weather[0].icon;
        $("#icontwo").attr("src", "http://openweathermap.org/img/wn/" + iconTwo + "@2x.png");
        var tempTwo = ((((response.list[14].main.temp)- 273.15) * 1.80) + 32).toFixed(2);
        $("#temptwo").text("Temp: " + tempTwo + "F");
        $("#humidityfuturetwo").text("Humidity: " + response.list[14].main.humidity + "%");
        // get third days weather details and display
        $("#datethree").text(formatDate(response.list[21].dt_txt));
        var iconThree = response.list[21].weather[0].icon;
        $("#iconthree").attr("src", "http://openweathermap.org/img/wn/" + iconThree + "@2x.png");
        var tempThree = ((((response.list[21].main.temp)- 273.15) * 1.80) + 32).toFixed(2);
        $("#tempthree").text("Temp: " + tempThree + "F");
        $("#humidityfuturethree").text("Humidity: " + response.list[21].main.humidity + "%");
        // get fourth days weather details and display
        $("#datefour").text(formatDate(response.list[28].dt_txt));
        var iconFour = response.list[28].weather[0].icon;
        $("#iconfour").attr("src", "http://openweathermap.org/img/wn/" + iconFour + "@2x.png");
        var tempFour = ((((response.list[28].main.temp)- 273.15) * 1.80) + 32).toFixed(2);
        $("#tempfour").text("Temp: " + tempFour + "F");
        $("#humidityfuturefour").text("Humidity: " + response.list[28].main.humidity + "%");
        // get fifth days weather details and display
        $("#datefive").text(formatDate(response.list[35].dt_txt));
        var iconFive = response.list[35].weather[0].icon;
        $("#iconfive").attr("src", "http://openweathermap.org/img/wn/" + iconFive + "@2x.png");
        var tempFive = ((((response.list[35].main.temp)- 273.15) * 1.80) + 32).toFixed(2);
        $("#tempfive").text("Temp: " + tempFive + "F");
        $("#humidityfuturefive").text("Humidity: " + response.list[35].main.humidity + "%");
   
    }
    // function formatDate to get the date in proper format
    function formatDate(date) {
        let d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = '' + d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return formattedDate = month + "/" + day + "/" + year;
    }
});