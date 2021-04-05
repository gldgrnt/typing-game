import { ACTIONS } from './_actions';

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
