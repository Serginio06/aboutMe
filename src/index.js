import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './all.css';
import App from './containers/App';
import reducers from './redux/reduxConfig'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore (reducers, applyMiddleware (thunk));

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById ('root'));
// registerServiceWorker();
