declare type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
};
export declare const register: (config?: Config | undefined) => void;
export declare const unregister: () => void;
export {};
