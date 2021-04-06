import { GameContext, QuoteContext } from './_contexts';
import { TGameState } from './_contexts/GameContext/_types';
import { useGetQuote } from './_hooks/useGetQuote/useGetQuote';

export const Quote: React.FC = () => {
    const gameContext = GameContext.useGameContext();
    const quoteContext = QuoteContext.useQuoteContext();
    const getQuote = useGetQuote();

    const quoteText = quoteContext.state.text;

    return (
        <div>
            {gameContext.state === TGameState.LOADING ? (
                <h2>Loading</h2>
            ) : (
                <h2>{quoteText || 'Get a new quote!'}</h2>
            )}
            <button onClick={getQuote}>Get quote</button>
        </div>
    );
};
