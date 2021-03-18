import { ACTIONS } from './_actions';
import { TQuoteState, TQuoteStateQuote, TQuoteStateAction } from './_types';

export const initialState: TQuoteState = {
    isLoading: false,
    error: null,
    quote: {
        author: '',
        text: '',
    },
};

export const reducer: React.Reducer<TQuoteState, TQuoteStateAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTIONS.SET_QUOTE: {
            const quote = action.payload as TQuoteStateQuote;
            return { ...state, quote };
        }

        case ACTIONS.SET_QUOTE_IS_LOADING:
            return { ...state, isLoading: true };

        case ACTIONS.SET_QUOTE_DONE_LOADING:
            return { ...state, isLoading: false };

        case ACTIONS.CLEAR_QUOTE_ERROR: {
            const error = action.payload as null;
            return { ...state, error };
        }

        case ACTIONS.SET_QUOTE_ERROR: {
            const error = action.payload as Error;
            return { ...state, error };
        }

        default:
            return state;
    }
};
