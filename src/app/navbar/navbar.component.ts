import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent   {
  
authenticated=false;
password!: string;
email!: string;
  constructor(
   private authService:AuthService,private router:Router
  ) {}

  ngOnInit() {
   this.authService.user.subscribe(user => {
    this.authenticated=user?true:false
   
         console.log(user)
    });
  }
  onlogOut(){
    this.authService.logout(this.email,this.password).subscribe(res=>{
      console.log(res)
      this.authService.clearToken(); 
      this.router.navigate(["/auth"])
    })
  }
 

}
