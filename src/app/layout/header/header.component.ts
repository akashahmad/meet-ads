import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mySidenav: boolean = false;
  activeLink:string = "home"
  constructor() {
    if(window.location.pathname === "/"){
      this.activeLink ="home"
    }
    if(window.location.pathname === "/services"){
      this.activeLink ="services"
    }
    if(window.location.pathname === "/pricing"){
      this.activeLink ="pricing"
    }
  }
  ngOnInit(): void {}
  closeNav() {
    this.mySidenav = false;
  }
  openNav() {
    this.mySidenav = true;
  }
}
