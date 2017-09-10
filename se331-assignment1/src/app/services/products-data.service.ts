import { PRODUCT } from '../mocks';
import { Injectable } from '@angular/core';
import { Product} from '../show-product-info/products';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

@Injectable()
export class ProductsDataService {
	products=PRODUCT;
  constructor() { }
  	getProductsData(){
		return PRODUCT;
	}
	getProductData(id:number){
		let product=this.products.find(product=>product.id===+id);
		return new Observable<Product>((subscriber:Subscriber<Product>)=>subscriber.next(product));
	}

}

