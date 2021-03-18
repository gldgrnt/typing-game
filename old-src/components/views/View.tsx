import { useGlobalContext, TGlobalContext } from 'state/globalState';
import { Game } from './Game';
import { History } from './History';

export const View: React.FC = () => {
    const [
        globalState,
        globalStateActions,
    ] = useGlobalContext() as TGlobalContext;
    const CurrentView = globalState.view;

    return (
        <main>
            <button
                onClick={() => globalStateActions.setView(History)}
                disabled={CurrentView === History}
            >
                History
            </button>
            <button
                onClick={() => globalStateActions.setView(Game)}
                disabled={CurrentView === Game}
            >
                Game
            </button>
            <CurrentView />
        </main>
    );
};
