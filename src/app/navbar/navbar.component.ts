import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {
  isAuthenticated = false;

  constructor(private authService:AuthService){}
  ngOnInit() {
  this.authService.user.subscribe(user => {
         this.isAuthenticated = user ? true : false;
       console.log('NavbarComponent constructor');
    });
  }
}
