import { ACTIONS } from './GameState.actions';

export enum TGameState {
    INITIAL,
    LOADING,
    NOT_STARTED,
    STARTED,
    FINISHED,
}

export type TGameStateAction = {
    type: ACTIONS;
};
