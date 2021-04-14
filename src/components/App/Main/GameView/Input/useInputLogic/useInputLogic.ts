import { useState, useEffect } from 'react';
import { TuseInputLogic } from './_types';
import { QuoteContext, GameContext } from '../../_contexts';
import { GAME_STATE } from '../../_contexts/GameContext';
import { useGetQuote } from '../../_hooks';

export const useInputLogic: TuseInputLogic = () => {
    // Set up contexts
    const gameContext = GameContext.useGameContext();
    const gameState = gameContext.state;
    const quoteContext = QuoteContext.useQuoteContext();
    const getQuote = useGetQuote();
    const finishedIndex = quoteContext.state.inputArray.length - 1;

    // State for the index of the word that the user is typing
    const [index, setIndex] = useState(0);
    const currentWord = quoteContext.state.inputArray[index];
    const [latestKey, setLatestKey] = useState('');
    const [value, setValue] = useState(currentWord);

    // Reset the index when a new quote is loaded
    useEffect(() => {
        setIndex(0);
        gameContext.actions.setNotStarted();
    }, [quoteContext.state.text]);

    useEffect(() => {
        setValue(currentWord);
        if (currentWord && gameState !== GAME_STATE.STARTED)
            gameContext.actions.setStarted();
    }, [currentWord]);

    const prevWord = () => {
        setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const nextWord = () => {
        if (index === finishedIndex) {
            setValue('');
            gameContext.actions.setFinished();
            return;
        }
        setIndex((prevIndex) => Math.min(prevIndex + 1, finishedIndex));
    };

    const dispatchValue = () => {
        quoteContext.actions.updateInput(value, index);
        nextWord();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (latestKey === ' ' && value !== '') return dispatchValue();
        quoteContext.actions.updateInput(event.target.value, index);
        setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Escape') return getQuote();
        if (event.key === 'Enter') return dispatchValue();
        if (event.key === 'Backspace' && value === '') return prevWord();
        setLatestKey(event.key);
    };

    return {
        handleChange,
        handleKeyDown,
        value,
    };
};
