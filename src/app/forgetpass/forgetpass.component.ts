import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
  email: string="";
  constructor(private authService: AuthService, private router:Router) { }
  forgetPass(email:string ) {
    this.authService.forget(email).subscribe(
      res => {
        console.log(res);
        Swal.fire("Password reset link sent to your email");
        this.router.navigate(["/auth"])
      }
 
    );
  }
}
