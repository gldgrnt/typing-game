import { Quote } from 'classes';

export interface IReturn {
    currentQuote: Quote;
    newQuote: () => void;
    isLoading: boolean;
}
