import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataResponse } from '../shared/models/data-response';

const url = 'http://localhost:3000/api/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasksByListId(listId: string) {
    const params = { listId };
    return this.http.get<DataResponse>(url, { params });
  }

  addTask(listId: string, taskName: string): Observable<DataResponse> {
    const body = { listId, taskName };
    return this.http.post<DataResponse>(url, body);
  }

  updateTask(taskId: string, taskName: string) {
    const params = { taskId };
    const body = { taskName };
    return this.http.put<DataResponse>(url, body, { params });
  }

  deleteTask(listId: string, taskId: string): Observable<DataResponse> {
    const params = { listId, taskId };
    return this.http.delete<DataResponse>(url, { params });
  }

}
