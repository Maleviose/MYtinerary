import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import './assets/css/index.css';
import { createStore } from 'redux'
import mi_reducer from './context/reducers/mi_reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const mi_store = createStore(mi_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    // aca envuelvo el app en provider para crear el store en redux
    <Provider store={ mi_store }>
    <App />
    </Provider>,
    document.getElementById('root')
);