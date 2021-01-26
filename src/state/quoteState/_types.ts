import { Quote } from 'classes';
import { QuoteStateActions, ACTIONS } from './_actions';

export type TQuoteState = {
    isLoading: boolean;
    error: null | Error;
    current: Quote;
};

export type TQuoteContext = [TQuoteState, QuoteStateActions];

export type TQuoteStateAction = {
    type: ACTIONS;
    payload?: Quote | boolean | Error | null;
};
