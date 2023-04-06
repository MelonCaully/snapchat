import { Component, OnInit } from '@angular/core';
import { CardDisplayModel } from '../card-display.model';
import { mock_card_list } from '../mock_card_list';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit{
  cards: CardDisplayModel [] = [];

  constructor(){
    for(var card of mock_card_list){
      console.log(card);
      this.cards.push(card);
    }
  }
  ngOnInit(): void {
    throw new Error("Method not implemented");
  }
}
