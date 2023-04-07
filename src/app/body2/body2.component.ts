import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from './product.model';
import { mock_card_list } from './mock_card_list';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit{
  cards: ProductModel [] = [];

  constructor(private productsService:ProductsService){
    for(var card of mock_card_list){
      console.log(card);
      this.cards.push(card);
    }
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductModel []) => {
      console.log("Fetching Products");
      console.log(data);
    });
    throw new Error("Method not implemented");
  }
}
