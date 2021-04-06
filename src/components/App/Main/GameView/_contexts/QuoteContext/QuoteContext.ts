import { contextCreator } from 'context';

import { reducer, initialState } from './_reducer';
import { QuoteStateActions } from './_actions';

const createdContext = contextCreator(initialState, reducer, QuoteStateActions);

export const QuoteContextProvider = createdContext.Provider;
export const useQuoteContext = createdContext.useContextHook;
