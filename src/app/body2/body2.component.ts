import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../vertical-card/product.model';
import { ProductsService } from '../vertical-card/products.service';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit{
  products: ProductModel [] = [];

  constructor(private productsService:ProductsService){
  
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductModel []) => {
      console.log("Fetching Products");
      for (var product of data) {
        console.log(product);
        this.products.push(product);
      }
    });
  }
}
