import { useCurrentView } from './hooks/useCurrentView';
import { Header } from './Header';

export const App: React.FC = () => {
    const { ViewComponent, setView, checkView } = useCurrentView();

    return (
        <div className="App">
            <Header setView={setView} checkView={checkView} />
            <ViewComponent />
        </div>
    );
};
