//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-itemsinside',
  templateUrl: './admin-itemsinside.component.html',
  styleUrls: ['./admin-itemsinside.component.css']
})
export class AdminItemsinsideComponent {
  productssdata: any;
  constructor(private ProductService: ProductService, private httpClient: HttpClient){}

  ngOnInit(){
    this.ProductService.GetProduct().subscribe((response: any) =>{
      console.log(response);
      this.productssdata=response;
    });

    this.ProductService.DeleProduct().subscribe((response: any) =>{
      console.log(response);
      this.productssdata=response;
    });
      
  }
}
