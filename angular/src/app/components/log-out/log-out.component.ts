import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  isShow = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showModalLogOut() {
    this.isShow = !this.isShow;
  }

  logOut() {
    this.router.navigate(['/']);
  }

}
