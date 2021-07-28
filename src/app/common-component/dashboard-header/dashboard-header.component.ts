import { Component, OnInit, Input } from '@angular/core';
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
    console.log("asd",this.Location.path())
  }

  ngOnInit(): void {}
  @Input() item = '';
  closeNav() {
    this.mySidenav = false;
  }
  openNav() {
    this.mySidenav = true;
  }
}
