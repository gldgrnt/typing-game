import { TQuoteApiDataQuote } from 'services';
import { Text } from './Text';

export class Quote {
    author: string;
    text: Text;
    length: number;

    constructor(apiQuote?: TQuoteApiDataQuote) {
        const { author, text } = apiQuote || this._defaultApiQuote();
        this.author = author;
        this.text = new Text(text);
        this.length = text.length;
    }

    private _defaultApiQuote(): TQuoteApiDataQuote {
        return {
            author: '',
            text: '',
        };
    }
}
