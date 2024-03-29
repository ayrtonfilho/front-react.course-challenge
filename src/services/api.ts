import axios from 'axios';

const address = window.location.href.split('/')[2];

let urlApi;

if (address === 'localhost:5173') {
	urlApi = 'http://localhost:8080';
} 

if (address === '192.168.2.78:5173') {
	urlApi = 'http://192.168.2.78:8080';
}

const api = axios.create({
	baseURL: urlApi
});

api.interceptors.request.use(async (config) => {
	const key = import.meta.env.VITE_KEY_API_ACCESS ?? '';

	config.headers.clear();
	config.headers['Key-HeaderAPI-SEPLAG-CE'] = key;

	return config;
});

export default api;
