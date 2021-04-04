import { contextCreator } from 'shared/state/_context';
//
import { reducer, initialState } from './GameState.reducer';
import { GameStateActions } from './GameState.actions';

const createdContext = contextCreator(initialState, reducer, GameStateActions);

export const GameContext = createdContext.Context;
export const GameContextProvider = createdContext.Provider;
export const useGameContext = createdContext.useContextHook;
