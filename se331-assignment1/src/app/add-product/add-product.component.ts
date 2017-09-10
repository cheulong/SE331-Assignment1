import { Component, OnInit } from '@angular/core';
import { Product} from '../show-product-info/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 files:string;
  constructor() { }

  ngOnInit() {
  }
 onChange(event) {
  this.files = event.target.files[0].name;
   
  }
}
