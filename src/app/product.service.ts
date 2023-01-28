import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) { }

GetProduct(){
  return this.httpClient.get(`${this.url}/products/`);
}
DeleProduct(){
  return this.httpClient.delete(`${this.url}/products/:id`);
}
}
