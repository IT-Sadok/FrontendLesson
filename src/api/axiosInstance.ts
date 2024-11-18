import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://dogapi.dog/api/v2',
});

export default axiosInstance;
