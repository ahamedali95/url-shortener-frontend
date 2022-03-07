import axios from 'axios';
import {ENDPOINTS} from './enpoints';
import {ShortenUrlResponse} from '../types';

type UrlApi = {
    shortenUrl: (params: { url: string }) => Promise<ShortenUrlResponse>
};

//Configuring url can be eloquently handled on the front end if we use profile management and load variables from those files.
const url: UrlApi = {
    shortenUrl: (params) => axios.post(process.env.NODE_ENV === 'development' ? ENDPOINTS.shortenUrl : `https://sholy.herokuapp.com${ENDPOINTS.shortenUrl}`, params)
};

export const API = {
    url
};
