
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  name: string = '';
  description: string = '';
  image_path: string = '';
  status: string = '';
  updateForm: any;


  constructor(private createService: CreateService) { }
  onSubmit(form: NgForm) {
    this.createService.createData(this.name, this.description, this.image_path, this.status)
      .subscribe(
        res => {
          console.log(res);
          console.log(res.response.data.image_path);
          form.resetForm();
        }
      );
  }
}
