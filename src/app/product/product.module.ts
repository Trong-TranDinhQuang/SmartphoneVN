import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from '../account/register/register.component';
import { LoginComponent } from '../account/login/login.component';
import { AccountComponent } from '../account/account.component';
const ProductRouters:Routes =[

  {
    path: "product/:id",
    component: ProductDetailComponent
  },
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Login',
    component:LoginComponent
  }

  

]

@NgModule({
  declarations: [
    ProductDetailComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent  

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRouters)
  ]
})
export class ProductModule {}
