import { Component } from '@angular/core';
import { ProductModel } from './product.model';
import { mock_card_list } from './mock_card_list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snapchat';
  products: ProductModel [] = [];

  constructor(){
    for(var product of mock_card_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
