import { all } from 'redux-saga/effects';

import userSaga from './../Login/Saga';

export default function* rootSagas(){
    yield all([
        userSaga()
    ]);
}