

function displayTemperature(response){
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
celsiusTemperature = response.data.main.temp;


temperatureElement.innerHTML = Math.round(celsiusTemperature);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = response.data.wind.speed;
}

function search (city) {
let apiKey="6d15a99ffb8493d1efc42cac1693ceeb";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
}

