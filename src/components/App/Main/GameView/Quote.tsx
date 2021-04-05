import { useGameContext } from './_state/GameState';
import { useGetQuote } from './_hooks/useGetQuote';

export const Quote: React.FC = () => {
    const { state } = useGameContext();
    const getQuote = useGetQuote();

    return (
        <div>
            <h2>This is a quote</h2>
            <p>{state}</p>
            <button onClick={getQuote}>Get quote</button>
        </div>
    );
};
