import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertenties',
  templateUrl: './advertenties.component.html',
  styleUrls: ['./advertenties.component.css'],
})
export class AdvertentiesComponent implements OnInit {
  popup: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  closeNav() {
    this.popup = false;
  }
  openNav() {
    this.popup = true;
  }
  currentItem = 'Advertenties';
}
