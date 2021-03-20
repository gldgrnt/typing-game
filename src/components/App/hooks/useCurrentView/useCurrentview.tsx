import { useState, useCallback } from 'react';
import * as ViewComponents from 'components/views';
import { TuseCurrentView } from './useCurrentView.types';

export enum VIEWS {
    GAME_VIEW,
    HISTORY_VIEW,
}

export const useCurrentView: TuseCurrentView = () => {
    const [currentView, setCurrentView] = useState(VIEWS.GAME_VIEW);

    // Helper functions
    const setView = useCallback(
        // Return a function to setView can be placed directly into an onClick={} handler
        (VIEW: VIEWS) => () => setCurrentView(VIEW),
        [setCurrentView]
    );

    const checkView = (VIEW: VIEWS) => currentView === VIEW;

    const ViewComponent = (() => {
        switch (currentView) {
            case VIEWS.GAME_VIEW:
                return ViewComponents.GameView;

            case VIEWS.HISTORY_VIEW:
                return ViewComponents.HistoryView;
        }
    })();

    return { ViewComponent, setView, checkView };
};
