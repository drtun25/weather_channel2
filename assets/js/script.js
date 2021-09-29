var search_results = document.getElementById("search-results");
var search = document.getElementById("search");
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
var container5 = document.getElementById('container5');


//handles city logic
function weather (event) {
    event.preventDefault();

     var city = search.value;
     
     getLocation(city);
     
     //console.log(city);
}

function getLocation(city) {
    var api = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=872734454a7aae3a1c12ea48ac211fb3&units=imperial'
    fetch(api)
    .then(response => response.json())
    .then(data => {
        displayCity(data);
        console.log(data);

    })
    
}

function displayCity (data) {
  var cityName = document.createElement('h1');
      cityName.textContent = data.city.name;
      container1.append(cityName);
  
}

function weather2 (event) {
    event.preventDefault();

    let long = data.city.coord.lon;
    let latt = data.city.coord.lat;
    getWeather(long, latt);

}

function getWeather (latt, long) {
    var api2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latt + '&lon=' + long + '&units=imperial&exclude=minutely,hourly&appid=8ede8ed7ce0572ed28b7f0eb5bdd6e6d'
    fetch(api2)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
        console.log(data);
    })

}


function displayWeather(data) {
 var temp = document.createElement('p');
      temp.textContent = data.current.temp;
      container2.append(temp);
  var wind = document.createElement('p');
      wind.textContent = data.current.wind_speed;
      container3.append(wind); 
  var humid = document.createElement('p');
      humid.textContent = data.current.humidity;
      container4.append(humid);   
  var uv = document.createElement('p');
      uv.textContent = data.current.uv;
      container5.append(uv);

}


search_results.addEventListener('click', weather, weather2);
