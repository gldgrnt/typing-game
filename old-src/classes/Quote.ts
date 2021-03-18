export class Quote {
    readonly author: string;
    readonly length: number;
    readonly words: string[];
    private currentIndex = 0;
    private isFinished = false;

    constructor(author = '', text = '') {
        this.author = author;
        this.words = text.split(' ');
        this.length = text.length;
    }

    getCurrentIndex(): number {
        return this.currentIndex;
    }

    getWord(index: number): string {
        return this.words[index];
    }

    getFirstWord(): string {
        if (this.length === 0) {
            return '';
        }

        return this.getWord(0);
    }

    hasNextWord(): boolean {
        return !!this.words[this.currentIndex + 1];
    }

    hasPrevWord(): boolean {
        return !!this.words[this.currentIndex - 1];
    }

    getNextWord(): string {
        this.currentIndex === this.length
            ? this.length
            : (this.currentIndex += 1);
        return this.getWord(this.currentIndex);
    }

    getPrevWord(): string {
        this.currentIndex === 0 ? 0 : (this.currentIndex -= 1);
        return this.getWord(this.currentIndex);
    }

    finishQuote(): void {
        this.isFinished = true;
    }

    getFinishedStatus(): boolean {
        return this.isFinished;
    }

    toString(): string {
        return this.words.join(' ');
    }
}
