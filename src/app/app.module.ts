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
import { AdminUserinsideComponent } from './admin-userinside/admin-userinside.component';
import { AdminItemsinsideComponent } from './admin-itemsinside/admin-itemsinside.component';
import { AdminOrderinsideComponent } from './admin-orderinside/admin-orderinside.component';
import { AdminCategoryinsideComponent } from './admin-categoryinside/admin-categoryinside.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { SofadetailsComponent } from './sofadetails/sofadetails.component';
import { Sofadetails2Component } from './sofadetails2/sofadetails2.component';
import { WardrobedetailsComponent } from './wardrobedetails/wardrobedetails.component';
import { Wardrobedetails2Component } from './wardrobedetails2/wardrobedetails2.component';
import { DiningtdetailsComponent } from './diningtdetails/diningtdetails.component';
import { Diningtdetails2Component } from './diningtdetails2/diningtdetails2.component';
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
    ContactusComponent,
    AdminUserinsideComponent,
    AdminItemsinsideComponent,
    AdminOrderinsideComponent,
    AdminCategoryinsideComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    AddOrderComponent,
    SofadetailsComponent,
    Sofadetails2Component,
    WardrobedetailsComponent,
    Wardrobedetails2Component,
    DiningtdetailsComponent,
    Diningtdetails2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
