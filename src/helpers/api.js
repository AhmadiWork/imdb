import axios from 'axios';
import {URLS} from './global_variables';

export const API_V1 = axios.create({
    baseURL: URLS.backendFullUrl + '/v1'
});