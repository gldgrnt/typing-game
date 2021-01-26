import { QuoteContextProvider } from 'state/quoteState';
import { TypingInput } from './TypingInput';
import { TypingText } from './TypingText';

export const Game: React.FC = () => {
    return (
        <QuoteContextProvider>
            <TypingText />
            <TypingInput />
        </QuoteContextProvider>
    );
};
