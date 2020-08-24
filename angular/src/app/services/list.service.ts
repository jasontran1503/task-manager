import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataResponse } from '../shared/models/data-response';
import { map } from 'rxjs/operators';

const url = 'http://localhost:3000/api/list';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http: HttpClient) { }

  getAllLists(): Observable<DataResponse> {
    return this.http.get<DataResponse>(url);
  }

  getListItemDetail(listItemId: string): Observable<DataResponse> {
    const params = {
      listId: listItemId
    };
    return this.http.get<DataResponse>(url + '/detail', { params })
      .pipe(map(res => res.data[0]));
  }

  deleteList(listItemId: string): Observable<DataResponse> {
    const params = {
      listId: listItemId
    };
    return this.http.delete<DataResponse>(url, { params });
  }

  addList(listName: string): Observable<DataResponse> {
    const body = { listName };
    return this.http.post<DataResponse>(url, body);
  }

}
