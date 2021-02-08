import { useQuoteMethods, useWordMethods } from './hooks';
import { TypingInput } from './TypingInput';
import { TypingText } from './TypingText';

export const Game: React.FC = () => {
    const { currentQuote, newQuote } = useQuoteMethods();
    //
    const wordMethods = useWordMethods(currentQuote);
    const { updateUserWord, nextWord, prevWord } = wordMethods;
    const { currentUserWord, allUserWords } = wordMethods;

    return (
        <>
            <button onClick={nextWord} disabled={!currentQuote.hasNextWord()}>
                Next
            </button>
            <button onClick={prevWord} disabled={!currentQuote.hasPrevWord()}>
                Prev
            </button>
            <button onClick={newQuote}>Get new quote</button>
            <TypingText
                currentQuote={currentQuote}
                allUserWords={allUserWords}
            />
            <TypingInput
                currentUserWord={currentUserWord}
                updateUserWord={updateUserWord}
                nextWord={nextWord}
                prevWord={prevWord}
            />
        </>
    );
};
