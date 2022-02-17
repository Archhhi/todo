import * as todoActionTypes from './actionTypes';
import {TodoCreateData, TodoRawData, TodoResponse} from "../types";

export const loadTodosStart = (
  userId: number
): todoActionTypes.loadTodosStartAction => ({
  type: todoActionTypes.LOAD_TODOS_START,
  userId
});

export const loadTodosSuccess = (
  todos: TodoResponse
): todoActionTypes.loadTodosSuccessAction => ({
  type: todoActionTypes.LOAD_TODOS_SUCCESS,
  todos
});

export const loadTodoStart = (
  id: TodoRawData['id']
): todoActionTypes.loadTodoStartAction => ({
  type: todoActionTypes.LOAD_TODO_START,
  id
});

export const loadTodoSuccess = (
  todo: TodoRawData
): todoActionTypes.loadTodoSuccessAction => ({
  type: todoActionTypes.LOAD_TODO_SUCCESS,
  todo
});

export const createTodoStart = (
  todo: TodoCreateData
): todoActionTypes.createTodoStartAction => ({
  type: todoActionTypes.CREATE_TODO_START,
  todo
});

export const createTodoSuccess = (
  id: TodoRawData['id']
): todoActionTypes.createTodoSuccessAction => ({
  type: todoActionTypes.CREATE_TODO_SUCCESS,
  id
});

export const editTodoStart = (
  todo: TodoRawData
): todoActionTypes.editTodoStartAction => ({
  type: todoActionTypes.EDIT_TODO_START,
  todo
});

export const editTodoSuccess = (
  todo: TodoRawData
): todoActionTypes.createTodoStartAction => ({
  type: todoActionTypes.EDIT_TODO_SUCCESS,
  todo
});

export const deleteTodoStart = (
  id: TodoRawData['id']
): todoActionTypes.deleteTodoStartAction => ({
  type: todoActionTypes.DELETE_TODO_START,
  id
});

export const deleteTodoSuccess = (
  id: TodoRawData['id']
): todoActionTypes.deleteTodoStartAction => ({
  type: todoActionTypes.DELETE_TODO_SUCCESS,
  id
});

export const todoError = (
  error: Error | string
): todoActionTypes.todoErrorAction => ({
  type: todoActionTypes.TODO_ERROR,
  error
})

export const clearTodoData = (): todoActionTypes.clearTodoDataAction => ({
  type: todoActionTypes.CLEAR_TODO_DATA
});