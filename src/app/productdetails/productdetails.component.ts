import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
description = 'ELEGANT DRESSING TABLE WITH SIDE CUPBOARD';
richDescription = 'A dressing table is in itself a complete furniture unit with a mirror, a table with chest of drawers and a stool to sit on. It is a very significant storage unit in every household. This furniture unit in many homes is used to keep clothes, makeup items and other accessories. It is a very useful utility item.  Buy it online or offline: There is a lot of variety of dressing table in the shops. You can also look at the online sites as you will able to look at the different options while sitting in your home. The sites are highly updated with the ongoing trends. Online shopping can be more profitable to you as there is free delivery available for many products.'
price = 'Rs. 100000' 
porductdata: any;
  constructor(private ProductService: ProductService, private httpClient: HttpClient){}
  ngOnInit(){
    this.ProductService.GetProduct().subscribe((response: any) =>{
      console.log(response);
      this.porductdata=response;
    })
  }
}
