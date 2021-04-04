import { TGameState, TGameStateAction } from './GameState.types';
import { ACTIONS } from './GameState.actions';

export const initialState: TGameState = TGameState.INITIAL;

export const reducer: React.Reducer<TGameState, TGameStateAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTIONS.SET_LOADING:
            return TGameState.LOADING;

        case ACTIONS.SET_NOT_STARTED:
            return TGameState.NOT_STARTED;

        case ACTIONS.SET_STARTED:
            return TGameState.STARTED;

        case ACTIONS.SET_FINISHED:
            return TGameState.FINISHED;

        default:
            return state;
    }
};
