import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as todoAction from './actions';
import * as todoActionTypes from './actions/actionTypes';
import {TodoRawData, TodoResponse} from "./types";
import TodoApi from "./todoApi";

function* loadTodosSaga({userId}: todoActionTypes.loadTodosStartAction) {
  try {
    const {data}: AxiosResponse<TodoResponse> = yield call(
      TodoApi.get,
      userId
    );
    yield put(todoAction.loadTodosSuccess(data));
  } catch ({message}) {
    yield put(todoAction.todoError(String(message)));
  }
}

function* loadTodoSaga({ id }: todoActionTypes.loadTodoStartAction) {
  try {
    const { data }: AxiosResponse<TodoRawData> = yield call(TodoApi.getOne, id);
    yield put(todoAction.loadTodoSuccess(data));
  } catch ({ message }) {
    yield put(todoAction.todoError(String(message)));
  }
}

function* createTodoSaga({ todo }: todoActionTypes.createTodoStartAction) {
  try {
    const { data } = yield call(TodoApi.create, todo);
    yield put(todoAction.createTodoSuccess(data));
  } catch ({ message }) {
    yield put(todoAction.todoError(String(message)));
  }
}

function* editTodoSaga({ todo }: todoActionTypes.editTodoStartAction) {
  try {
    const { data } = yield call(TodoApi.edit, todo);
    yield put(todoAction.editTodoSuccess(data));
  } catch ({ message }) {
    yield put(todoAction.todoError(String(message)));
  }
}

function* deleteTodoSaga({ id }: todoActionTypes.deleteTodoStartAction) {
  try {
    const { data } = yield call(TodoApi.delete, id);
    yield put(todoAction.deleteTodoSuccess(data));
  } catch ({ message }) {
    yield put(todoAction.todoError(String(message)));
  }
}

export function* todoSaga() {
  yield takeEvery(todoActionTypes.LOAD_TODOS_START, loadTodosSaga);
  yield takeEvery(todoActionTypes.LOAD_TODO_START, loadTodoSaga);
  yield takeEvery(todoActionTypes.CREATE_TODO_START, createTodoSaga);
  yield takeEvery(todoActionTypes.EDIT_TODO_START, editTodoSaga);
  yield takeEvery(todoActionTypes.DELETE_TODO_START, deleteTodoSaga);
}