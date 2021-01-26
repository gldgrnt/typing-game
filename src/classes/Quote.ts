import { TQuoteApiDataQuote } from 'services';
import { Text } from './Text';

export class Quote {
    author: string;
    content: Text | string;
    length: number;

    constructor(apiQuote: TQuoteApiDataQuote) {
        const { author, text } = apiQuote;
        this.author = author;
        this.content = new Text(text);
        this.length = text.length;
    }
}
