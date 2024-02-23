import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
isLogin=false;
onSignUp(){
  this.isLogin=!this.isLogin;
}
onSubmit(form:NgForm){
  if(!form.valid){
    return
  }
  console.log(form.value)
  
}
}