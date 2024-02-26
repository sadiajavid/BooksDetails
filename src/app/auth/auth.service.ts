import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Model } from './user.model';
export interface UserData {
  name: string;
  email: string;
  phone: string;
  status: number;
  updated_at: string;
  created_at: string;
  id: number;
}
export interface Auth {
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
  user: Subject<Model> = new Subject<Model>();
  constructor(private http: HttpClient) { }
  onRegister(email: string, password: string, name: string, status: number, phone: string): Observable<Auth> {
    return this.http.post<Auth>("http://127.0.0.1:8000/api/register", {
      email: email, password: password, name: name, phone: phone, status: status
    }).pipe(tap(res=>{
      this.handleAuthentication(res)
    }))
  }
  onLogin(email: string, password: string ): Observable<Auth> {
    return this.http.post<Auth>("http://127.0.0.1:8000/api/login", {
      email: email, password: password
    })
  }

  handleAuthentication(response: any): void {
  
    const access_token = response.response.access_token;
    const expires_in = response.response.expires_in;
    const token_type = response.response.token_type;
    const user = new Model(access_token, expires_in, token_type);
    this.user.next(user);
  }
}
