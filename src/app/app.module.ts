import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthInterceptor } from './auth/auth.interceptor';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { FilterPipe } from './filter.pipe';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
   
    GetPostsComponent,
    CreateComponent,
    ProfileComponent,
    UpdateComponent,
    FilterPipe,
    ForgetpassComponent,
    ResetpassComponent,
  
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule,
    NgxPaginationModule,ReactiveFormsModule,ReactiveFormsModule

 
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
