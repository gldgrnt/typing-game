import { useState, useEffect } from 'react';
// import { Word } from 'classes';
import { IProps } from './TypingText.types';
import { HighlightedWord } from './HighlightedWord/HightlightedWord';

export const TypingText: React.FC<IProps> = (props) => {
    const { currentQuote, allUserWords } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(currentQuote.getCurrentIndex());
    }, [allUserWords]);

    const isQuoteSelected = currentQuote.length !== 0;

    if (!isQuoteSelected) {
        return <h3>Choose a new quote</h3>;
    }

    return (
        <h3>
            {currentQuote.words.map((quoteWord, wordIndex) => {
                const status = Word.getStatus(wordIndex, currentIndex);
                const userWord = allUserWords[wordIndex];
                const isLastWord = wordIndex === currentQuote.length - 1;

                return (
                    <HighlightedWord
                        quoteWord={quoteWord}
                        userWord={userWord}
                        status={status}
                        isLastWord={isLastWord}
                        key={quoteWord + wordIndex}
                    />
                );
            })}
        </h3>
    );
};
