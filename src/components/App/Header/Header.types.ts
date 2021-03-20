import { TCheckView, TSetView } from 'components/App/hooks/useCurrentView';

interface IProps {
    setView: TSetView;
    checkView: TCheckView;
}

export type THeader = React.FC<IProps>;
