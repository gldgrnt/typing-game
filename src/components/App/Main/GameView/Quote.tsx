import { QuoteContext } from './_contexts';

export const Quote: React.FC = () => {
    const quoteContext = QuoteContext.useQuoteContext();
    const quoteText = quoteContext.state.text;

    return (
        <div>
            <h2>{quoteText || 'Get a new quote!'}</h2>
        </div>
    );
};
