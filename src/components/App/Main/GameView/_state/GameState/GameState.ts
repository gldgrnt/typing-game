import { contextCreator } from 'state';
//
import { reducer, initialState } from './GameState.reducer';
import { GameStateActions } from './GameState.actions';

const createdContext = contextCreator(initialState, reducer, GameStateActions);

export const GameContextProvider = createdContext.Provider;
export const useGameContext = createdContext.useContextHook;
