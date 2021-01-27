const axios = require('axios');
const key = 'c0526b6b5ea8db947aca886a8df57236';

const getWeather = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
  return response.data.main.temp;
}

module.exports = {
  getWeather
}