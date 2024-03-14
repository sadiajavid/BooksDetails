import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  profileData:any;
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.userProfile();
  }
 userProfile() {
   this.authService.profile().subscribe((res:any)=>{
this.profileData=res.response.data;
    console.log(this.profileData)
   })
  }

}
