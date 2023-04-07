import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class CardComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() button: string;
  @Input() link: string;

  constructor() {
    this.img ="No Image Found";
    this.title = "No description found"
    this.button = "No Button found";
    this.link = "No Link found"
   }

  ngOnInit(): void {
  }

}