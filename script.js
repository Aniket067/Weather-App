const apikey = "379cd63972a3453de45f4b44c0db4720";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none";

  } else {
    var data = await response.json();

    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";


    if (data.weather[0].main == "Clouds") {
      weathericon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
      weathericon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
      weathericon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
      weathericon.src = "img/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"


  }

}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.heading h1');
  const text = heading.innerText;
  heading.innerText = '';

  let delay = 0;
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.animation = `fadeIn 4s backwards ${delay}s`; 
    delay += 0.15;
    heading.appendChild(span);
  }
});



