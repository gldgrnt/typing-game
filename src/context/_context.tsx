import { createContext, useContext, useReducer } from 'react';
import { IActionsConstructor } from './_types';

// Function to create useful c
export function contextCreator<TState, TActionsClass, TStateAction>(
    initialState: TState,
    reducer: React.Reducer<TState, TStateAction>,
    Actions: IActionsConstructor<TActionsClass, TStateAction>
): {
    Provider: React.FC;
    useContextHook: () => { state: TState; actions: TActionsClass };
} {
    const Context = createContext<
        Partial<{ state: TState; actions: TActionsClass }>
    >({});

    const ContextProvider: React.FC = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const actions = new Actions(dispatch);

        return (
            <Context.Provider value={{ state, actions }}>
                {children}
            </Context.Provider>
        );
    };

    const useContextHook = (): { state: TState; actions: TActionsClass } => {
        return useContext(Context) as { state: TState; actions: TActionsClass };
    };

    return {
        Provider: ContextProvider,
        useContextHook: useContextHook,
    };
}
