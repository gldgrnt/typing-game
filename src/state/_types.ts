export interface IActionsConstructor<TClass, TStateAction> {
    new (dispatch: React.Dispatch<TStateAction>): TClass;
}
