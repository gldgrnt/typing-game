import { StateActions } from 'context';
import { TQuote, TQuoteStateAction } from './_types';

export enum ACTIONS {
    SET_QUOTE,
    UPDATE_INPUT,
}

export class QuoteStateActions extends StateActions<TQuoteStateAction> {
    constructor(dispatch: React.Dispatch<TQuoteStateAction>) {
        super(dispatch);
    }

    public setQuote = (quote: TQuote): void => {
        this.dispatch({
            type: ACTIONS.SET_QUOTE,
            payload: quote,
        });
    };

    public updateInput = (text: string, index: number): void => {
        this.dispatch({
            type: ACTIONS.UPDATE_INPUT,
            payload: {
                index,
                text,
            },
        });
    };
}
