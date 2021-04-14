import { GAME_STATE, TGameStateAction } from './_types';
import { ACTIONS } from './_actions';

export const initialState: GAME_STATE = GAME_STATE.INITIAL;

export const reducer: React.Reducer<GAME_STATE, TGameStateAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTIONS.SET_LOADING:
            return GAME_STATE.LOADING;

        case ACTIONS.SET_NOT_STARTED:
            return GAME_STATE.NOT_STARTED;

        case ACTIONS.SET_STARTED:
            return GAME_STATE.STARTED;

        case ACTIONS.SET_FINISHED:
            return GAME_STATE.FINISHED;

        default:
            return state;
    }
};
