import React from 'react';
import ReactDom from 'react-dom'
import App from './components/App';
import { ContextProvider } from './components/ContextProvider';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDom.render(
    <ContextProvider>
        <Router>
            <App/>
        </Router>
    </ContextProvider>,
    document.getElementById('root')
)