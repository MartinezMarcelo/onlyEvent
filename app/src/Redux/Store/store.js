import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
 
import {IndexReducer} from './reducers';
import {IndexSagas} from './sagas';
 
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
 
const store = createStore(IndexReducer, applyMiddleware(...middlewares));
 
sagaMiddleware.run(IndexSagas);
 
export {store};