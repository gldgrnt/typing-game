import { GameContext, QuoteContext } from './_contexts';
import { useGetQuote } from './_hooks/useGetQuote/useGetQuote';

export const Quote: React.FC = () => {
    const gameContext = GameContext.useGameContext();
    const quoteContext = QuoteContext.useQuoteContext();
    const getQuote = useGetQuote();

    return (
        <div>
            <h2>{quoteContext.state.text || 'Get a new quote!'}</h2>
            <p>{gameContext.state}</p>
            <button onClick={getQuote}>Get quote</button>
        </div>
    );
};
