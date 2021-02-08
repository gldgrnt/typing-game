export class Word {
    word;
    userInput = '';

    constructor(word: string) {
        this.word = word;
    }

    static compare(a: string, b: string): boolean {
        return a === b;
    }
}
