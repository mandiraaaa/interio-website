//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-diningtdetails2',
  templateUrl: './diningtdetails2.component.html',
  styleUrls: ['./diningtdetails2.component.css']
})
export class Diningtdetails2Component {
  porductdata: any;
  constructor(private ProductService: ProductService, private httpClient: HttpClient){}
  ngOnInit(){
    this.ProductService.GetProduct().subscribe((response: any) =>{
      console.log(response);
      this.porductdata=response;
    })
  }
}
