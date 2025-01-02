import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.PROD ? '' : 'http://localhost:3001/api',
  timeout: 1000,
});

export interface ResResult<T = any> {
  status: number;
  data: T;
  message?: string;
}

export default instance;
