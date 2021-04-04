import { GameContextProvider } from './_state/GameState';

export const GameView: React.FC = () => {
    return (
        <GameContextProvider>
            <h1>This is the Game view</h1>
        </GameContextProvider>
    );
};
