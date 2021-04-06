import { ProviderComposer } from 'components/shared';
import { GameContext, QuoteContext } from './_contexts';
const { GameContextProvider } = GameContext;
const { QuoteContextProvider } = QuoteContext;
import { Quote } from './Quote';
import { Input } from './Input';

export const GameView: React.FC = () => {
    return (
        <ProviderComposer
            contextProviders={[GameContextProvider, QuoteContextProvider]}
        >
            <h1>This is the Game view</h1>
            <Quote />
            <Input />
        </ProviderComposer>
    );
};

/*
Comoponents:
    -> Quote
    -> Input
    -> History sidebar
*/
