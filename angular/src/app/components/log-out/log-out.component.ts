import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  isShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.isShow = !this.isShow;
  }

}
