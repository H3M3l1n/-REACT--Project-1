import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from './components/localeprovider/LocaleProvider';
import ScrollToTop from './scrolltotop/ScrollToTop';
import App from './App';
import './index.sass';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', function () {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter basename="/-REACT--Project-1">
                    <LocaleProvider>
                        <ScrollToTop />
                        <App />
                    </LocaleProvider>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );

    const preLoader = document.getElementById('pre-loader');
    preLoader.style.opacity = 0;
    preLoader.style.display = 'none';
});
