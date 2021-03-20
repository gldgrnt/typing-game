import React from 'react';
import { VIEWS } from './useCurrentview';

export type TSetView = (VIEW: VIEWS) => () => void;
export type TCheckView = (VIEW: VIEWS) => boolean;

export type TuseCurrentView = () => {
    ViewComponent: React.FC;
    setView: TSetView;
    checkView: TCheckView;
};
