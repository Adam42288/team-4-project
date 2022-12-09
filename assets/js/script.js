var eventNameContainer = document.getElementById('music-events');
var sportsContainer = document.getElementById('sports-event')
var locationInputBtn = document.getElementById('input-btn');
var getLocationBtn = document.getElementById('get-location')
var getLocationEl =  document.getElementById('get-location-p')
var headerText = document.getElementById('hero-intro2');
var firstSearch = true;









    //hides cards on page load
window.onload = function(){
    document.getElementById('card-block').style.display = 'none';

    document.getElementById('Para1').style.display = 'none'

    document.getElementById('weatherContainer').style.display = 'none';

}

function getDate(){
    

}

    //adds event for click
locationInputBtn.addEventListener('click', function(event){
    event.preventDefault()

    headerText.textContent = "Enter A Different City"
    
    if(firstSearch === false){
        //reloads cards with new city on new search
        eventNameContainer.innerHTML = ''
        sportsContainer.innerHTML = ''
        //document.innerHTML = ''
        
        var dateInput = document.getElementById('date').value;
        
        var locationInput = document.getElementById('input-container');
        var inputValue = locationInput.value;
    
        localStorage.setItem('last-search', inputValue);

        //displays cards once city has been entered    
        document.getElementById('card-block').style.display= 'block';

        document.getElementById('weatherContainer').style.display = 'block'

        document.getElementById('weatherContainer').style.display = 'block';


        //sets fetch urls with city chosen as a filter
        var musicEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime='+dateInput+':00Z&sort=date,asc&classificationName=music&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        var sportsEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime='+dateInput+':00Z&sort=date,asc&classificationName=sports&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        renderSportsCards();
        renderMusicCards();
    

    }else{
        
        var dateInput = document.getElementById('date').value;
        
        var locationInput = document.getElementById('input-container');
        var inputValue = locationInput.value;
    
        localStorage.setItem('last-search', inputValue);

        //displays cards once city has been entered    
        document.getElementById('card-block').style.display= 'block';

        document.getElementById('weatherContainer').style.display = 'block'

        document.getElementById('weatherContainer').style.display = 'block';


        //sets fetch urls with city chosen as a filter
        var musicEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime='+dateInput+':00Z&sort=date,asc&classificationName=music&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        var sportsEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime='+dateInput+':00Z&sort=date,asc&classificationName=sports&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        }
        getCurrentWeather(inputValue);
        
        function renderSportsCards(){
        fetch(sportsEventURl).then(function (response){
            return response.json();
        }).then(function (response){
            
            //loop to create links with images
        
            for (var i = 0; i < response._embedded.events.length; i++){
                var eventDate = response._embedded.events[i].dates.start.localDate;
                var eventName = response._embedded.events[i].name;
            
                eventLink = response._embedded.events[i].url;
                eventImgLink = response._embedded.events[i].images[0].url;
            
                eventPage = document.createElement('a')
                eventImgEl = document.createElement('img')
            
                eventPage.title = eventName;
                eventPage.href = eventLink;
                eventImgEl.src = eventImgLink;
                eventImgEl.href = eventLink;
            
                sportsContainer.appendChild(eventPage);
                eventPage.textContent = eventName + ' (' + eventDate + ')';
                eventPage.appendChild(eventImgEl)
            }
            
        
        
        })
    }
    renderSportsCards()

        function renderMusicCards(){
        fetch(musicEventURl).then(function (response){
            return response.json();
        })
        .then(function(response){
             
          //loop to create links with images
            for (var i = 0; i < response._embedded.events.length; i++){
                var eventDate = response._embedded.events[i].dates.start.localDate;
                var eventName = response._embedded.events[i].name;
            
                eventLink = response._embedded.events[i].url;
                eventImgLink = response._embedded.events[i].images[0].url;
            
                eventPage = document.createElement('a')
                eventImgEl = document.createElement('img')
            
                eventPage.title = eventName;
                eventPage.href = eventLink;
                eventImgEl.src = eventImgLink;
                eventImgEl.href = eventLink;
            
                eventNameContainer.appendChild(eventPage);
                eventPage.textContent = eventName + ' (' + eventDate + ')';
                eventPage.appendChild(eventImgEl)        
            };
        
        });
    }
    renderMusicCards();

    firstSearch = false;
    
    
    


    
   
    
 
});

