// import { createContext, useContext, useReducer } from 'react';
// import { QuoteStateActions } from './_actions';
// import { TQuoteContext } from './_types';
// import { initialState, reducer } from './_reducer';

// const QuoteContext = createContext<Partial<TQuoteContext>>([]);

// export const QuoteContextProvider: React.FC = ({ children }) => {
//     const [state, stateDispatch] = useReducer(reducer, initialState);
//     const stateActions = new QuoteStateActions(stateDispatch);

//     return (
//         <QuoteContext.Provider value={[state, stateActions]}>
//             {children}
//         </QuoteContext.Provider>
//     );
// };

// export const useQuoteContext = (): Partial<TQuoteContext> =>
//     useContext(QuoteContext);

export {};
