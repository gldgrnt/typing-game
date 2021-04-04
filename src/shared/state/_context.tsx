import { createContext, useContext, useReducer } from 'react';
import { IActionsConstructor } from './_types';

export function contextCreator<TState, TActionsClass, TStateAction>(
    initialState: TState,
    reducer: React.Reducer<TState, TStateAction>,
    Actions: IActionsConstructor<TActionsClass, TStateAction>
): {
    Context: React.Context<Partial<[TState, TActionsClass]>>;
    Provider: React.FC;
    useContextHook: () => [TState, TActionsClass];
} {
    const Context = createContext<Partial<[TState, TActionsClass]>>([]);

    const ContextProvider: React.FC = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const actions = new Actions(dispatch);

        return (
            <Context.Provider value={[state, actions]}>
                {children}
            </Context.Provider>
        );
    };

    const useContextHook = (): [TState, TActionsClass] => {
        return useContext(Context) as [TState, TActionsClass];
    };

    return {
        Context: Context,
        Provider: ContextProvider,
        useContextHook: useContextHook,
    };
}
