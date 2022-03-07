import { AxiosResponse } from 'axios';
export interface BaseError {
    systemErrors: string[];
    message: string;
}
interface ApiResponse<T> {
    data: T;
    error: BaseError;
}
export interface GenericResponse<T> extends AxiosResponse {
    data: ApiResponse<T>;
}
export interface IUrl {
    _id: string;
    longUrl: string;
    shortUrl: string;
}
export declare type ShortenUrlResponse = GenericResponse<IUrl>;
export {};
