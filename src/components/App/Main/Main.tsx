import { useViewContext } from 'components/App/_state/ViewState';

export const Main: React.FC = () => {
    const [ViewState] = useViewContext();
    const ActiveView = ViewState.activeView;

    return (
        <main>
            <ActiveView />
        </main>
    );
};
