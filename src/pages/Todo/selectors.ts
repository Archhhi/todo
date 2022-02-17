import {RootStateType} from "../../redux/rootReducer";
import {TodoRawData, TodoResponse} from "./types";

export const getTodo = ({
                          todo: {todo}
                        }: RootStateType): TodoRawData | null => todo;
export const getTodos = ({
                           todo: {todos}
                         }: RootStateType): TodoResponse => todos;
export const getTodoLoading = ({todo: {loading}}: RootStateType) =>
  loading;
export const getTodoTotal = ({todo: {total}}: RootStateType) =>
  total;
export const getTodoUserId = ({todo: {userId}}: RootStateType) =>
  userId;