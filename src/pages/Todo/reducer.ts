import {TodosState} from "./types";
import * as todoActionTypes from './actions/actionTypes';

const initialState: TodosState = {
  loading: false,
  error: '',
  todo: null,
  todos: [],
  total: 200,
  userId: 1
}

export const todoReducer = (
  state: TodosState = initialState,
  action: todoActionTypes.TodoAction
): TodosState => {
  switch (action.type) {
    case todoActionTypes.LOAD_TODOS_START:
    case todoActionTypes.LOAD_TODO_START:
    case todoActionTypes.CREATE_TODO_START:
    case todoActionTypes.EDIT_TODO_START:
    case todoActionTypes.DELETE_TODO_START:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case todoActionTypes.TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    case todoActionTypes.LOAD_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: action.todos
      };
    }
    case todoActionTypes.LOAD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todo: action.todo
      };
    }
    case todoActionTypes.CREATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: ''
      };
    }
    case todoActionTypes.EDIT_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: ''
      };
    }
    case todoActionTypes.DELETE_TODO_SUCCESS:
    case todoActionTypes.CLEAR_TODO_DATA: {
      return {
        ...state,
        todo: initialState.todo,
        loading: false,
        error: ''
      };
    }
    default:
      return state;
  }
}