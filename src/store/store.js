import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import chat from './chat/reducers';

const rootReducer = combineReducers({
    chat
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );
};

export default configureStore;