//get location function
getLocationBtn.addEventListener('click', function(event){
    event.preventDefault()

    headerText.textContent = "Enter A Different City"

   
    //get date input
    var dateInput = document.getElementById('date').value;
    var dateInputClean = dateInput.replace(/-/g, "")
    
    
    console.log(dateInputClean)

    console.log(dateInput)

    var geoLocationUrl = 'https://api.ipgeolocation.io/ipgeo?apiKey=e238c616bd2d42d3811c02831617815a'
    
    fetch(geoLocationUrl).then(function (response){
        return response.json();
        
    }).then(function (response){
        console.log(response)
        console.log(response.city)
        
        //clear container before loading data
        eventNameContainer.innerHTML = ''
        sportsContainer.innerHTML = ''
        
        //sets location as input value
        var inputValue = response.city;
        

        localStorage.setItem('last-search', inputValue);

        //displays cards once city has been entered    
    
            
            
            document.getElementById('card-block').style.display= 'block';
            document.getElementById('weatherContainer').style.display = 'block'
            //sets fetch urls with city chosen as a filter
            var musicEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime='+dateInput+':00Z&sort=date,asc&classificationName=music&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
            var sportsEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime='+dateInput+':00Z&sort=date,asc&classificationName=sports&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
            
            //TODO: make these links dynamic with calendar selector
            //var sportsEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=2022-12-31T08:49:00Z&endDateTime=2023-01-02T08:49:00Z&sort=date,asc&classificationName=sports&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
            //var musicEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=2022-12-31T08:49:00Z&endDateTime=2023-01-02T08:49:00Z&sort=date,asc&classificationName=music&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';

            getCurrentWeather(inputValue);
            
            function renderSportsCards(){
                fetch(sportsEventURl).then(function (response){
                    return response.json();
                }).then(function (response){
                    console.log(response)

                    //loop to create links with images
                    for (var i = 0; i < response._embedded.events.length; i++){
                        var eventDate = response._embedded.events[i].dates.start.localDate;
                        var eventName = response._embedded.events[i].name;
                    
                        eventLink = response._embedded.events[i].url;
                        eventImgLink = response._embedded.events[i].images[0].url;
                    
                        eventPage = document.createElement('a')
                        eventImgEl = document.createElement('img')
                    
                        eventPage.title = eventName;
                        eventPage.href = eventLink;
                        eventImgEl.src = eventImgLink;
                        eventImgEl.href = eventLink;
                    
                        sportsContainer.appendChild(eventPage);
                        eventPage.textContent = eventName + ' (' + eventDate + ')';
                        eventPage.appendChild(eventImgEl)
                    }

                
                
                })
            }
                renderSportsCards();
        
            function renderMusicCards(){
                fetch(musicEventURl).then(function (response){
                    return response.json();
                })
                .then(function(response){
                    console.log(response)
                  //loop to create links with images
                    for (var i = 0; i < response._embedded.events.length; i++){
                        var eventDate = response._embedded.events[i].dates.start.localDate;
                        var eventName = response._embedded.events[i].name;
                    
                        eventLink = response._embedded.events[i].url;
                        eventImgLink = response._embedded.events[i].images[0].url;
                    
                        eventPage = document.createElement('a')
                        eventImgEl = document.createElement('img')
                    
                        eventPage.title = eventName;
                        eventPage.href = eventLink;
                        eventImgEl.src = eventImgLink;
                        eventImgEl.href = eventLink;
                    
                        eventNameContainer.appendChild(eventPage);
                        eventPage.textContent = eventName + ' (' + eventDate +')';
                        eventPage.appendChild(eventImgEl)        
                    };
                
                });
            }       
            renderMusicCards();

            firstSearch = false;
            
        
    })
    getLocationBtn.style.display = 'none'
   getLocationEl.innerHTML = ''
    

    

    

})


// Initializing variables
// Also retrieving the cityStorage from localStorage and putting it into an array.
var APIKey = "140868a0bfdca5e4838b5700f0881180";
var city;
var queryURL;
var geoQuery;
var lat;
var long;
  //    var locationInput = document.getElementById('input-container');
    //    var inputValue = locationInput.value;
//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var day0 = d.getDate();
var month0 = d.getMonth();
var year0 = d.getFullYear();
if(month0 < 12){
    month0 = month0 + 1;
}
else{
    month0 = 12;
};
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i+1)];
    }
    
// Updates the Para2 heading with current Weather and date.
// document.querySelector('#Para2').innerHTML = "Current Weather" + ' ('+ month0 +'/'+ day0 +'/' +year0 +')';


