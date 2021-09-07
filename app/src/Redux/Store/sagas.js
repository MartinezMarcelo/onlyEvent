import {all, fork} from 'redux-saga/effects';
import homeSagas from '../home/sagas';

export function * IndexSagas() {
    yield all([
        fork(homeSagas),
    ])
}