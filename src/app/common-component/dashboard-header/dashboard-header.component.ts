import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent implements OnInit {
  activeRoute: string = '';
  mySidenav: boolean = false;
  constructor(private Location: Location) {
    this.activeRoute = this.Location.path();
  }
  ngOnInit(): void {}
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  closeNav() {
    this.mySidenav = false;
  }
  openNav() {
    this.mySidenav = true;
  }
  drawer: Boolean = true;
  showHide() {
    if (this.drawer === false) {
      this.drawer = true;
      this.newItemEvent.emit('true');
    } else {
      this.drawer = false;
      this.newItemEvent.emit('false');
    }
  }
  activeState() {
    if (typeof Storage !== 'undefined') {
      let data = localStorage.getItem('showSidenav');
      if (data === 'true') {
        localStorage.removeItem('showSidenav');
      } else {
        // Store
        localStorage.setItem('showSidenav', 'true');
      }
    }
  }
}
