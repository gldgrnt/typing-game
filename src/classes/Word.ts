export enum WORD_STATUS {
    COMPLETED,
    CURRENT,
    INCOMPLETE,
}

export class Word {
    static getStatus(wordIndex: number, currentIndex: number): WORD_STATUS {
        if (wordIndex < currentIndex) {
            return WORD_STATUS.COMPLETED;
        } else if (wordIndex > currentIndex) {
            return WORD_STATUS.INCOMPLETE;
        } else {
            return WORD_STATUS.CURRENT;
        }
    }

    static isEqual(word: string, correctWord: string): boolean {
        if (word.length !== correctWord.length) return false;
        return word === correctWord;
    }

    static isEqualSoFar(word: string, correctWord: string): boolean {
        if (word.length >= correctWord.length)
            return this.isEqual(word, correctWord);
        return word === correctWord.substr(0, word.length);
    }

    static getColor(wordA: string, wordB: string, status: WORD_STATUS): string {
        const { COMPLETED, CURRENT, INCOMPLETE } = WORD_STATUS;
        // + changes enum to number
        switch (+status) {
            case INCOMPLETE:
                return 'black';

            case CURRENT:
                return this.isEqualSoFar(wordA, wordB) ? 'orange' : 'red';

            case COMPLETED:
                return this.isEqual(wordA, wordB) ? 'green' : 'red';

            default:
                return 'black';
        }
    }
}
