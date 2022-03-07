import { BaseError } from '../types';
declare type useResourceResult<T> = {
    loading: boolean;
    data: T;
    error: BaseError;
    fetch: () => Promise<void>;
};
declare const useResource: <T>(apiMethod: (data: any) => Promise<unknown>, onLoadFetchEnabled?: boolean, payload?: Record<string, any>) => useResourceResult<T>;
export default useResource;
