import { useState } from 'react';

const TypingInput: React.FC = () => {
    const [latestKey, setLatestKey] = useState('');
    const [value, setValue] = useState('');

    const dispatchValue = () => {
        setValue('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (latestKey === ' ') return dispatchValue();
        return setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') return dispatchValue();
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

export { TypingInput };
