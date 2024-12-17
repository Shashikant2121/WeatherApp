let  inputBox = document.querySelector('.input-box');
let  searchBtn = document.getElementById('searchBtn');
let  Weather_img = document.getElementById('Weather-img');
// let  element = document.getElementById('weather-info');
let  temperatue = document.getElementById('temperatue');
let  description = document.querySelector('.description');
let  humidity = document.getElementById('humidity');
let  wind_speed = document.getElementById('wind-speed');
let location_not_found = document.querySelector('.location-not-found');
let weather_body = document.querySelector('.weather-body');


 async function checkWeather(city) {
    const api_key = "1f1f61fc9b9469493336e7cc71aa7c39";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    let  weather_data = await fetch(`${url}`).then(response =>response.json());

    if (weather_data.cod ===`404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("ERROR");
        return ;
    }
    console.log(weather_data);

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    // element.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;
    temperatue.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main) {
        case 'Clouds':
            Weather_img.src ="/images/cloud.png"
            break;
        case 'Clear':
            Weather_img.src="/images/clear.png"
            break;
        case 'Rain':
            Weather_img.src="/images/rain.png"
            break;
        case 'Mist':
            Weather_img.src="/images/mist.png"
            break;
        case 'Snow':
            Weather_img.src="/images/snow.png"
            break;
        // default:
            // weather_img.src = "/images/default.png";  // Optional: A fallback image
    }
    
    console.log(weather_data);
}

searchBtn.addEventListener('click',() =>{
 checkWeather(inputBox.value);
})