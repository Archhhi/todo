import {AxiosResponse} from 'axios';
import $api from "../../common/api";
import {TodoCreateData, TodoRawData, TodoResponse} from "./types";

export default class TodoApi {
  static async get(userId: any): Promise<AxiosResponse<TodoResponse>> {
    return $api.get<TodoResponse>(
      `/todos?userId=${userId}`
    )
  };

  static async getOne(
    id: TodoRawData['id']
  ): Promise<AxiosResponse<TodoRawData>> {
    return $api.get<TodoRawData>(`/todos/${id}/`);
  }

  static async create(
    data: TodoCreateData
  ): Promise<AxiosResponse<TodoRawData>> {
    return $api.post('/todos', data);
  }

  static async edit(data: TodoRawData): Promise<AxiosResponse<TodoRawData>> {
    return $api.put(`/todos/${data.id}/`, data);
  }

  static async delete(
    id: TodoRawData['id']
  ): Promise<AxiosResponse<TodoRawData>> {
    return $api.delete<TodoRawData>(`/todos/${id}/`);
  }
}