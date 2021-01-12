import React from 'react';
import ReactDom from 'react-dom'
import App from './components/App';
import { ContextProvider } from './components/ContextProvider';

ReactDom.render(
    <ContextProvider>
        <App/>
    </ContextProvider>,
    document.getElementById('root')
)