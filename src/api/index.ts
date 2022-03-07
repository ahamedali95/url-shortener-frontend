import axios from 'axios';
import {ENDPOINTS} from './enpoints';
import {ShortenUrlResponse} from '../types';

type UrlApi = {
    shortenUrl: (params: { url: string }) => Promise<ShortenUrlResponse>
};

const url: UrlApi = {
    shortenUrl: (params) => axios.post(ENDPOINTS.shortenUrl, params)
};

export const API = {
    url
};
