import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { chatReducer } from './store/chat/reducers';
import { data } from './store/data'

const initialState = data;
const store = createStore(
    chatReducer,
    initialState,
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
