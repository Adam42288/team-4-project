<<<<<<< HEAD

var eventUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9'



    fetch(eventUrl)
    .then (function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

    })

    var googleUrl = 'https://maps.googleapis.com/maps/api/js';

    fetch(googleUrl)
    .then (function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

    })
   
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            var x = document.getElementById("location");
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    
   

    
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }
=======
// Weather API placeholder
var searchValue = document.querySelector('#searchbox');
searchValue.addEventListener('keypress', setFunc);
    function setFunc(e) {
        if(e.keyCode === 13) {
            getData(searchValue.value);
        }
    }

    function getData(value) {
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+value+'&units=imperial&appid=140868a0bfdca5e4838b5700f0881180')
        .then (function (response) {
            return response.json();
        })
        .then(function (weather) {
            console.log(weather);
            document.querySelector('#city').innerHTML = weather.name;
            document.querySelector('#temp').innerHTML = weather.main.temp;
            document.querySelector('#min_max_temp').innerHTML = 
            "Min. "+weather.main.temp_min+" / Max. "+weather.main.temp_max;
            document.querySelector('#weather').innerHTML = weather.weather[0].main;
            document.querySelector('#weather_desc').innerHTML = weather.weather[0].description;
            document.querySelector('#wind_dir_speed').innerHTML = "Wind direction: "+ weather.wind.deg
            + " Degrees / Wind speed: "+weather.wind.speed + " MPH";
        })
        .catch(function (err) {
            console.log(err);
        })
    }

>>>>>>> 6aa62d9b558c21a3a4de3a4b4efd22b5e414bfc6
