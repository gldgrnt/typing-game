import { useState } from 'react';
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

    // Programmatically create functions
    const setView = registeredViews.reduce((acc, view) => {
        return {
            ...acc,
            [`to${view.name}View`]: () => setCurrentView(view.name),
        };
    }, {});

    const checkView = registeredViews.reduce((acc, view) => {
        return {
            ...acc,
            [`is${view.name}View`]: () => currentView === view.name,
        };
    }, {});

    const ViewComponent = registeredViews.filter(
        (view) => view.name === currentView
    )[0].component;

    return { ViewComponent, setView, checkView };
};
