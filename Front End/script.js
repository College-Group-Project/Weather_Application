const url = `http://localhost:3000/temp?city=`;
const cityInput =document.getElementById("city-input");
const searchBtn = document.getElementById("searchBtn");


async function getWeather(city){
  const response = await fetch(url + city);
  var data = await response.json();
  console.log(data);

  document.getElementById("situation").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.temp )+ "°C";
  document.getElementById("max-temp").innerHTML = data.maxTemp;
  document.getElementById("min-temp").innerHTML = data.minTemp;
  document.getElementById("real-feel").innerHTML = data.feelsLike;
  // document.getElementById("wind").innerHTML = data.wind.speed +" km/h";
  document.getElementById("humidity").innerHTML = data.humidity;
}
searchBtn.addEventListener("click", ()=>{
  getWeather(cityInput.value);
})
