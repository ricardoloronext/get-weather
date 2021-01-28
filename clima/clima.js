const axios = require('axios');

const getWeather = async (city, key) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
  return response.data.main.temp;
}

module.exports = {
  getWeather
}