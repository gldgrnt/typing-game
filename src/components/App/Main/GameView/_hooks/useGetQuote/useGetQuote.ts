import axios from 'axios';
import { useRef, useEffect } from 'react';
import { GameContext, QuoteContext } from '../../_contexts';
import { TUseGetQuote } from './_types';

export const useGetQuote: TUseGetQuote = () => {
    const mounted = useRef(true);
    const gameContext = GameContext.useGameContext();
    const quoteContext = QuoteContext.useQuoteContext();

    const getQuote = async () => {
        gameContext.actions.setLoading();
        //
        if (!mounted.current) return;

        try {
            const response = await axios.get(
                'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
            );
            const { author, text } = response.data.quotes[0];
            quoteContext.actions.setQuote({ author, text });
            gameContext.actions.setNotStarted();
        } catch (error) {
            console.log(error);
            // Handle the error
        }
    };

    useEffect(() => {
        return () => {
            mounted.current = false;
        };
    }, []);

    return getQuote;
};
