
var eventUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9'
var eventNameContainer = document.getElementById('event-list-container')
var locationInput = document.getElementById('input-box');


var eventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?&city=austin&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';


=======
var eventListContainer = document.getElementById('event-list-container')


//function getLocation() {
    //if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(showPosition, showError);
    //} else {
        //var x = document.getElementById("location");
        //x.innerHTML = "Geolocation is not supported by this browser.";
    //}
//}


//function showError(error) {
    //switch(error.code) {
        //case error.PERMISSION_DENIED:
            //x.innerHTML = "User denied the request for Geolocation."
            //break;
        //case error.POSITION_UNAVAILABLE:
            //x.innerHTML = "Location information is unavailable."
            //break;
        //case error.TIMEOUT:
            //x.innerHTML = "The request to get user location timed out."
            //break;
        //case error.UNKNOWN_ERROR:
            //x.innerHTML = "An unknown error occurred."
            //break;
    //}
//}

var eventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?&city=austin&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';

fetch(eventURl).then(function (response){
    return response.json();
}).then(function(response){
   console.log(response._embedded.events);
   console.log(response);
  
for (var i = 0; i < response._embedded.events.length; i++){

    var eventDate = response._embedded.events[i].dates.start.localDate;
    var eventName = response._embedded.events[i].name;
    eventLink = response._embedded.events[i].url;
    eventPage = document.createElement('a')
    eventPage.title = eventName;
    eventPage.href = eventLink;
    eventNameContainer.appendChild(eventPage);
    eventPage.textContent = eventName + ' ' + eventDate;
    console.log(eventPage.textContent)
   
=======
    var eventList = response._embedded.events[i].name;
    eventPage = document.createElement('li')
    eventListContainer.appendChild(eventPage);
    eventPage.textContent = eventList;
    console.log(eventPage.textContent)
    console.log(eventList)

    
}
   
})





// Weather API placeholder






//var searchValue = document.querySelector('#searchbox');
//searchValue.addeventNameener('keypress', setFunc);
  //  function setFunc(e) {
    //    if(e.keyCode === 13) {
      //      getData(searchValue.value);
       // }
    //}

  


   // function getData(value) {
        //fetch('http://api.openweathermap.org/data/2.5/weather?q='+value+'&units=imperial&appid=140868a0bfdca5e4838b5700f0881180')
        //.then (function (response) {
          //  return response.json();
        //})
        //.then(function (weather) {
          //  console.log(weather);
            //document.querySelector('#city').innerHTML = weather.name;
            //document.querySelector('#temp').innerHTML = weather.main.temp;
          //  document.querySelector('#min_max_temp').innerHTML = 
            //"Min. "+weather.main.temp_min+" / Max. "+weather.main.temp_max;
            //document.querySelector('#weather').innerHTML = weather.weather[0].main;
            //document.querySelector('#weather_desc').innerHTML = weather.weather[0].description;
            //document.querySelector('#wind_dir_speed').innerHTML = "Wind direction: "+ weather.wind.deg
            //+ " Degrees / Wind speed: "+weather.wind.speed + " MPH";
        //})
        //.catch(function (err) {
            //console.log(err);
        //})
    //}

//getData();
=======
//console.log(response);


// Weather API placeholder




//var searchValue = document.querySelector('#searchbox');
//searchValue.addEventListener('keypress', setFunc);
  //  function setFunc(e) {
    //    if(e.keyCode === 13) {
      //      getData(searchValue.value);
       // }
    //}

  


   // function getData(value) {
        //fetch('http://api.openweathermap.org/data/2.5/weather?q='+value+'&units=imperial&appid=140868a0bfdca5e4838b5700f0881180')
        //.then (function (response) {
          //  return response.json();
        //})
        //.then(function (weather) {
          //  console.log(weather);
            //document.querySelector('#city').innerHTML = weather.name;
            //document.querySelector('#temp').innerHTML = weather.main.temp;
          //  document.querySelector('#min_max_temp').innerHTML = 
            //"Min. "+weather.main.temp_min+" / Max. "+weather.main.temp_max;
            //document.querySelector('#weather').innerHTML = weather.weather[0].main;
            //document.querySelector('#weather_desc').innerHTML = weather.weather[0].description;
            //document.querySelector('#wind_dir_speed').innerHTML = "Wind direction: "+ weather.wind.deg
            //+ " Degrees / Wind speed: "+weather.wind.speed + " MPH";
        //})
        //.catch(function (err) {
            //console.log(err);
        //})
    //}

//getData();