import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { ReducerCart } from './reducer/ReducerCart';
import { ReducerProduct } from './reducer/ReducerProduct';

export const myReducers = combineReducers({
    ReducerCart,
    ReducerProduct
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    myReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;