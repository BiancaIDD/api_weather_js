async function fetchWeather(countryCode, city){
  const myApiKey = "d5012fb4f7ae03546323e8025ffbc073"
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${myApiKey}&units=metric`
  );
  let weather = await response.json();
  return weather;
}

async function showWeather(){
  let country = document.getElementById("pais");
  let countryCode = country.options[country.selectedIndex].value;
  let city = document.getElementById("ciudad").value;

  let weather = await fetchWeather(countryCode, city);
  let nombreCiudad = document.getElementById("nombre_ciudad");
  let temperature = document.getElementById("temperature");
  let temperatureMax = document.getElementById("temperature_max");
  let temperatureMin = document.getElementById("temperature_min");


nombreCiudad.innerHTML= weather["name"]
temperature.innerHTML= weather["main"]["temp"] + " °C"
temperatureMax.innerHTML= weather["main"]["temp_max"] +" °C"
temperatureMin.innerHTML= weather["main"]["temp_min"] + " °C"


}
const form= document.getElementById("form")
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  showWeather()
})
