import { RegisteredViews } from 'components/App/Main/';
import { ACTIONS } from './ViewState.actions';

export type TRegistredViews = keyof typeof RegisteredViews;

export type TViewState = {
    activeView: React.FC;
    isActiveView: {
        [key in TRegistredViews]: boolean;
    };
};

export type TViewStateAction = {
    type: ACTIONS;
    payload: React.FC;
};
