import { RegisteredViews } from 'components/App/Main';
import { StateActions } from 'context';
//
import { TViewStateAction } from './_types';

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
