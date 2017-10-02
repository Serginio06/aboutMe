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

const basePath = process.env.NODE_ENV === "development" ? './':'./build/';

const store = createStore (reducers, applyMiddleware (thunk));
console.log('process.env= ', process.env);
console.log('process.env.REACT_APP_IMG_PATH= ', process.env.REACT_APP_IMG_PATH);

ReactDOM.render (
    <Provider store={store}>
        <App basePath={basePath}/>
    </Provider>, document.getElementById ('root'));
// registerServiceWorker();
