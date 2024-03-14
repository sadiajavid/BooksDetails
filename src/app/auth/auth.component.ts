import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authObs: any;

  toastr: any;
email: any;


  constructor(private authService: AuthService) { }
  phone: string = '';
  isLogin = false;
  
  onSignUp() {
    this.isLogin = !this.isLogin;
  }

onSubmit(form: NgForm) {
  if (!form.valid) {
    return;
  }
  const email = form.value.email;
  const password = form.value.password;
  const name = form.value.name;
  const status = form.value.status;
  const phone = String(form.value.phone);

  if (this.isLogin) {
    this.authObs = this.authService.onLogin(email, password);
  
  } else {
    this.authObs = this.authService.onRegister(email, password, name, status, phone);
  }

  this.authObs.subscribe((res: any) => {
    
    console.log(res);
  });

}


}