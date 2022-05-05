import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpClient {
  instance: AxiosInstance;
  constructor({ baseURL }: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL,
    });
  }

  request({ url, method, params, data }: AxiosRequestConfig) {
    return this.instance.request({
      params,
      method,
      url,
      data,
    });
  }
}

const httpClient = new HttpClient({ baseURL: 'https://jsonplaceholder.typicode.com/' });

export default httpClient;
