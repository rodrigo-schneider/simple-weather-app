const key = "7773b59eeb23ebdab8a0b5da9d67b324";

function dataOnScreen(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC";
  document.querySelector(".forecast-text").innerHTML =
    data.weather[0].description;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(
    ".forecast-image"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  dataOnScreen(data);
}

function buttonClick() {
  const city = document.querySelector(".input-city").value;
  searchCity(city);
}
