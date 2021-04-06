import { ProviderComposer } from 'components/shared';
import { GameContext, QuoteContext } from './_contexts';
const { GameContextProvider } = GameContext;
const { QuoteContextProvider } = QuoteContext;
import { Quote } from './Quote';

export const GameView: React.FC = () => {
    return (
        <ProviderComposer
            contextProviders={[GameContextProvider, QuoteContextProvider]}
        >
            <h1>This is the Game view</h1>
            <Quote />
        </ProviderComposer>
    );
};

/*
Comoponents:
    -> Quote
    -> Input
    -> History sidebar
*/
