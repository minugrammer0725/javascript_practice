// One App, 50 requests per day.
const key = "GjVZXtbYIGx1vnGB0FGPaQMTUGhY4sfb";

const getCity = async (city) => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};

const getWeather = async (location) => {
  const baseURL = `http://dataservice.accuweather.com/currentconditions/v1/${location}`;
  const query = `?apikey=${key}`;
  const response = await fetch(baseURL + query);
  const data = await response.json();
  return data[0];
};
