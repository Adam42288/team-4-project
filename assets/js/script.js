// Weather API placeholder
var searchValue = document.querySelector('#searchbox');
searchValue.addEventListener('keypress', setFunc);
    function setFunc(e) {
        if(e.keyCode === 13) {
            GamepadHapticActuator(searchValue.value);
        }
    }

    function getData(value) {
        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={140868a0bfdca5e4838b5700f0881180}')
        .then (function (response) {
            return response.json();
        })
        .then(function (weather) {
            document.querySelector('#city').innerHTML = weather.name;
            document.querySelector('#temp').innerHTML = weather.main.temp;
        })
        .catch(function (err) {
            console.log(err);
        })
    }