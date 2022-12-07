import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { NavbarComponent } from './navbar/navbar.component';


const myroute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
    
  },
  {
    path:"login",
    component:UserLoginComponent
    
  },
  {
    path:"signup",
    component:UserSignupComponent
    
  },
  {
    path:"admin",
    component:AddProductComponent
    
  },
  {
    path:"view",
    component:ViewProductComponent
    
  },
  {
    path:"search",
    component:SearchProductComponent
    
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserSignupComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
