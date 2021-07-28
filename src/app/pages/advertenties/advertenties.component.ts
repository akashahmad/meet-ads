import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertenties',
  templateUrl: './advertenties.component.html',
  styleUrls: ['./advertenties.component.css'],
})
export class AdvertentiesComponent implements OnInit {
  popup: boolean = false;
  constructor() {}
  HEROES = [
    {
      id: 1,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
    {
      id: 2,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
    {
      id: 3,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
    {
      id: 4,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
    {
      id: 5,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
    {
      id: 6,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
    {
      id: 7,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
    {
      id: 8,
      titel: 'VW Tiguan 5NA...',
      euro: '€ 129.00',
      AangemaaktOp: '09 July, 2021 18:49',
      voorraan: '1 st',
      Gearchiveerd: 'Nee',
      Locatie: '-',
    },
  ];
  itemId = 0;
  showPopup = false;
  ngOnInit(): void {}
  closeNav() {
    this.popup = false;
  }
  openNav() {
    this.popup = true;
  }
  currentItem = 'Advertenties';
  onItemClick(id: any) {
    this.itemId = id;
    if (this.itemId === id && this.showPopup === true) {
      this.showPopup = false;
    } else if (this.itemId === id && this.showPopup === false) {
      this.showPopup = true;
    }
  }
}
