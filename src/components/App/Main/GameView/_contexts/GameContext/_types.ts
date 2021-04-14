import { ACTIONS } from './_actions';

export enum GAME_STATE {
    INITIAL,
    LOADING,
    NOT_STARTED,
    STARTED,
    FINISHED,
}

export type TGameStateAction = {
    type: ACTIONS;
};
