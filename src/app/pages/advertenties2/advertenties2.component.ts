import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertenties2',
  templateUrl: './advertenties2.component.html',
  styleUrls: ['./advertenties2.component.css']
})
export class Advertenties2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentItem = 'Advertenties';
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
}
