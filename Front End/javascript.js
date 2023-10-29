const inputBox = document.querySelector('.search-bar');
const searchBtn = document.getElementById('searchBtn');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const feelSlike = document.querySelector('.feelsLike');
const minTem = document.querySelector('.miNt');
const mixTem = document.querySelector('.miXt');
const sunRise = document.querySelector('.sunR');
const sunSet = document.querySelector('.sunS');
const press = document.querySelector('.pRe');
const windAng = document.querySelector('.wiNd');


async function checkWeather(city){
  url =`http://localhost:3000/temp?city=${city}`;
  
  
  const data = await fetch (`${url}`).then(response => response.json());

  // city.innerHTML =`${data.name}`;
  document.querySelector(".city").innerHTML = data.name;

  temp.innerHTML =`${Math.round(data.temp)}°C`;


 const iconC = data.icon;
 const iconUrl = `https://openweathermap.org/img/wn/${iconC}.png`;
 icon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
document.querySelector(".description").innerText = data.description;
humidity.innerHTML =`${data.humidity + "%"}`;
wind.innerHTML = `${data.windSpeed + "km/h"}`;
feelSlike.innerHTML = `${data. feelsLike}`;
minTem.innerHTML = `${data. minTemp}`;
mixTem.innerHTML = `${data. maxTemp}`;
press.innerHTML = `${data. pressure}`;
windAng.innerHTML = `${data.windAngle}`;

document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage =
  "url('https://source.unsplash.com/1600x900/?" + `${data.name}` + "')";
}

searchBtn.addEventListener('click', ()=>{
  checkWeather(inputBox.value);
});

