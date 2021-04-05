export abstract class StateActions<TStateAction> {
    constructor(protected dispatch: React.Dispatch<TStateAction>) {}
}
