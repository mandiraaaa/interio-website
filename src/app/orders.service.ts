import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from './orders';
import { Route } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private url = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) { }
  
  GetAllOrder():Observable<any>{
    return this.httpClient.get(`${this.url}/orders/`);
  }

  DeleteOrder(_id:string): Observable<any>{
    return this.httpClient.delete(`${this.url}/orders/${_id}`);
  }

  CreateNewOrder(data:any): Observable<any>{
    return this.httpClient.post(`${this.url}/orders/`, data);
  }
}
