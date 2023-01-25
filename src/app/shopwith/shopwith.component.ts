import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-shopwith',
  templateUrl: './shopwith.component.html',
  styleUrls: ['./shopwith.component.css']
})
export class ShopwithComponent {

  porductdata: any;
  constructor(private ProductService: ProductService, private httpClient: HttpClient){}

  ngOnInit(){
    this.ProductService.GetProduct().subscribe((response: any) =>{
      console.log(response);
      this.porductdata=response;
    })
  }
}
