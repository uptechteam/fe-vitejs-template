import axios from 'axios';

import { baseURL } from '~/utils/axios.config';

export const axiosInstance = axios.create({
  baseURL,
});
