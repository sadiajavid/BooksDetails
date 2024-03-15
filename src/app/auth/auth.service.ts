import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Model } from './user.model';

export interface UserData {
  name: string;
  email: string;
  phone: string;
  status: number;
  description: string;
  updated_at: string;
  created_at: string;
  image_path: string;
  id: number;
}
export interface Auth {
  response: any;
 message: string;
  status: number;
  data: UserData;
  access_token:string,
  expires_in:number,
  token_type:string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user = new BehaviorSubject<Model | null>(null);
  constructor(private http: HttpClient ,private router:Router) { }

  onRegister(email: string, password: string, name: string, status: number, phone: string): Observable<Auth> {
    return this.http.post<Auth>("http://127.0.0.1:8000/api/register", {
      email: email, password: password, name: name, phone: phone, status: status
    })
  }

  onLogin(email: string, password: string ): Observable<Auth> {
    return this.http.post<Auth>("http://127.0.0.1:8000/api/login", {
      email: email, password: password
    }).pipe(tap((res)=>{
     this.handleAuthentication(res.response.expires_in,res. response.access_token);
     this.router.navigate(["/post"])

    }))
  }

  private handleAuthentication(expires_in:number,accesstoken:string):void{
    const expirationDate=new Date (new Date().getTime()+ expires_in*1000);
    const user=new Model(accesstoken, expirationDate)
    this.user.next(user) 
    localStorage.setItem("userData",JSON.stringify(user));
    localStorage.setItem('token', accesstoken);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    
  }  

  getPosts(page: number) {
    return this.http.get(`http://127.0.0.1:8000/api/posts`+ '?page=' + page);
  }
  create(name:string,description:string,image_path:string,status:string){
    return this.http.post("http://127.0.0.1:8000/api/posts",
     {name:name,description:description,image_path:image_path,status:status})
  }

  viewPosts(id: number) {
    return this.http.get<any>(`http://127.0.0.1:8000/api/posts/${id}`);
  }
updatedPosts(id: any, formData: any) {
  return this.http.put(`http://127.0.0.1:8000/api/posts/${id}`, formData)  
 }

  deletePosts(postId: number): Observable<any>{
  return this.http.delete(`http://127.0.0.1:8000/api/posts/${postId}`)
 }

 restorePosts(postId:number,restore:any){
  return this.http.put(`http://127.0.0.1:8000/api/postss/${postId}`,restore)
 }

 logout(email:string,password:string){
  return this.http.post("http://127.0.0.1:8000/api/logout",{email,password} )
 }

 clearToken() {
  localStorage.removeItem('token'); 
  localStorage.removeItem('userData'); 
  localStorage.removeItem('expirationDate'); 

}

profile(){
  return this.http.get("http://127.0.0.1:8000/api/profile")
}

forget(email:string){
  return this.http.post("http://127.0.0.1:8000/api/password/email",{email:email})
}

resetpass(email:string,password:string,password_confirmation:string,token:string){
  return this.http.post("http://127.0.0.1:8000/api/password/reset",{email,password,password_confirmation,token})
}

  }

