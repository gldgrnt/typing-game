import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import { useGameContext } from '../../_contexts/GameContext';
import { TUseGetQuote } from './_types';

export const useGetQuote: TUseGetQuote = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const mounted = useRef(true);
    const gameContext = useGameContext();

    const getQuote = async () => {
        gameContext.actions.setLoading();
        //
        if (!mounted.current) return;

        try {
            const response = await axios.get(
                'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
            );
            const { author, text } = response.data.quotes[0];
            setQuote({ author, text });
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

    return {
        quote,
        getQuote,
    };
};
