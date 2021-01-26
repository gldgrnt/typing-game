import { GlobalStateActions, ACTIONS } from './_actions';

export type TGlobalState = {
    view: React.FC;
};

export type TGlobalContext = [TGlobalState, GlobalStateActions];

export type TGlobalStateAction = {
    type: ACTIONS;
    payload: React.FC;
};
