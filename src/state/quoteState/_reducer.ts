import { Quote } from 'classes';
import { ACTIONS } from './_actions';
import { TQuoteState, TQuoteStateAction } from './_types';

export const initialState: TQuoteState = {
    isLoading: false,
    error: null,
    current: {
        author: '',
        content: '',
        length: 0,
    },
};

export const reducer: React.Reducer<TQuoteState, TQuoteStateAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTIONS.SET_QUOTE: {
            const current = action.payload as Quote;
            return { ...state, current };
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
