import { GameContextProvider } from './_contexts/GameContext';
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
