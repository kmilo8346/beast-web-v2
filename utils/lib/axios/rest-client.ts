import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';
import qs from 'qs';

// libs
import Firebase from '../firebase';
// types
import {
    SearchParams,
    SearchResponse,
    GetParams
} from '../../../types';

axios.defaults.baseURL = process.env.BEAST_API_URL;

const interpolate = (
    text: string,
    variables: { [key: string]: any } | undefined
) => {
    if (!variables) return text;

    let interpolatedText = text;
    Object.keys(variables).forEach((key) => {
        interpolatedText = interpolatedText.replace(
            new RegExp(`:${key}`, 'g'),
            variables[key]
        );
    });
    return interpolatedText;
};

/**
 * REST Client to standarize api comunications
 */
export default class RESTClient<T, V> {
    public axios: AxiosInstance;

    public prefix: string;

    constructor(prefix: string, config?: AxiosRequestConfig) {
        this.prefix = prefix;
        this.axios = axios.create({
            paramsSerializer: (params) => {
                return qs.stringify(params);
            },
            ...config,
        });

        axiosRetry(this.axios, {
            retries: 5,
            retryDelay: axiosRetry.exponentialDelay,
        });

        this.axios.interceptors.request.use(
            async (config) => {
                const firebase = Firebase.getInstance();
                const newConfig = { ...config };
                const currentuser = await firebase.getUser();
                if (!currentuser) {
                    throw new Error('Error making request with no user logged');
                }
                const idToken = await currentuser.getIdToken(/* forceRefresh */ true);
                newConfig.headers.Authorization = `Bearer ${idToken}`;
                return config;
            },
            (error) => {
                throw error;
            }
        );
    }

    async get(params: GetParams, config?: AxiosRequestConfig): Promise<T> {
        const { pathVars, source } = params;
        const response = await this.axios.get<T>(
            interpolate(`${this.prefix}/:id`, pathVars),
            {
                ...config,
                params: {
                    source,
                },
            }
        );
        return response.data;
    }

    async search(
        params: SearchParams,
        config?: AxiosRequestConfig
    ): Promise<SearchResponse<T>> {
        const { pathVars, ...data } = params;
        const response = await this.axios.get<SearchResponse<T>>(
            interpolate(`${this.prefix}`, pathVars),
            {
                ...config,
                params: data,
            }
        );
        return response.data;
    }

}