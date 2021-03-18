import { useState, useEffect } from 'react';
import { Quote } from 'classes';
import { IReturn } from './useWordMethods.types';

const useWordMethods = (quote: Quote): IReturn => {
    const [allUserWords, setAllUserWords] = useState(['']);
    const [currentQuoteWord, setCurrentWord] = useState('');
    const [currentUserWord, setCurrentUserWord] = useState('');

    useEffect(() => {
        setCurrentWord(quote.getFirstWord());
        setCurrentUserWord('');
        if (quote.length) {
            setAllUserWords(new Array(quote.length - 1).fill(''));
        }
    }, [quote]);

    // Variables to return
    const updateUserWord = (word: string) => {
        setAllUserWords((prevState) => {
            const newUserWords = [...prevState];
            newUserWords[quote.getCurrentIndex()] = word;
            return newUserWords;
        });
    };

    const nextWord = () => {
        setCurrentWord(quote.getNextWord());
        setCurrentUserWord('');
    };

    const prevWord = () => {
        if (!quote.hasPrevWord()) return;
        setCurrentUserWord(allUserWords[quote.getCurrentIndex() - 1]);
        setCurrentWord(quote.getPrevWord());
    };

    return {
        currentQuoteWord,
        currentUserWord,
        allUserWords,
        updateUserWord,
        nextWord,
        prevWord,
    };
};

export default useWordMethods;
