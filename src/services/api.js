import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getData = async(city, country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${process.env.REACT_APP_API_key}&units=metric`)
}