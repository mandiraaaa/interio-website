import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ThankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
