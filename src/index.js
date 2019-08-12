import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './redux/reducers';
import reduxThunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import {DEBUG} from './helpers/settings';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './assets/css/react-redux-toastr-rtl.css';
import './assets/css/developer_additional.css';

// Redux devtools
let composeEnhancers = compose;
if (DEBUG) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// Redux store and middleware
const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(reduxThunk))
);

// Render App
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
            />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
