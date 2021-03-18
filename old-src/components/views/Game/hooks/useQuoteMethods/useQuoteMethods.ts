import { useState, useEffect } from 'react';
import { Quote } from 'classes';
import {
    QuoteStateActions,
    TQuoteState,
    TQuoteStateQuote,
    useQuoteContext,
} from 'state/quoteState';
import { IReturn } from './useQuoteMethods.types';

const useQuoteMethods = (): IReturn => {
    // Global quote state
    const [quoteState, quoteActions] = useQuoteContext();
    const { getQuote } = quoteActions as QuoteStateActions;
    const { quote, isLoading } = quoteState as TQuoteState;
    const { author, text } = quote as TQuoteStateQuote;

    // Local quote state
    const [currentQuote, setCurrentQuote] = useState(new Quote());

    // Set up the new local quote object once the quote has been fetched
    useEffect(() => {
        if (author && text && !isLoading) {
            const nextQuote = new Quote(author, text);
            setCurrentQuote(nextQuote);
        }
    }, [quoteState]);

    // Varibles to return
    const newQuote = () => {
        // if finished -> push to history
        getQuote();
    };

    return {
        currentQuote,
        newQuote,
        isLoading,
    };
};

export default useQuoteMethods;
