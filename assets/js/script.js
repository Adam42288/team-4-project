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

