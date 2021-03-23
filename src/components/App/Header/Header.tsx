import { TViewContext, useViewContext } from 'components/App/_state/ViewState';

export const Header: React.FC = () => {
    const [{ isActiveView }, actions] = useViewContext() as TViewContext;

    return (
        <header>
            <button
                onClick={actions.setToGameView}
                disabled={isActiveView.GameView}
            >
                Game
            </button>
            <button
                onClick={actions.setToHistoryView}
                disabled={isActiveView.HistoryView}
            >
                History
            </button>
        </header>
    );
};
