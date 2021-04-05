import { useGameContext } from './_contexts/GameContext';
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
