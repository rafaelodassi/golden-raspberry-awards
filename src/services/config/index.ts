import axios from 'axios';

import { API_URL } from '../../constants';

const apiService = axios.create({
  baseURL: API_URL,
});

apiService.interceptors.request.use(
  (request) => request,
  (err) => Promise.reject(err)
);

apiService.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err.response)
);

export default apiService;
