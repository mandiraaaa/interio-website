//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-shopwith1',
  templateUrl: './shopwith1.component.html',
  styleUrls: ['./shopwith1.component.css']
})
export class Shopwith1Component {
  porductdata: any;
  constructor(private ProductService: ProductService, private httpClient: HttpClient){}

  ngOnInit(){
    this.ProductService.GetProduct().subscribe((response: any) =>{
      console.log(response);
      this.porductdata=response;
    })
  }
}
