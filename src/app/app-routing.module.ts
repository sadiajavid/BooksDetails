import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BooksdetailDashboardComponent } from './booksdetail-dashboard/booksdetail-dashboard.component';


const routes: Routes = [{path:"auth",component:AuthComponent},{path:"dashboard",component:BooksdetailDashboardComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
