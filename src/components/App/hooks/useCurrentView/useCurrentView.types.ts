import React from 'react';

export type TuseCurrentView = () => {
    ViewComponent: React.FC;
    setView: {
        [key: string]: () => void;
    };
    checkView: {
        [key: string]: () => boolean;
    };
};
