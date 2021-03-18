import { ACTIONS } from './_actions';
import { TGlobalState, TGlobalStateAction } from './_types';
import { Game } from 'components/views/Game';

export const initialState: TGlobalState = {
    view: Game,
};

export const reducer: React.Reducer<TGlobalState, TGlobalStateAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTIONS.SET_VIEW:
            return { view: action.payload };

        default:
            return state;
    }
};
