//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-diningtdetails',
  templateUrl: './diningtdetails.component.html',
  styleUrls: ['./diningtdetails.component.css']
})
export class DiningtdetailsComponent {
  description = 'TWO TONED GRANITE INTERFACE DINING TABLE';
  richDescription = 'The dining table is the heart of any home, providing a gathering place for family and friends to share meals, laughter, and memories.Made from high-quality materials, including solid wood, glass, and metal, our dining tables are built to last. our dining tables also offer stunning design elements that make them a focal point in any room. From sleek, minimalist lines to ornate, carved details, our collection of dining tables is sure to impress. And with a range of colors, finishes, and styles to choose from, youre sure to find the perfect dining table to suit your home and personal style.So why wait? Browse our collection of dining tables today and find the perfect gathering place for your home!'
  price = 'Rs. 2500000' 
  porductdata: any;
    constructor(private ProductService: ProductService, private httpClient: HttpClient){}
    ngOnInit(){
      this.ProductService.GetProduct().subscribe((response: any) =>{
        console.log(response);
        this.porductdata=response;
      })
    }
}
