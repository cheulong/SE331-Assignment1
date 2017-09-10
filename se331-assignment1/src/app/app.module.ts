import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductInfoComponent } from './show-product-info/show-product-info.component';
import { ShowProductListComponent } from './show-product-list/show-product-list.component';
import { ProductsDataService} from './services/products-data.service';
import { LimitToPipe } from './limit-to.pipe';
@NgModule({
  declarations: [
  AppComponent,
  AddProductComponent,
  ShowProductInfoComponent,
  ShowProductListComponent,
  LimitToPipe,

  ],
  imports: [
  BrowserModule,
  FormsModule,

  RouterModule.forRoot([
    {path:'',component:ShowProductListComponent},
    {path:'product',component:ShowProductListComponent},
    {path:'add',component:AddProductComponent},
    {path:'productInfo/:id',component:ShowProductInfoComponent},
    {path:'**',redirectTo:''}
    ], {useHash:true})
  ],
  providers: [ ProductsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
