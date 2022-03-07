import { ShortenUrlResponse } from '../types';
declare type UrlApi = {
    shortenUrl: (params: {
        url: string;
    }) => Promise<ShortenUrlResponse>;
};
export declare const API: {
    url: UrlApi;
};
export {};
