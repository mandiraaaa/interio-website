import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from './categories';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) { }

  GetAllCategory(): Observable<any>{
    return this.httpClient.get(`${this.url}/categories/`);
  }
  
  DeleteCategory(_id:string): Observable<Categories>{
    return this.httpClient.delete(`${this.url}/categories/${_id}`);
  }

  EditCategory(_id:string, value: any): Observable<Object>{
    return this.httpClient.put(`${this.url}/categories/${_id}`, value);
  }
  
  CreateNewCategory(data:any): Observable<any>{
    return this.httpClient.post(`${this.url}/categories/`, data);
  }
  
  GetSingleCategory(_id: string, value:any): Observable<Object>{
    return this.httpClient.get(`${this.url}/categories/${_id}`);
  }
}
