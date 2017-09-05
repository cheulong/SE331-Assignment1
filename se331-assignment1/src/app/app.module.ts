import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductInfoComponent } from './show-product-info/show-product-info.component';
import { ShowProductListComponent } from './show-product-list/show-product-list.component';

@NgModule({
  declarations: [
  AppComponent,
  AddProductComponent,
  ShowProductInfoComponent,
  ShowProductListComponent,

  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot([
    {path:'',component:ShowProductListComponent},
    {path:'product',component:ShowProductListComponent},
    {path:'add',component:AddProductComponent},
    {path:'productInfo',component:ShowProductInfoComponent},
    {path:'**',redirectTo:''}
    ], {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
