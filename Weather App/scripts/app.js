const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const cName = document.querySelector(".card div h5");
const wCond = document.querySelector(".card div div.my-3");
const temperature = document.querySelector(
  ".card div.text-muted div.display-4 span:nth-child(1)"
);
const img = document.querySelector("img.time");

const updateCity = async (city) => {
  // call forecast methods.
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets,
    weather,
  };
};

const updateUI = (data) => {
  const { cityDets, weather } = data;

  cName.textContent = cityDets.EnglishName;
  wCond.textContent = weather.WeatherText;
  temperature.textContent = weather.Temperature.Metric.Value;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  let srcImg = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  img.setAttribute("src", srcImg);
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  // store into local storage.
  localStorage.setItem("city", city);
});

// check if local storage data exists;
if (localStorage.getItem("city")) {
  // fire event with the city value.
  updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
