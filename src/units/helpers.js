import axios from 'axios';

const API_KEY = '82339489472861515d0a365415708a6e';

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export async function getCityName(lat, lon){
    const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pl`)
    const city = await response.data.locality
    return city;
}

export async function getWeather(lat, lon){
    const response =  await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&units=metric&appid=${API_KEY}`);
    return response.data;

}