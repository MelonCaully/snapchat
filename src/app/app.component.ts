import { Component } from '@angular/core';
import { CardDisplayModel } from './body2/card_display.model';
import { mock_card_list } from './body2/mock_card_list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snapchat';
  cards: CardDisplayModel [] = [];

  constructor(){
    for(var card of mock_card_list){
      console.log(card);
      this.cards.push(card);
    }
  }
}
