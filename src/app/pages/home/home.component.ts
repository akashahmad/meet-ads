import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  show = false;
  title = 'angularTests';
  list = ['This is going to be text as MeetAds punchline.'];
  constructor() {}
  ngOnInit(): void {
    AOS.init({ once: true });
    let scrollRef = 0;
    window.addEventListener('scroll', function () {
      // increase value up to 10, then refresh AOS
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
  }
}
