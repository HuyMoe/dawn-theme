import axios from 'axios';

const https = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
});
https.interceptors.request.use((config) => {
    const user = localStorage.getItem('user');
    if (JSON.parse(user)) {
        config.headers.Authorization = 'Bearer ' + JSON.parse(user).accessToken;
    }
    return config;
});

https.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        return Promise.reject(error);
    },
);
export default https;
