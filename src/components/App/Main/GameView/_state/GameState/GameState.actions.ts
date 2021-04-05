import { StateActions } from 'state';
import { TGameStateAction } from './GameState.types';

export enum ACTIONS {
    SET_LOADING,
    SET_NOT_STARTED,
    SET_STARTED,
    SET_FINISHED,
}

export class GameStateActions extends StateActions<TGameStateAction> {
    constructor(dispatch: React.Dispatch<TGameStateAction>) {
        super(dispatch);
    }

    public setLoading = (): void => {
        this.dispatch({
            type: ACTIONS.SET_LOADING,
        });
    };

    public setNotStarted = (): void => {
        this.dispatch({
            type: ACTIONS.SET_NOT_STARTED,
        });
    };

    public setStarted = (): void => {
        this.dispatch({
            type: ACTIONS.SET_STARTED,
        });
    };

    public setFinished = (): void => {
        this.dispatch({
            type: ACTIONS.SET_FINISHED,
        });
    };
}
