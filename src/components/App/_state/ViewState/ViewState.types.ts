import { RegisteredViews } from 'components/App/Main/';
import { ViewStateActions, ACTIONS } from './ViewState.actions';

export type TRegistredViews = keyof typeof RegisteredViews;

export type TViewState = {
    activeView: React.FC;
    isActiveView: {
        [key in TRegistredViews]: boolean;
    };
};

export type TViewContext = [TViewState, ViewStateActions];

export type TViewStateAction = {
    type: ACTIONS;
    payload: React.FC;
};
