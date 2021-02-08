export interface IReturn {
    currentQuoteWord: string;
    currentUserWord: string;
    allUserWords: string[];
    updateUserWord: (word: string) => void;
    nextWord: () => void;
    prevWord: () => void;
}
