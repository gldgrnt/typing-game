import { GlobalContextProvider } from 'state/globalState';
import { View } from 'components/views';

const App: React.FC = () => {
    return (
        <GlobalContextProvider>
            <div className="App">
                <View />
            </div>
        </GlobalContextProvider>
    );
};

export default App;
