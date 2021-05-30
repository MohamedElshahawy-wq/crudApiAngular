import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from 'src/app/ViewModels/iuser';

@Injectable({
  providedIn: 'root',
})
export class GetUsersApiService {
  private apiServer = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAllMyUsers(): Observable<IUser[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      }),
    };

    return this.http.get<IUser[]>(`${this.apiServer}`, httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiServer, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${this.apiServer}/${id}`, data);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiServer}/${id}`);
  }

  searchByName(name: any): Observable<any> {
    return this.http.get(`${this.apiServer}?name=${name}`);
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${this.apiServer}/${id}`);
  }
}
