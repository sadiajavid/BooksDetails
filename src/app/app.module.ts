import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksdetailDashboardComponent } from './booksdetail-dashboard/booksdetail-dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    BooksdetailDashboardComponent,
    AuthComponent,
    NavbarComponent,
    SearchPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule,
    NgxPaginationModule,

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
