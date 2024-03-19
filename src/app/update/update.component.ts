import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  update: any;
  data: any;
  backendUrl: any = "http://127.0.0.1:8000"
  imageUrl: string = "";
  constructor(
    private authService: AuthService,private router: ActivatedRoute,private fb: FormBuilder,private Router:Router
  ) { }
  
  updateForm = this.fb.group({
    name: [''],
    id: [''],
    description: [''],
    image_Path: ['']
  })

  ngOnInit(): void {                                                                                   

    this.authService.viewPosts(this.router.snapshot.params['id']).subscribe((res: any) => {
      console.log(res);
      this.imageUrl = this.backendUrl + '/' + res.response.data.image_path;
      this.updateForm.patchValue({
        name: res.response.data.name,
        id: res.response.data.id,
        description: res.response.data.description,
        image_Path : res.response.data.image_path,
      })
    });
  }

  updateData() {
    this.authService.updatedPosts(this.router.snapshot.params['id'], this.updateForm.value).subscribe((res: any) => {
      console.log(res);
      this.Router.navigate(["/post"])
    })
  }

}


