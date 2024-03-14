import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';


const routes: Routes = [{path:"",redirectTo:"/auth",pathMatch:"full"},
{path:"auth",component:AuthComponent},
{path:"post",component:GetPostsComponent},
{path:"update/:id",component:UpdateComponent},
{path:"profile",component:ProfileComponent},
{path:"forget",component:ForgetpassComponent},
{path:"reset",component:ResetpassComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
