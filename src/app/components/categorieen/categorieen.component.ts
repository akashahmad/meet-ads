import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorieen',
  templateUrl: './categorieen.component.html',
  styleUrls: ['./categorieen.component.css'],
})
export class CategorieenComponent implements OnInit {
  constructor() {}
  HEROES = [
    {
      id: 1,
      title1: 'FIAT 124',
      title2: 'Open om alle types te zien/bewerken van dit model.',
    },
    {
      id: 2,
      title1: 'FIAT 124',
      title2: 'Open om alle types te zien/bewerken van dit model.',
    },
    {
      id: 3,
      title1: 'FIAT 124',
      title2: 'Open om alle types te zien/bewerken van dit model.',
    },
    {
      id: 4,
      title1: 'FIAT 124',
      title2: 'Open om alle types te zien/bewerken van dit model.',
    },
    {
      id: 5,
      title1: 'FIAT 124',
      title2: 'Open om alle types te zien/bewerken van dit model.',
    },
  ];
  itemId = 0;
  showCloseId = 0;
  showPopup = false;
  popup = false;
  ngOnInit(): void {}
  closeNav() {
    this.popup = false;
  }
  openNav() {
    this.popup = true;
  }
  onItemClick(id: any) {
    // this.itemId = id;
    this.showCloseId = id;
    // if (this.itemId !== 0 && this.showCloseId === id && this.showPopup ) {
    //   this.showPopup = false;
    //   this.itemId = 0;
    //   console.log('name', this.showPopup);
    //   console.log('this.itemId', this.itemId);
    // } else 
    if (this.showPopup === false) {
      this.showPopup = true;
    }
  }
}
