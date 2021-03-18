export interface IProps {
    currentUserWord: string;
    updateUserWord: (word: string) => void;
    nextWord: () => void;
    prevWord: () => void;
}
