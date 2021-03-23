import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
// Local
import { ViewContextProvider } from './_state/ViewState';

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
