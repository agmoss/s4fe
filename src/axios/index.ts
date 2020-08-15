import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

import {
    left,
    right,
    Right,
    Left,
} from "fp-ts/lib/Either";


type Ret<T> = Right<AxiosResponse<T>> | Left<AxiosError<T>>
/**
 * @name request
 * @description Axios request
 * @param {AxiosRequestConfig} config request opts
 * @returns {Promise<Right<AxiosResponse<T>> | Left<AxiosError<T>>>} Either 
 */
const request = async <T>(
    config: AxiosRequestConfig
): Promise<Ret<T>> => {
    try {
        const response = await axios.request<T>({
            ...config
        });
        return right(response);
    } catch (e) {
        return left(e);
    }
};

export { Ret, request }