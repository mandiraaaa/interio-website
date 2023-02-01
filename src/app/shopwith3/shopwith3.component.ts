//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';
@Component({
  selector: 'app-shopwith3',
  templateUrl: './shopwith3.component.html',
  styleUrls: ['./shopwith3.component.css']
})
export class Shopwith3Component {
  porductdata: any;
  constructor(private ProductService: ProductService, private httpClient: HttpClient){}

  ngOnInit(){
    this.ProductService.GetProduct().subscribe((response: any) =>{
      console.log(response);
      this.porductdata=response;
    })
  }
}
