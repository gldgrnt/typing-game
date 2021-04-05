import { contextCreator } from 'context';
//
import { reducer, initialState } from './_reducer';
import { GameStateActions } from './_actions';

const createdContext = contextCreator(initialState, reducer, GameStateActions);

export const GameContextProvider = createdContext.Provider;
export const useGameContext = createdContext.useContextHook;
