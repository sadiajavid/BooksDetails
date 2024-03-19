import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrl: './resetpass.component.css'
})
export class ResetpassComponent {
  password: string='';
  password_confirmation: string='';
  email: string='';
  token: string='';
  
constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router){}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.email = params['email'];
    this.token = params['token'];
  });
}

Reset(){
  this.authService.resetpass(this.email,this.password,this.password_confirmation,this.token ).subscribe(res=>{
    console.log(res);
    Swal.fire(" password successfully reset");
    this.router.navigate(["/auth"])


  })
}

}
