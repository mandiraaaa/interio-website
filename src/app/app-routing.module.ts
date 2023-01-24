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

const routes: Routes = [
  {path:'',component:HeroComponent},
  {path:'shopwith',component:ShopwithComponent},
  {path: 'login',component:LoginComponent},
  {path: 'cart', component:CartComponent},
  {path: 'sec2', component:Sec2Component},
  {path: 'thank', component:ThankComponent},
  {path: 'productdetails', component:ProductdetailsComponent},
  {path: 'chat', component:ChatComponent},
  {path: 'admin-page', component:AdminPageComponent}
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
