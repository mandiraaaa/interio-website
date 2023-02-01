//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';


@Component({
  selector: 'app-sofadetails',
  templateUrl: './sofadetails.component.html',
  styleUrls: ['./sofadetails.component.css']
})
export class SofadetailsComponent {
  description = 'WHITE COLOR BOHEMIAN SOFA';
  richDescription = 'The loft-style, cushioned sanctuary from freeway traffic fits into the decor schemes of most modern castles, and its low profile and svelte geometry make it easier to divide a room than talking about presidential politics or Spider-Man reboots. With this eight-legged icebreaker, you can shake up your interior traffic patterns and free your reign of sofadom from the chains of walls. Embrace your inner Daenerys Stormborn!'
  price = 'Rs. 500000' 
  porductdata: any;
    constructor(private ProductService: ProductService, private httpClient: HttpClient){}
    ngOnInit(){
      this.ProductService.GetProduct().subscribe((response: any) =>{
        console.log(response);
        this.porductdata=response;
      })
    }
}
