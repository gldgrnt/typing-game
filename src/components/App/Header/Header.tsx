import { THeader } from './Header.types';

export const Header: THeader = ({ setView, checkView }) => {
    return (
        <header>
            <button
                disabled={checkView.isGameView()}
                onClick={setView.toGameView}
            >
                Game
            </button>
            <button
                disabled={checkView.isHistoryView()}
                onClick={setView.toHistoryView}
            >
                History
            </button>
        </header>
    );
};
