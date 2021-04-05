export type TUseGetQuote = () => {
    quote: {
        text: string;
        author: string;
    };
    getQuote: () => void;
};
