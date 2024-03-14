import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CreateService } from '../create/create.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.css']
})

export class GetPostsComponent implements OnInit {
  searchText = '';
  posts: any;
  currentPage: number = 1;
  totalPages: number = 1;
  postData: any = {};
  postId: number = 0;
  pagination: number = 1;
  allStudents: number = 0;

 
  constructor(private authService: AuthService, private createService: CreateService) {
  }

  fetchData() {
    this.authService.getPosts(this.pagination).subscribe(
      (res: any) => {
        this.posts = res.response.data.data;
        this.allStudents = res.response.data.total;
        console.log(this.allStudents);
        console.log(this.posts);
      }
    );
  }

  ngOnInit() {
    this.fetchData();
    this.createService.getSubmittedData().subscribe((res: any) => {
      this.posts.push(res.response.data);
      console.log('Data from CreateService:', res);
    });
  }

  onViewPost(_postId: number) {
    this.authService.viewPosts(_postId).subscribe(
      (res) => {
        this.postData = res.response.data;
        console.log(this.postData);
      }
    );
  }

  onDelete(postId: number): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.authService.deletePosts(postId).subscribe(() => {
          console.log(`Post with ID ${postId} deleted successfully`);
          this.posts = this.posts.filter((post: { id: number; }) => post.id !== postId);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        });
      }
    });
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchData();
  }
  
}




