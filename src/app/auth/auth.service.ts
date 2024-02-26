import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  onRegister(email: string, password: string, name: string, status: number, phone: string): Observable<Auth> {
    return this.http.post<Auth>("http://127.0.0.1:8000/api/register", {
      email: email, password: password, name: name, phone: phone, status: status
    })
  }
  onLogin(email: string, password: string ): Observable<Auth> {
    return this.http.post<Auth>("http://127.0.0.1:8000/api/login", {
      email: email, password: password
    })
  }
}
