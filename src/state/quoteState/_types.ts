import { QuoteStateActions, ACTIONS } from './_actions';

export type TQuoteStateQuote = {
    author: string;
    text: string;
};

export type TQuoteState = {
    isLoading: boolean;
    error: null | Error;
    quote: TQuoteStateQuote;
};

export type TQuoteContext = [TQuoteState, QuoteStateActions];

export type TQuoteStateAction = {
    type: ACTIONS;
    payload?: TQuoteStateQuote | boolean | Error | null;
};
