import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './home/container/container.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';
const routers:Routes=[
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  // {
  //   path:'**',
  //   component:NOT FOUND WORK!
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    AccountComponent,

  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    AccountModule,
    RouterModule.forRoot(routers),
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
