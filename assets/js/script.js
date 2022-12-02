
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