import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'http://localhost:5010/',
    timeout: 30000,
    headers: {Authorization: localStorage.getItem("usertoken")}
})

