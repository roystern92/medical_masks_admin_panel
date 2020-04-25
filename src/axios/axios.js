import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mi-avelc-2020.herokuapp.com/'
});

export default instance;