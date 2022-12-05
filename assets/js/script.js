var eventNameContainer = document.getElementById('music-events');
var sportsContainer = document.getElementById('sports-event')
var locationInputBtn = document.getElementById('input-btn');
var headerText = document.getElementById('hero-intro2');
var firstSearch = true;




    //hides cards on page load
window.onload = function(){
    document.getElementById('card-block').style.display = 'none';
}


    //adds event for click
locationInputBtn.addEventListener('click', function(event){
    event.preventDefault()
    
    if(firstSearch === false){
        //reloads cards with new city on new search
        eventNameContainer.innerHTML = ''
        sportsContainer.innerHTML = ''
        //document.innerHTML = ''
        
        var locationInput = document.getElementById('input-container');
        var inputValue = locationInput.value;
    
        localStorage.setItem('last-search', inputValue);

        //displays cards once city has been entered    
        document.getElementById('card-block').style.display= 'block';

        //sets fetch urls with city chosen as a filter
        var musicEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        var sportsEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sports&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        
        
        renderSportsCards();
        renderMusicCards();
    

    }else{
        
        var locationInput = document.getElementById('input-container');
        var inputValue = locationInput.value;
    
        localStorage.setItem('last-search', inputValue);

        //displays cards once city has been entered    
        document.getElementById('card-block').style.display= 'block';

        //sets fetch urls with city chosen as a filter
        var musicEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        var sportsEventURl = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sports&city='+inputValue+'&apikey=JjogNcZMGs6cpQBpjGBuUX8hI8CkzSU9';
        }
        
        
        function renderSportsCards(){
        fetch(sportsEventURl).then(function (response){
            return response.json();
        }).then(function (response){
            console.log(response._embedded.events);
            console.log(response);
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
                eventPage.textContent = eventName + ' ' + eventDate;
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
             console.log(response._embedded.events);
             console.log(response);
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
                eventPage.textContent = eventName + ' ' + eventDate;
                eventPage.appendChild(eventImgEl)        
            };
        
        });
    }
    renderMusicCards();

    firstSearch = false;
    
    
    


    
   
    
 
});













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

