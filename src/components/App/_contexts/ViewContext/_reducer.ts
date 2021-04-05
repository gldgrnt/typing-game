import { GameView } from 'components/App/Main/GameView';
// Local
import { ACTIONS } from './_actions';
import { TViewState, TViewStateAction } from './_types';

export const initialState: TViewState = {
    activeView: GameView,
    isActiveView: {
        GameView: true,
        HistoryView: false,
    },
};

export const reducer: React.Reducer<TViewState, TViewStateAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTIONS.SET_VIEW: {
            const { name } = action.payload;
            const isActiveView = Object.entries(state.isActiveView).reduce(
                (accumulator, view) => {
                    return { ...accumulator, [view[0]]: view[0] === name };
                },
                state.isActiveView
            );

            return {
                activeView: action.payload,
                isActiveView,
            };
        }

        default:
            return state;
    }
};
