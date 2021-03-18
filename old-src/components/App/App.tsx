// State
import { ProviderComposer } from 'components/shared';
import { GlobalContextProvider } from 'state/globalState';
import { QuoteContextProvider } from 'state/quoteState';
// Components
import { View } from 'components/views';

const App: React.FC = () => {
    const providers = [GlobalContextProvider, QuoteContextProvider];

    return (
        <ProviderComposer contextProviders={providers}>
            <div className="App">
                <View />
            </div>
        </ProviderComposer>
    );
};

export default App;
