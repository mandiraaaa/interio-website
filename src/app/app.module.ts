import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { Sec1Component } from './sec1/sec1.component';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { ShopwithComponent } from './shopwith/shopwith.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { Cart2Component } from './cart2/cart2.component';
import { ThankComponent } from './thank/thank.component';
import { Shopwith1Component } from './shopwith1/shopwith1.component';
import { Shopwith2Component } from './shopwith2/shopwith2.component';
import { Shopwith3Component } from './shopwith3/shopwith3.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { Productdetails1Component } from './productdetails1/productdetails1.component';
import { ChatComponent } from './chat/chat.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    ShopwithComponent,
    LoginComponent,
    CartComponent,
    Cart2Component,
    ThankComponent,
    Shopwith1Component,
    Shopwith2Component,
    Shopwith3Component,
    ProductdetailsComponent,
    Productdetails1Component,
    ChatComponent,
    AdminPageComponent,
    AdminUsersComponent,
    AdminOrdersComponent,
    CategoriesComponent,
    ItemsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
