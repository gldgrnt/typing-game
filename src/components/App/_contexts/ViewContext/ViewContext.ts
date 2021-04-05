import { contextCreator } from 'context';
// Local
import { reducer, initialState } from './_reducer';
import { ViewStateActions } from './_actions';

const createdContext = contextCreator(initialState, reducer, ViewStateActions);

export const ViewContextProvider = createdContext.Provider;
export const useViewContext = createdContext.useContextHook;
