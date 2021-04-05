import axios from 'axios';
import { useRef, useEffect } from 'react';
import { useGameContext } from '../_state/GameState';

export const useGetQuote = (): (() => void) => {
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

            console.log(response);
            gameContext.actions.setNotStarted();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        return () => {
            mounted.current = false;
        };
    }, []);

    return getQuote;
};
