import { TViewContext, useViewContext } from 'components/App/_state/ViewState';

export const Main: React.FC = () => {
    const [ViewState] = useViewContext() as TViewContext;
    const ActiveView = ViewState.activeView;

    return (
        <main>
            <ActiveView />
        </main>
    );
};
