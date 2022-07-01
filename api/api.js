import axios from 'axios';
import { message as messageAnt } from 'antd';

export const urlApi = process.env.URL_BASE || 'https://job-posting-backend.vercel.app/api/'
let API = axios.create({
    baseURL: urlApi,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
});

API.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers["auth-token"] = token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => {
        const { code, success, message } = response.data;
        if (code === 'AUTHENTICATION_ERROR' ) {
            localStorage.setItem('accessToken', '')
        }
        if(message){
            if(!success) messageAnt.error(response.data.message);
            else messageAnt.success(response.data.message)
        }
        return response;
    }
)

export default API;