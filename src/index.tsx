import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { reportWebVitals } from 'services';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
