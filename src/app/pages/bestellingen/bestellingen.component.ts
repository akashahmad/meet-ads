import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestellingen',
  templateUrl: './bestellingen.component.html',
  styleUrls: ['./bestellingen.component.css'],
})
export class BestellingenComponent implements OnInit {
  constructor() {}
  HEROES = [
    {
      id: 1,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 2,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 3,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 4,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 5,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 6,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 7,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 8,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
  ];
  itemId = 0;
  showPopup = false;
  ngOnInit(): void {}
  currentItem = 'Bestellingen ';
  onItemClick(id: any) {
    this.itemId = id;
    if (this.itemId === id && this.showPopup === true) {
      this.showPopup = false;
    } else if (this.itemId === id && this.showPopup === false) {
      this.showPopup = true;
    }
  }
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
}
