//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';



@Component({
  selector: 'app-wardrobedetails',
  templateUrl: './wardrobedetails.component.html',
  styleUrls: ['./wardrobedetails.component.css']
})
export class WardrobedetailsComponent {
  description = 'BLACK STEEL TWO DRAWER WARDROBE';
  richDescription = 'A wardrobe is a must-have piece of furniture in any home. It provides ample storage space for clothes, shoes, and other personal items, helping to keep your living space organized and clutter-free. Our collection of wardrobes features a wide variety of styles and designs to suit any taste, including modern and contemporary, traditional and classic, and even rustic and country-inspired options.Our wardrobes are made from high-quality materials and come in a range of sizes, from compact and space-saving models to spacious options that can accommodate even the largest wardrobes. Whether youre looking for a standalone wardrobe or a full walk-in closet system, we have the perfect solution to meet your needs. we have the perfect wardrobe for you.So why wait? Browse our collection of wardrobes today and find the perfect storage solution for your home!'
  price = 'Rs. 1500000' 
  porductdata: any;
    constructor(private ProductService: ProductService, private httpClient: HttpClient){}
    ngOnInit(){
      this.ProductService.GetProduct().subscribe((response: any) =>{
        console.log(response);
        this.porductdata=response;
      })
    }
}
