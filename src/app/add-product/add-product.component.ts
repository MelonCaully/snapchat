import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../vertical-card/product.model';
import { ProductsService } from '../vertical-card/products.service';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private ps:ProductsService) {}
    
  ngOnInIt(): void {}

  addProduct(product:ProductModel) {
    console.log("You clicked update card info");
    console.log(product);
    this.ps.addProduct(product);
  }
  
}
