import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  submittedData=new BehaviorSubject<any>(null)
  constructor(private http:HttpClient) { }
  createData(name:string,description:string,image_path:string,status:string):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/posts", {
      name: name, description: description, image_path: image_path, status: status
    }).pipe(tap((res: any) => {
      this.submittedData.next(res);
    }));
  }
  getSubmittedData():Observable<any>{
    return  this.submittedData.asObservable()
  }

}
