import { useState, useMemo } from 'react';
import * as Views from 'components/views';
import { TuseCurrentView } from './useCurrentView.types';

// Register all views
const registeredViews = [
    {
        component: Views.GameView,
        name: 'Game',
    },
    {
        component: Views.HistoryView,
        name: 'History',
    },
];

// Choose initial view
const intialView = registeredViews[0].name;

export const useCurrentView: TuseCurrentView = () => {
    const [currentView, setCurrentView] = useState(intialView);

    // Memoize setView as the object will always be the same
    const setView = useMemo(
        () =>
            registeredViews.reduce((actions, view) => {
                return {
                    ...actions,
                    [`to${view.name}View`]: () => setCurrentView(view.name),
                };
            }, {}),
        [registeredViews, setCurrentView]
    );

    const checkView = registeredViews.reduce((actions, view) => {
        return {
            ...actions,
            [`is${view.name}View`]: () => currentView === view.name,
        };
    }, {});

    const ViewComponent = registeredViews.filter(
        (view) => view.name === currentView
    )[0].component;

    return { ViewComponent, setView, checkView };
};
