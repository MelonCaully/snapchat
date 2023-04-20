import { Component } from '@angular/core';
import { ProductModel } from '../vertical-card/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor() {}
    
  ngOnInIt(): void {}

  addProduct(product:ProductModel) {
    console.log("You clicked update card info");
    console.log(product);
  }
  
}
