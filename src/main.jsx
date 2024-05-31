import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx'
import './index.css'
import './assets/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