// Event listenter for user pressing Enter.
// var searchValue = document.querySelector('#cityInput');
// searchValue.addEventListener('keypress', setFunc);
//     function setFunc(e) {

//         if(e.keyCode === 13) {
//             getCurrentWeather(searchValue.value);
//         }
//     }

 // Event listenter for user clicking search button.

     function getInfo() {
         getCurrentWeather(searchValue.value);
     }

// getcurrentWeatherfunction
function getCurrentWeather(city) {
    var day0 = d.getDate();
    var month0 = d.getMonth();
    var year0 = d.getFullYear();

    if(month0 < 12){
        month0 = month0 + 1;
    }
    else{
        month0 = 12;
    };
// Puts city into current weather container.
    // document.querySelector('#city').innerHTML = city;

    // if (!cityStorage.includes(city)) {
    //     cityStorage.push(city);
    //     localStorage.setItem("City", city);
    //     console.log(localStorage.getItem("City"));
    //      localStorage.setItem("City", JSON.stringify(cityStorage));

    //      // Adds the current city to list of previous cities.
    //         var entry = document.createElement('li');
    //                                      // Create anchor element.
    //                                      var a = document.createElement('a'); 
              
    //                                      // Create the text node for anchor element.
    //                                      var link = document.createTextNode(city);
                                           
    //                                      // Append the text node to anchor element.
    //                                      a.appendChild(link); 
                                           
    //                                      // Set the title.
    //                                      a.title = city; 
                                           
    //                                        // Set the href property.
    //                                 a.href = "javascript:getAnchor();"; 

    //                                 // Set the onclick

    //                                 a.onclick = function () { 
    //                                   getCurrentWeather('Dallas');
    //                                   }

    //                                      // Append the anchor element to the body.
    //                                      entry.appendChild(a); 
    
    //         prevCities.appendChild(entry);
    
    // }
// create fetch url to retrieve the latitude and longitude  of city.
    geoQuery = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city+ '&limit=5&appid=' + APIKey;
   // calls getLatLong function and passes city input by user.
    getLatLong(city)
    // calls getForecast and passes city input by user.
    getForecast(city)
}

    function getLatLong(city) {
        fetch(geoQuery)
        .then (function (response) {
            return response.json();
        })
        .then(function (latlong) {
            // Sets latitude and longitude of city.
            lat = latlong[0].lat;
            
            long = latlong[0].lon;
            // checks weather based on latitude and longitude of city.
            getData(lat, long);
        })
        .catch(function (err) {
            console.log(err);
        })
        
    }
    // function getData(lat, long) {
    //     var lat1 = lat;
    //     var long2 = long;
    //     // calls queryURL to retrieve current weaather based on latitude and longitude.
    //     queryURL = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat1 + '&lon=' + long2 +'&units=imperial&exclude=hourly,minutely,daily&appid=' + APIKey;
    //     fetch(queryURL)
    //     .then (function (response) {
    //         return response.json();
    //     })
    //     .then(function (weather) {
    //         console.log(weather);
    //         document.getElementById("img0").src = "http://openweathermap.org/img/wn/"+ weather.current.weather[0].icon +".png";
    //         document.querySelector('#temp').innerHTML = "Temp: " + weather.current.temp;            
    //         document.querySelector('#humidity').innerHTML = "Humidity: "+ weather.current.humidity;
    //         document.querySelector('#wind_dir_speed').innerHTML = "Wind Speed: "+weather.current.wind_speed + " MPH";
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     })
    // }

    // Gets 5 day weather using queryURL of City.
   function getForecast(city) {
    queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+APIKey;
    fetch(queryURL)
    .then (function (response) {
        return response.json();
    })
    .then(function (forecast) {
        console.log(forecast);
        // Getting weather icons, temp, wind, and humidity for every day. j + 8 due to each day being +8.
        var j = 1;
        for (var i = 1; i<6; i++) {
            document.getElementById("img"+i).src = "http://openweathermap.org/img/wn/"+ forecast.list[j].weather[0].icon +".png";
            document.getElementById("day" + (i) + "Min").innerHTML = "Temp: " + Number(forecast.list[j].main.temp).toFixed(1)+ "°";
            document.getElementById("day" + (i) + "Max").innerHTML = "Wind Speed: " + Number(forecast.list[j].wind.speed)+ "MPH";
            document.getElementById("day" + (i) + "humidity").innerHTML = "Humidity: " + Number(forecast.list[j].main.humidity);
            j = j +8;
        }
   })
}



