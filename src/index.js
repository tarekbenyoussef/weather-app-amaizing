function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  function enter(event) {
    event.preventDefault();
    let city = document.querySelector("#weather-text-input").value;
    let h2 = document.querySelector("h2");
    h2.innerHTML = city;
    findWeather(city);
  }
  
  let dateElement = document.querySelector("#climate");
  let date = new Date();
  dateElement.innerHTML = formatDate(date);

  function showCurrentWeather(response) {
    let city = document.querySelector("#weather-text-input");
    console.log(response);
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}`;
  }
  
  function findWeather(city) {
    let apiKey = "57f4887308192ee91fdde1209e792c05";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showCurrentWeather);
  }

  let searchForm = document.querySelector("#weather-form");
searchForm.addEventListener("submit", enter);

function showPosition(position) {
  alert(
    `your current position is ${position.coords.latitude}, ${position.coords.longitude}`
  );
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);