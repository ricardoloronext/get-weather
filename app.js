const axios = require('axios');
const { getWeather } = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

console.log(argv);


const getInfo = async (location) => {
  try {
    const encodedLocation = encodeURI(location);
    const temp = await getWeather(encodedLocation);
    return `El clima de ${location} es de ${temp}`;
  } catch(e) {
    return `No se pudo determinar el clima de ${location}`;
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log)