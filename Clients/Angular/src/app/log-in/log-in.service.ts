import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient, private router: Router) {}

  logIn(email: string, password: string): boolean {
    const result = this.http
      .post<any>(
        this.baseUrl + 'login',
        {
          email,
          password,
        },
        { observe: 'response' }
      )
      .subscribe(
        (res) => {
          if (res.status == 200) {
            this.saveAccessTokenToLocalStorage(res.body.token);
            this.router.navigate(['/home']);
            return true;
          } else {
            console.log(res.body);
            return false;
          }
        },
        (err) => {
          console.log(err);
        }
      );
    return false;
  }

  saveAccessTokenToLocalStorage(token: string) {
    window.localStorage.setItem('access-token', token);
  }
}
