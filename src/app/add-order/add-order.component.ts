import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export class Orders{
  //orderItems:string;
  status:string;
  totalPrice:string;
}
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
 errormsg:any;
 successmsg:any;
 Orders: Orders = new Orders();
 ordersForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private OrdersService: OrdersService, 
    private actrouter: ActivatedRoute, private router:Router
    ){}

    ngOnInit(): void {
      this.ordersForm = this.fb.group({
        //orderItems: ['', Validators.required],
        status: ['', Validators.required],
        totalPrice: ['', Validators.required],
      });
    }

    onSubmit(){
      if (!this.ordersForm.valid) {
        return;
      }
      if (this.ordersForm.valid){
        this.OrdersService.CreateNewOrder(this.ordersForm.value).subscribe((res)=>{
        console.log(res, 'data submittetd');
        this.ordersForm.reset();
        this.successmsg = res.message;
      })
      } else{
        this.errormsg = 'SUBMIT';
      }
    }
}
