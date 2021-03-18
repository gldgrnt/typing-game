import { createContext, useContext, useReducer } from 'react';
import { GlobalStateActions } from './_actions';
import { TGlobalContext } from './_types';
import { initialState, reducer } from './_reducer';

const GlobalContext = createContext<Partial<TGlobalContext>>([]);

export const GlobalContextProvider: React.FC = ({ children }) => {
    const [state, stateDispatch] = useReducer(reducer, initialState);
    const stateActions = new GlobalStateActions(stateDispatch);

    return (
        <GlobalContext.Provider value={[state, stateActions]}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): Partial<TGlobalContext> =>
    useContext(GlobalContext);
