import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ShopwithComponent } from './shopwith/shopwith.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { Sec2Component } from './sec2/sec2.component';
import { ThankComponent } from './thank/thank.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ChatComponent } from './chat/chat.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminUserinsideComponent } from './admin-userinside/admin-userinside.component';
import { AdminItemsinsideComponent } from './admin-itemsinside/admin-itemsinside.component';
import { AdminOrderinsideComponent } from './admin-orderinside/admin-orderinside.component';
import { AdminCategoryinsideComponent } from './admin-categoryinside/admin-categoryinside.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { Shopwith1Component } from './shopwith1/shopwith1.component';
import { Shopwith2Component } from './shopwith2/shopwith2.component';
import { Shopwith3Component } from './shopwith3/shopwith3.component';

const routes: Routes = [
  {path:'',component:HeroComponent},
  {path:'shopwith',component:ShopwithComponent},
  {path: 'login',component:LoginComponent},
  {path: 'cart', component:CartComponent},
  {path: 'sec2', component:Sec2Component},
  {path: 'thank', component:ThankComponent},
  {path: 'productdetails', component:ProductdetailsComponent},
  {path: 'chat', component:ChatComponent},
  {path: 'admin', component:AdminPageComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'admin-userinside', component:AdminUserinsideComponent},
  {path: 'admin-itemsinside', component:AdminItemsinsideComponent},
  {path: 'admin-orderinside', component:AdminOrderinsideComponent},
  {path: 'admin-categoryinside', component:AdminCategoryinsideComponent},
  {path: 'edit/:_id', component:EditCategoryComponent},
  {path: 'add-category', component:AddCategoryComponent},
  {path: 'add-order', component:AddOrderComponent},
  {path: 'shopwith1', component:Shopwith1Component},
  {path: 'shopwith2', component:Shopwith2Component},
  {path: 'shopwith3', component:Shopwith3Component},
  {path: 'hero', component:HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor  (private router: Router){}
  login(){
this.router.navigate(['/login'])
  }
}
