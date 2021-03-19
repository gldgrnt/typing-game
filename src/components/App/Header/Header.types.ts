import React from 'react';

interface IProps {
    setView: {
        [key: string]: () => void;
    };
    checkView: {
        [key: string]: () => boolean;
    };
}

export type THeader = React.FC<IProps>;
