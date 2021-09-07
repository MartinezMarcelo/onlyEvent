import {combineReducers} from 'redux';
import home from '../home/reducer';
import nav from '../Nav/reducer';

export const IndexReducer = combineReducers({
    home,
    nav

});