import { useQuoteContext } from 'state/quoteState';

const TypingText: React.FC = () => {
    const [quoteState, quoteActions] = useQuoteContext();
    const currentQuote = quoteState?.current;

    const handleClick = () => {
        if (quoteActions && quoteState?.isLoading === false)
            return quoteActions.getQuote();
    };

    const quote =
        currentQuote?.content?.toString() || 'Hello, press the button to go';

    return (
        <div>
            <h3>{quote}</h3>
            <button onClick={handleClick}>Get new quote</button>
            {quoteState?.isLoading && <p>Loading...</p>}
        </div>
    );
};

export default TypingText;
