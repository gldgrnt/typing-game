import { ProviderComposer } from 'components/shared';
import { GameContext, QuoteContext } from './_contexts';
const { GameContextProvider, useGameContext, GAME_STATE } = GameContext;
const { QuoteContextProvider } = QuoteContext;

import { Quote } from './Quote';
import { Input } from './Input';
import { GetQuoteButton } from './GetQuoteButton';

const contexts = [GameContextProvider, QuoteContextProvider];

export const GameViewInner: React.FC = () => {
    const gameState = useGameContext().state;
    // call useGetQuote here to preserve the state

    // Helper booleans
    const isLoadingQuote = gameState === GAME_STATE.LOADING;

    return (
        <>
            <h1>This is the Game view</h1>
            {isLoadingQuote ? (
                <h2>Loading</h2>
            ) : (
                <div>
                    <GetQuoteButton />
                </div>
            )}
            <Quote />
            <Input />
            <p>{gameState}</p>
        </>
    );
};

export const GameView: React.FC = () => (
    <ProviderComposer contextProviders={contexts}>
        <GameViewInner />
    </ProviderComposer>
);

/*
Comoponents:
    -> Quote
    -> Input
    -> History sidebar
*/
