import axios from "axios";
import { hostUrl, tokenStorageName } from "./constants";

const apiClient = axios.create({
    baseUrl: hostUrl,
    timeout: 1000,
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem(tokenStorageName);
    if (token !== null) {
        config.headers['Authorization'] = token;
    }
    return config;
});

export { apiClient };