import { createContext, useContext, useReducer } from 'react';
// Local
import { reducer, initialState } from './ViewState.reducer';
import { TViewContext } from './ViewState.types';
import { ViewStateActions } from './ViewState.actions';

const ViewContext = createContext<Partial<TViewContext>>([]);

export const ViewContextProvider: React.FC = ({ children }) => {
    const [state, stateDispatch] = useReducer(reducer, initialState);
    const stateActions = new ViewStateActions(stateDispatch);

    return (
        <ViewContext.Provider value={[state, stateActions]}>
            {children}
        </ViewContext.Provider>
    );
};

export const useViewContext = (): Partial<TViewContext> =>
    useContext(ViewContext);
