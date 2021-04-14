import { useGetQuote } from './_hooks';

export const GetQuoteButton = (): JSX.Element => {
    const getQuote = useGetQuote();

    return <button onClick={getQuote}>Get new quote</button>;
};
