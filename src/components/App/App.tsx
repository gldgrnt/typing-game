import { ViewContextProvider } from './_contexts/ViewContext';
// Components
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const App: React.FC = () => {
    return (
        <div className="App">
            <ViewContextProvider>
                <Header />
                <Main />
            </ViewContextProvider>
            <Footer />
        </div>
    );
};
