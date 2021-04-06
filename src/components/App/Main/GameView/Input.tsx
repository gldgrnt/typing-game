import { useState, useEffect } from 'react';
import { GameContext, QuoteContext } from './_contexts';
import { TGameState } from './_contexts/GameContext/_types';

export const Input: React.FC = () => {
    const gameState = GameContext.useGameContext().state;

    const quoteContext = QuoteContext.useQuoteContext();
    const [index, setIndex] = useState(0);
    const nextWord = () => setIndex((prevIndex) => prevIndex + 1);
    const prevWord = () => setIndex((prevIndex) => prevIndex - 1);

    const { inputArray } = quoteContext.state;
    const currentWord = inputArray[index];

    const [latestKey, setLatestKey] = useState('');
    const [value, setValue] = useState(currentWord || '');

    useEffect(() => {
        setValue(currentWord);
    }, [currentWord]);

    if (gameState !== TGameState.NOT_STARTED) return <div />;

    const dispatchValue = () => {
        quoteContext.actions.updateInput(value, index);
        nextWord();
        setValue('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (latestKey === ' ') return dispatchValue();
        quoteContext.actions.updateInput(event.target.value, index);
        return setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') return dispatchValue();
        if (event.key === 'Backspace' && value === '') return prevWord();
        return setLatestKey(event.key);
    };

    return (
        <input
            type={'text'}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
};
