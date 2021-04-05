import { useGameContext } from './_contexts/GameContext';
import { useGetQuote } from './_hooks/useGetQuote/useGetQuote';

export const Quote: React.FC = () => {
    const { state } = useGameContext();
    const { quote, getQuote } = useGetQuote();

    return (
        <div>
            <h2>{quote.text || 'Get a new quote!'}</h2>
            <p>{state}</p>
            <button onClick={getQuote}>Get quote</button>
        </div>
    );
};
