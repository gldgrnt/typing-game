import axios, { AxiosResponse } from 'axios';
import type { TQuoteApiData } from './quoteApi.types';

export const getQuote = (): Promise<AxiosResponse<TQuoteApiData>> => {
    return axios.get(
        'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
    );
};
