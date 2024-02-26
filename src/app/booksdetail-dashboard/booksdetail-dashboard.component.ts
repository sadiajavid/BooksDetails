import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-booksdetail-dashboard',
  templateUrl: './booksdetail-dashboard.component.html',
  styleUrl: './booksdetail-dashboard.component.css'
})
export class BooksdetailDashboardComponent {
  searchText = '';

  POST:any;
  page:number=1;
  count:number=0;
  tableSize:number=10;
 formValue!:FormGroup 

onTableChange(event:any){
this.page=event
}


}
