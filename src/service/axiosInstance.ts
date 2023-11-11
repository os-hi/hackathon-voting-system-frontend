import axios, { AxiosRequestConfig } from 'axios';
import { BEARER } from '../utility/constants';
import { getLocalStorageItem } from '../utility/helper';
import { API_DOMAIN } from '../utility/constants';

const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
});

axiosInstance.interceptors.request.use(
  (axiosRequestConfig: AxiosRequestConfig) => {  
    const token = getLocalStorageItem('token');

    if (token) {
      axiosRequestConfig.headers!.Authorization = BEARER + token;
    }

    return axiosRequestConfig;
  },
  (error) => {
    console.error('error : ', error.response);

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  }, 
  (error) => {
    console.error('error : ', error.response);

    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/expired';
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;