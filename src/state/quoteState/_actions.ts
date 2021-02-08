import { StateActions } from 'state/shared';
import { getQuote, TQuoteApiData, TQuoteApiDataQuote } from 'services/quoteApi';
import { TQuoteStateAction } from './_types';

export enum ACTIONS {
    SET_QUOTE,
    SET_QUOTE_ERROR,
    CLEAR_QUOTE_ERROR,
    SET_QUOTE_IS_LOADING,
    SET_QUOTE_DONE_LOADING,
}

class QuoteStateActions extends StateActions<TQuoteStateAction> {
    constructor(dispatch: React.Dispatch<TQuoteStateAction>) {
        super(dispatch);
    }

    public getQuote = async (): Promise<void> => {
        try {
            const data = (await this._fetchQuote()) as TQuoteApiData;
            const quote = data.quotes[0];
            this._setQuote(quote);
        } catch (error) {
            return this._setQuoteError(error);
        }
    };

    private _fetchQuote = async (): Promise<TQuoteApiData | void> => {
        try {
            this._setQuoteIsLoading();
            this._clearQuoteError();
            const { data } = await getQuote();
            this._setQuoteDoneLoading();
            return data;
        } catch (error) {
            this._setQuoteDoneLoading();
            return this._setQuoteError(error);
        }
    };

    private _setQuote = (apiQuote: TQuoteApiDataQuote): void => {
        const { author, text } = apiQuote;
        return this.dispatch({
            type: ACTIONS.SET_QUOTE,
            payload: {
                author,
                text,
            },
        });
    };

    private _setQuoteIsLoading = (): void => {
        return this.dispatch({ type: ACTIONS.SET_QUOTE_IS_LOADING });
    };

    private _setQuoteDoneLoading = (): void => {
        return this.dispatch({ type: ACTIONS.SET_QUOTE_DONE_LOADING });
    };

    private _clearQuoteError = (): void => {
        return this.dispatch({
            type: ACTIONS.CLEAR_QUOTE_ERROR,
            payload: null,
        });
    };

    private _setQuoteError = (error: Error | null): void => {
        this.dispatch({ type: ACTIONS.SET_QUOTE_ERROR, payload: error });
    };
}

export { QuoteStateActions };
