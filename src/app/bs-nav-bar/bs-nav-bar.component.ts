import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-nav-bar.component.html',
  styleUrls: ['./bs-nav-bar.component.css']
})
export class BsNavBarComponent implements OnInit {

  // user = "Yatin Kapoor";
  user = null;
  constructor() { }

  ngOnInit() {
  }

  logout(){

  }
}
