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
import { CatoteryComponent } from './catotery/catotery.component';
import { TelephoneComponent } from './catotery/telephone/telephone.component';
import { LaptopComponent } from './catotery/laptop/laptop.component';
import { SoundComponent } from './catotery/sound/sound.component';
import { ClockComponent } from './catotery/clock/clock.component';
import { SmarthomeComponent } from './catotery/smarthome/smarthome.component';
import { AccessoryComponent } from './catotery/accessory/accessory.component';
import { OldautumnComponent } from './catotery/oldautumn/oldautumn.component';
import { SecondhandgoodsComponent } from './catotery/secondhandgoods/secondhandgoods.component';
import { TelevisionComponent } from './catotery/television/television.component';
import { TechnewsComponent } from './catotery/technews/technews.component';
import { PromotionsComponent } from './catotery/promotions/promotions.component';
import { TabletComponent } from './catotery/tablet/tablet.component';
const routers:Routes=[
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'telephone',
    component: TelephoneComponent,
  },
  {
    path:'television',
    component:TelevisionComponent
  },
  {
    path:'technews',
    component:TechnewsComponent
  },
  {
    path:'sound',
    component:SoundComponent
  },
  {
    path:'smarthome',
    component:SmarthomeComponent
  },
  {
    path:'secondhandgoods',
    component:SecondhandgoodsComponent
  },
  {
    path:'promotions',
    component:PromotionsComponent
  },
  {
    path:'oldautumn',
    component:OldautumnComponent
  },
  {
    path:'laptop',
    component:LaptopComponent
  },
  {
    path:'clock',
    component:ClockComponent
  },
  {
    path:'accessory',
    component:AccessoryComponent
  },
  {
    path:'tablet',
    component:TabletComponent 
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
    CatoteryComponent,
    TelephoneComponent,
    LaptopComponent,
    SoundComponent,
    ClockComponent,
    SmarthomeComponent,
    AccessoryComponent,
    OldautumnComponent,
    SecondhandgoodsComponent,
    TelevisionComponent,
    TechnewsComponent,
    PromotionsComponent,
    TabletComponent

  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    AccountModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
