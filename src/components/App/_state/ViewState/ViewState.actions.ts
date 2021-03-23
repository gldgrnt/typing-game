import { StateActions } from 'shared/state';
import { RegisteredViews } from 'components/App/Main';
// Local
import { TViewStateAction } from './ViewState.types';

export enum ACTIONS {
    SET_VIEW,
}

export class ViewStateActions extends StateActions<TViewStateAction> {
    constructor(dispatch: React.Dispatch<TViewStateAction>) {
        super(dispatch);
    }

    // Setters
    public setToGameView = (): void => {
        this.dispatch({
            type: ACTIONS.SET_VIEW,
            payload: RegisteredViews.GameView,
        });
    };

    public setToHistoryView = (): void => {
        this.dispatch({
            type: ACTIONS.SET_VIEW,
            payload: RegisteredViews.HistoryView,
        });
    };
}
