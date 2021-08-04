import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactie',
  templateUrl: './transactie.component.html',
  styleUrls: ['./transactie.component.css']
})
export class TransactieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentItem = 'Transactie';

}
