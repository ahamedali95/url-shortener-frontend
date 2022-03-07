import {useState, useEffect, useCallback} from 'react';
import {BaseError, GenericResponse} from '../types';

type useResourceResult<T> = {
    loading: boolean,
    data: T,
    error: BaseError,
    fetch: () => Promise<void>
};

// typical useQuery functionality recreated
const useResource = <T>(
    apiMethod: (data: any) => Promise<unknown>,
    onLoadFetchEnabled = true,
    payload: Record<string, any> = {}
): useResourceResult<T> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T>(null as unknown as T);
    const [error, setError] = useState<BaseError>(null as unknown as BaseError);

    const fetch = useCallback(async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await apiMethod(payload) as GenericResponse<T>;
            console.log(response)
            setLoading(false);
            setData(response.data.data);
        } catch (e) {
            setLoading(false);
            setError((e as any).response.data.error);
        }
    }, [setLoading, apiMethod, setData, setError, payload]);

    useEffect(() => {
        onLoadFetchEnabled && fetch();
    }, [onLoadFetchEnabled, fetch]);

    return {
        loading,
        data,
        error,
        fetch
    };
};

export default useResource;