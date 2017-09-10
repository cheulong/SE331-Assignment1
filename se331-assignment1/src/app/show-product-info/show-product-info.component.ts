import { Component, OnInit } from '@angular/core';
import { Product} from './products';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { ProductsDataService} from '../services/products-data.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-show-product-info',
  templateUrl: './show-product-info.component.html',
  styleUrls: ['./show-product-info.component.css']
})
export class ShowProductInfoComponent implements OnInit {
	product:Product;
  constructor(private route:ActivatedRoute, private router:Router,private productsDataService:ProductsDataService) { }

  ngOnInit() {
  	this.route.params.switchMap((params:Params)=>this.productsDataService.getProductData(+params['id']))
  	.subscribe((product:Product)=>this.product=product);
  }

}
