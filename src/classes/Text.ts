import { Word } from './Word';

export class Text {
    words: Word[];
    metaDate: number;

    constructor(string: string) {
        this.words = this._createWords(string);
        this.metaDate = Date.now();
        return this;
    }

    private _createWords(string: string): Word[] {
        const words = string.split(' ');
        return words.map((word) => new Word(word));
    }

    toString(): string {
        return this.words.map((w) => w.word).join(' ');
    }
}
