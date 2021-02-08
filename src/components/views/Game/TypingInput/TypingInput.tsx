import { useState, useEffect } from 'react';
//
import { IProps } from './TypingInput.types';

export const TypingInput: React.FC<IProps> = (props) => {
    const { currentUserWord, updateUserWord, nextWord, prevWord } = props;
    // Set up local state
    const [latestKey, setLatestKey] = useState('');
    const [value, setValue] = useState(currentUserWord);

    useEffect(() => {
        setValue(currentUserWord);
    }, [currentUserWord]);

    const dispatchValue = () => {
        updateUserWord(value);
        nextWord();
        setValue('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (latestKey === ' ') return dispatchValue();
        updateUserWord(event.target.value);
        return setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') return dispatchValue();
        if (event.key === 'Backspace' && value === '') return prevWord();
        return setLatestKey(event.key);
    };

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <input
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </form>
    );
};
