import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from './categories';
import { Observable } from 'rxjs';
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
}
