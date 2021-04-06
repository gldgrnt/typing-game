import { ACTIONS } from './_actions';

export type TQuote = {
    text: string;
    author: string;
};

export type TInput = {
    index: number;
    text: string;
};

export type TQuoteState = {
    text: string;
    author: string;
    quoteArray: string[];
    inputArray: string[];
};

export type TQuoteStateAction = {
    type: ACTIONS;
    payload: TQuote | TInput;
};
