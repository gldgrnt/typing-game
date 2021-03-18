import { StateActions } from 'state/shared';
import { TGlobalStateAction } from './_types';

export enum ACTIONS {
    SET_VIEW,
}

class GlobalStateActions extends StateActions<TGlobalStateAction> {
    constructor(dispatch: React.Dispatch<TGlobalStateAction>) {
        super(dispatch);
    }

    public setView = (ViewComponent: React.FC): void => {
        this.dispatch({
            type: ACTIONS.SET_VIEW,
            payload: ViewComponent,
        });
    };
}

export { GlobalStateActions };
