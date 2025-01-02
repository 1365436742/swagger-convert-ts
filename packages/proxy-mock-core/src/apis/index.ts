import { message } from 'antd';
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.PROD ? '' : 'http://localhost:3001',
  timeout: 1000,
});
instance.interceptors.response.use((response) => {
  if (response.data.status === 0) {
    message.error(response.data.message);
  }
  return response;
});

export interface ResResult<T = any> {
  status: number;
  data: T;
  message?: string;
}

export default instance;
