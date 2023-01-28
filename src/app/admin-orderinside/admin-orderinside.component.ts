//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{OrdersService} from '../orders.service';
import { Orders } from '../orders';


@Component({
  selector: 'app-admin-orderinside',
  templateUrl: './admin-orderinside.component.html',
  styleUrls: ['./admin-orderinside.component.css']
})
export class AdminOrderinsideComponent {
  ordersdata: any;
  constructor(private OrdersService: OrdersService, private httpClient: HttpClient){}

  ngOnInit(){
    this.OrdersService.GetOrder().subscribe((response: any) =>{
      console.log(response);
      this.ordersdata=response;
    })
  }
}
