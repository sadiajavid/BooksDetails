import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-booksdetail-dashboard',
  templateUrl: './booksdetail-dashboard.component.html',
  styleUrl: './booksdetail-dashboard.component.css'
})
export class BooksdetailDashboardComponent implements OnInit{

  POST:any;
  page:number=1;
  count:number=0;
  tableSize:number=10;
 
 constructor(private userSerive:UserService){}
 ngOnInit() {
  this.postList();
}

postList(){
  this.userSerive.getPosts().subscribe(res=>{
    this.POST=res;
    console.log(this.POST)
  })
}
onTableChange(event:any){
this.page=event


}
searchText = '';
}
