async function fetchWeather(countryCode, city) {
  const myApiKey = "d5012fb4f7ae03546323e8025ffbc073";
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${myApiKey}&units=metric`
  );
  let weather = await response.json();
  return weather;
}

async function showWeather() {
  let country = document.getElementById("country");
  let countryCode = country.options[country.selectedIndex].value;
  let city = document.getElementById("city").value;

  let weather = await fetchWeather(countryCode, city);
  let nombreCiudad = document.getElementById("city_name");
  let img = document.getElementById("img");
  let temperature = document.getElementById("temperature");
  let temperatureMax = document.getElementById("temperature_max");
  let temperatureMin = document.getElementById("temperature_min");

  nombreCiudad.innerHTML = weather["name"];
  const iconUrl = `https://openweathermap.org/img/wn/${weather["weather"][0]["icon"]}@2x.png`;
  img.src = iconUrl;
  temperature.innerHTML = weather["main"]["temp"] + " °C";
  temperatureMax.innerHTML = "Max: " + weather["main"]["temp_max"] + " °C";
  temperatureMin.innerHTML = "Min: " + weather["main"]["temp_min"] + " °C";
}
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  showWeather();
});
