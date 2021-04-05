import { contextCreator } from 'state';
// Local
import { reducer, initialState } from './ViewState.reducer';
import { ViewStateActions } from './ViewState.actions';

const createdContext = contextCreator(initialState, reducer, ViewStateActions);

export const ViewContext = createdContext.Context;
export const ViewContextProvider = createdContext.Provider;
export const useViewContext = createdContext.useContextHook;
