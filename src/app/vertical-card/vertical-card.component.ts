import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent {
  @Input() img: string;
  @Input() title: string;
  @Input() button: string;
  @Input() link: string;

  constructor(){
    this.img = "";
    this.title = "Missing Title";
    this.button = "";
    this.link = "";
  }
}
