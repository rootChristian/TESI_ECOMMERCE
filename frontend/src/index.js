/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './styles/index.scss';
//import './index.css';
//import '../bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getCategories } from './actions/CategoriesActions';
import { getProducts } from './actions/ProductsActions';
// dev tools
import { composeWithDevTools } from 'redux-devtools-extension';


//import logger from 'redux-logger';

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) //, logger))
)

store.dispatch(getCategories());
store.dispatch(getProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
