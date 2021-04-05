import { GameContextProvider } from './_state/GameState';
import { Quote } from './Quote';

export const GameView: React.FC = () => {
    return (
        <GameContextProvider>
            <h1>This is the Game view</h1>
            <Quote />
        </GameContextProvider>
    );
};

/*
Comoponents:
    -> Timer
        -> reset: NOT_STARTED
        -> start: STARTED
    -> Quote
    -> Input
    -> History sidebar
*/
