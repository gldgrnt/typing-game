import { useViewContext } from 'components/App/_contexts/ViewContext';

export const Main: React.FC = () => {
    const { state } = useViewContext();
    const ActiveView = state.activeView;

    return (
        <main>
            <ActiveView />
        </main>
    );
};
