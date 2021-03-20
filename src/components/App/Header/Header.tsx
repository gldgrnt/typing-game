import { VIEWS } from 'components/App/hooks/useCurrentView';
import { THeader } from './Header.types';

export const Header: THeader = ({ setView, checkView }) => {
    return (
        <header>
            <button
                disabled={checkView(VIEWS.GAME_VIEW)}
                onClick={setView(VIEWS.GAME_VIEW)}
            >
                Game
            </button>
            <button
                disabled={checkView(VIEWS.HISTORY_VIEW)}
                onClick={setView(VIEWS.HISTORY_VIEW)}
            >
                History
            </button>
        </header>
    );
};
