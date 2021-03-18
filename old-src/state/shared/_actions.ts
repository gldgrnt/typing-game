import type { IStateActions } from 'state/shared';

export abstract class StateActions<TStateAction>
    implements IStateActions<TStateAction> {
    dispatch;

    constructor(dispatch: React.Dispatch<TStateAction>) {
        this.dispatch = dispatch;
    }
}
