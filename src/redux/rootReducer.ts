import {combineReducers} from "redux";
import {todoReducer} from "../pages/Todo/reducer";

export const rootReducer = combineReducers({
  todo: todoReducer
})

export type RootStateType = ReturnType<typeof rootReducer>;