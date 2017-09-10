import { Component, OnInit } from '@angular/core';
import { PRODUCT} from '../mocks';
import { Router} from '@angular/router';
import { ProductsDataService} from '../services/products-data.service';
@Component({
  selector: 'app-show-product-list',
  templateUrl: './show-product-list.component.html',
  styleUrls: ['./show-product-list.component.css']
})
export class ShowProductListComponent implements OnInit {
	maxLength =false;
	products=PRODUCT;
  constructor(private productsDataService:ProductsDataService,private router:Router) { }

  ngOnInit() {
  	this.products=this.productsDataService.getProductsData();


  }

showInfo(product){
	this.router.navigate(['/productInfo',product.id]);
}

}
