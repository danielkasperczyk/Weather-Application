import axios from 'axios';

const API_KEY = '82339489472861515d0a365415708a6e';

// const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export async function getCityName(lat, lon){
    const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pl`)
    const city = await response.data.locality
    return city;
}

export async function getWeather(lat, lon){
    const response =  await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&units=metric&appid=${API_KEY}`);
    return response.data;
}

export async function getWeatherByName(city){
    const response = await axios.get(``)
}

export async function reverseGeolocation(city){
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=85e2f7977b8743ae855a296daa1f9d29`)
    const result = response.data.results
    if(result.length > 0) {
        return result
    }
    else {
        return new Error('City not found');
    }
}

export function transformToUpperCase(string){
    return string.split(' ').map(str => str.charAt(0).toUpperCase() + str.substr(1)).join(' ');
}

export function convertToDays(days){
    console.log(days);
    days.forEach(day => {
        const time = new Date().getTime(); 
    })
}

