import {TodoCreateData, TodoRawData, TodoResponse} from "../types";

const actionType = 'todoActionTypes';

export const LOAD_TODOS_START = `${actionType}/LOAD_TODOS_START`;

export interface loadTodosStartAction {
  type: typeof LOAD_TODOS_START;
  userId: number;
}

export const LOAD_TODOS_SUCCESS = `${actionType}/LOAD_TODOS_SUCCESS`;

export interface loadTodosSuccessAction {
  type: typeof LOAD_TODOS_SUCCESS;
  todos: TodoResponse;
}

export const LOAD_TODO_START = `${actionType}/LOAD_TODO_START`;

export interface loadTodoStartAction {
  type: typeof LOAD_TODO_START;
  id: TodoRawData['id'];
}

export const LOAD_TODO_SUCCESS = `${actionType}/LOAD_TODO_SUCCESS`;

export interface loadTodoSuccessAction {
  type: typeof LOAD_TODO_SUCCESS;
  todo: TodoRawData;
}

export const CREATE_TODO_START = `${actionType}/CREATE_TODO_START`;

export interface createTodoStartAction {
  type: typeof CREATE_TODO_START;
  todo: TodoCreateData;
}

export const CREATE_TODO_SUCCESS = `${actionType}/CREATE_TODO_SUCCESS`;

export interface createTodoSuccessAction {
  type: typeof CREATE_TODO_SUCCESS;
  id: TodoRawData['id'];
}

export const EDIT_TODO_START = `${actionType}/EDIT_TODO_START`;

export interface editTodoStartAction {
  type: typeof EDIT_TODO_START;
  todo: TodoRawData;
}

export const EDIT_TODO_SUCCESS = `${actionType}/EDIT_TODO_SUCCESS`;

export interface editTodoSuccessAction {
  type: typeof EDIT_TODO_SUCCESS;
  todo: TodoRawData;
}

export const DELETE_TODO_START = `${actionType}/DELETE_TODO_START`;

export interface deleteTodoStartAction {
  type: typeof DELETE_TODO_START;
  id: TodoRawData['id'];
}

export const DELETE_TODO_SUCCESS = `${actionType}/DELETE_TODO_SUCCESS`;

export interface deleteTodoSuccessAction {
  type: typeof DELETE_TODO_SUCCESS;
  id: TodoRawData['id'];
}

export const TODO_ERROR = `${actionType}/TODO_ERROR`;

export interface todoErrorAction {
  type: typeof TODO_ERROR;
  error: Error | string;
}

export const CLEAR_TODO_DATA = `${actionType}/CLEAR_TODO_DATA`;

export interface clearTodoDataAction {
  type: typeof CLEAR_TODO_DATA;
}

export type TodoAction = loadTodosStartAction &
  loadTodosSuccessAction &
  loadTodoStartAction &
  loadTodoSuccessAction &
  createTodoStartAction &
  createTodoSuccessAction &
  editTodoStartAction &
  editTodoSuccessAction &
  deleteTodoStartAction &
  deleteTodoSuccessAction &
  todoErrorAction &
  clearTodoDataAction;