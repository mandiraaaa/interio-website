//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  description = 'ELEGANT DRESSING TABLE WITH SIDE CUPBOARD';
  richdescription = 'free side lamps';
  order = '1';
  total = 'Rs. 100000';
  price = 'Rs. 100000';
  porductdata: any;
  constructor(private ProductService: ProductService, private httpClient: HttpClient){}

  ngOnInit(){
    this.ProductService.GetProduct().subscribe((response: any) =>{
      console.log(response);
      this.porductdata=response;
    })
  }
}
