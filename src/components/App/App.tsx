import { ViewContextProvider } from './_state/ViewState';
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
