

function displayTemperature(response){
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");

celsiusTemperature = response.data.main.temp;


temperatureElement.innerHTML = Math.round(celsiusTemperature);
cityElement.innerHTML = response.data.name;

}

function search (city) {
let apiKey="6d15a99ffb8493d1efc42cac1693ceeb";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
}

