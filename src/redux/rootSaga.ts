import {all} from 'redux-saga/effects';
import {todoSaga} from "../pages/Todo/sagas";

export function* rootSaga() {
  yield all([
    todoSaga()
  ])
}