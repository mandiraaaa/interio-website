import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) { }

GetProduct(){
  return this.httpClient.get(`${this.url}/products/`);
}
}
