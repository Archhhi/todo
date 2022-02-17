export interface TodoRawData {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type TodoResponse = TodoRawData[];

export interface TodosState {
  loading: boolean;
  error: Error | string;
  todo: TodoRawData | null;
  todos: TodoResponse;
  total: number | null,
  userId: number
}

export interface TodoCreateData {
  userId: number;
  title: string;
  completed: boolean;
}