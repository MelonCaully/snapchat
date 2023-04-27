import { Component, OnInit } from '@angular/core';
import { ProductModel } from './vertical-card/product.model';
import { mock_card_list } from './vertical-card/mock_card_list';
import { ProductsService } from './vertical-card/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snapchat';
  products: ProductModel [] = [];

  constructor(private Productservice:ProductsService){

  }

  ngOnInit(): void {
    this.Productservice.getProducts().subscribe((data: ProductModel []) =>{
      for (var product of data){
        console.log(product)
        this.products.push(product)
      }
    })
  }
}
