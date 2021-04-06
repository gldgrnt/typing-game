import { TInput, TQuote, TQuoteState, TQuoteStateAction } from './_types';
import { ACTIONS } from './_actions';

export const initialState: TQuoteState = {
    author: '',
    text: '',
    quoteArray: [],
    inputArray: [],
};

export const reducer: React.Reducer<TQuoteState, TQuoteStateAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTIONS.SET_QUOTE: {
            const { author, text } = action.payload as TQuote;
            const quoteArray = text.split(' ');

            return {
                author,
                text,
                quoteArray,
                inputArray: Array(quoteArray.length).fill(''),
            };
        }

        case ACTIONS.UPDATE_INPUT: {
            const { index, text } = action.payload as TInput;
            const newInputArray = state.inputArray;
            newInputArray[index] = text;

            return {
                ...state,
                inputArray: newInputArray,
            };
        }

        default:
            return state;
    }
};
