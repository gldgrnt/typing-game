import { useViewContext } from 'components/App/_state/ViewState';

export const Header: React.FC = () => {
    const { state, actions } = useViewContext();

    return (
        <header>
            <button
                onClick={actions.setToGameView}
                disabled={state.isActiveView.GameView}
            >
                Game
            </button>
            <button
                onClick={actions.setToHistoryView}
                disabled={state.isActiveView.HistoryView}
            >
                History
            </button>
        </header>
    );
};
