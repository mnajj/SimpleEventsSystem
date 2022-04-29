import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  logIn(email: string, password: string) {
    const result = this.http
      .post<any>(this.baseUrl + 'login', {
        email,
        password,
      })
      .subscribe((d) => console.log(d));
  }
}
